import CommonHeader from "../../components/headers/common-headers";
import { ColFlex, StyledButton, StyledDiv, StyledInput } from "../../styles/common-styles";
import BottomNavigation from "../../components/bottom-navigation";
import { useEffect, useState } from "react";
import { TaskStatus, TaskType } from "../../models";
import TodoCard from "./todo-card";
import { getTodoData } from "../../apis";
import { setTasksData } from "../../utils/storage";
import { debouncedSearch } from "../../utils";
import AddTask from "./add-task";

const TODO = () => {
    const [rawData, setRawData] = useState<TaskType[]>([]);
    const [todos, setTodos] = useState<TaskType[]>([]);
    const [statusFilter, setStatusFilter] = useState<TaskStatus>(TaskStatus.all);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [openAddTask, setOpenAddTask] = useState<boolean>(false);

    const toggleOpenAddTask = () => {
        setOpenAddTask(!openAddTask);
    };

    const fetchTodo = async () => {
        const resp: TaskType[] = await getTodoData();
        setTasksData(resp);
        setRawData(resp);
        setTodos(resp);
        return resp;
    };

    const handleStatusChange = (status: TaskStatus, id: number) => {
        const updatedTask = todos?.map((task: TaskType) => (task.id === id ? { ...task, status } : task));
        setTodos(updatedTask);

        const updatedRawData = rawData.map((task: TaskType) => (task.id === id ? { ...task, status } : task));
        setTasksData(updatedRawData);

        updateTodoData(statusFilter);
    };

    const deleteTask = (id: number) => {
        const updatedTask = todos.filter((task: TaskType) => task.id !== id);
        setTodos(updatedTask);

        const updatedRawData = rawData.filter((task: TaskType) => task.id !== id);
        setTasksData(updatedRawData);
        updateTodoData(statusFilter, searchQuery);
    };

    const handleFilterChange = (filter: TaskStatus) => {
        setStatusFilter(filter);
        updateTodoData(filter, searchQuery);
    };

    const updateTodoData = async (filter: TaskStatus, search?: string) => {
        let updatedTask: TaskType[] = await fetchTodo();

        if (filter === TaskStatus.completed) {
            updatedTask = updatedTask.filter((task: TaskType) => task.status === TaskStatus.completed);
        } else if (filter === TaskStatus.incomplete) {
            updatedTask = updatedTask.filter((task: TaskType) => task.status === TaskStatus.incomplete);
        }
        if (search) {
            updatedTask = updatedTask.filter((task) => task.title.toLowerCase().includes(search.toLowerCase()));
        }

        setTodos(updatedTask);
    };

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
        debouncedUpdateTodoData(statusFilter, query);
    };

    const debouncedUpdateTodoData = debouncedSearch(updateTodoData, 2000);

    useEffect(() => {
        fetchTodo();
    }, []);

    return (
        <ColFlex
            ai="center"
            minH="100vh"
            maxW="500px"
            w="100%"
            h={"100vh"}
            bgc="#F3F6FE"
            style={{ position: "relative", boxShadow: "0px 9px 28px -6px #00000008" }}
        >
            <CommonHeader title="TODO" backPath="/" />
            <StyledDiv w="95%">
                <StyledDiv w="100%" d="flex" br="20px" mb="5px" mt="10px">
                    <StyledInput
                        b="none"
                        br="20px"
                        type="text"
                        placeholder="Search"
                        h="40px"
                        onChange={(e) => handleSearchChange(e?.target?.value || "")}
                    />
                    <StyledButton h="40px" br="20px" m="0 0 0 25px" onClick={toggleOpenAddTask}>
                        Add Task
                    </StyledButton>
                </StyledDiv>

                <StyledDiv w="100%" d="flex" br="20px" mb="5px" mt="5px">
                    <StyledButton
                        h="20px"
                        br="5px"
                        bgc={statusFilter === TaskStatus.all ? "#03C03C" : "#D3D3D3"}
                        onClick={() => handleFilterChange(TaskStatus.all)}
                    >
                        All
                    </StyledButton>
                    <StyledButton
                        h="20px"
                        br="5px"
                        bgc={statusFilter === TaskStatus.completed ? "#03C03C" : "#D3D3D3"}
                        onClick={() => handleFilterChange(TaskStatus.completed)}
                    >
                        Completed
                    </StyledButton>
                    <StyledButton
                        h="20px"
                        br="5px"
                        bgc={statusFilter === TaskStatus.incomplete ? "#03C03C" : "#D3D3D3"}
                        onClick={() => handleFilterChange(TaskStatus.incomplete)}
                    >
                        Incomplete
                    </StyledButton>
                </StyledDiv>

                {openAddTask && <AddTask showModal={openAddTask} onCancel={toggleOpenAddTask} />}

                {todos?.map((task) => {
                    return <TodoCard task={task} key={task?.id} handleStatusChange={handleStatusChange} deleteTask={deleteTask} />;
                })}

                <StyledDiv mb="100px" />
            </StyledDiv>

            <BottomNavigation active={"TODO"} />
        </ColFlex>
    );
};

export default TODO;

import { useState } from "react";
import { useScreenSizes } from "../../hooks/use-screen-size";
import { StyledButton, StyledDiv, StyledInput, StyledModal } from "../../styles/common-styles";
import { TaskStatus, TaskType } from "../../models";
import { getTasksData, setTasksData } from "../../utils/storage";

const AddTask = (props: any) => {
    const { responsiveDisplay } = useScreenSizes();
    const [newTask, setNewTask] = useState<TaskType>({
        id: Date.now(),
        title: "",
        createdAt: new Date(),
        dueDate: new Date(),
        status: TaskStatus.incomplete
    });

    const handleTaskChange = (event: any) => {
        const title = event?.target?.value;
        let updatedTask: TaskType = { ...newTask, title };
        setNewTask(updatedTask);
    };

    const handleAddTask = () => {
        if (!newTask?.title) return;
        const allTasks = getTasksData();
        setTasksData([...allTasks, newTask]);
        props?.onCancel();
        window.location.reload();
    };

    return (
        <StyledModal
            width={responsiveDisplay("470px", "90vw")}
            open={props?.showModal}
            centered={true}
            footer={false}
            closable={true}
            maskClosable={false}
            onCancel={props?.onCancel}
        >
            <StyledDiv mt="25px" />
            <StyledInput mt="100px" b="none" br="8px" type="text" placeholder="Task" h="52px" value={newTask?.title} onChange={handleTaskChange} />

            <StyledButton
                id="add-task-confirm"
                w="100%"
                br="4px"
                b="1px solid #134885"
                bgc="#134885"
                c="#fff"
                m="10px auto 0"
                disabled={!newTask?.title}
                onClick={handleAddTask}
            >
                Add Task
            </StyledButton>
        </StyledModal>
    );
};

export default AddTask;

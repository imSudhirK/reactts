import { CheckCircle, Circle, TrashSimple } from "@phosphor-icons/react";
import { StyledDiv, StyledText } from "../../styles/common-styles";
import { TaskStatus, TaskType } from "../../models";
import { useState } from "react";

const TodoCard = ({
    task,
    handleStatusChange,
    deleteTask
}: {
    task: TaskType;
    handleStatusChange: (status: TaskStatus, id: number) => void;
    deleteTask: (id: number) => void;
}) => {
    const [isCompleted, setIsCompleted] = useState<boolean>(task.status === TaskStatus.completed);

    const toggleCompleted = () => {
        handleStatusChange(isCompleted ? TaskStatus.incomplete : TaskStatus.completed, task.id);
        setIsCompleted(!isCompleted);
    };

    return (
        <StyledDiv w="100%" d="flex" b="1px solid #E9EBED" br="10px" mb="5px" mt="10px" p="15px 10px">
            <StyledDiv onClick={toggleCompleted} style={{ cursor: "pointer" }}>
                {isCompleted ? <CheckCircle size={28} color="green" /> : <Circle size={28} color="#222222B2" />}
            </StyledDiv>

            <StyledDiv w="100%" ml="15px" style={{ flex: 1 }}>
                <StyledText ta="left" fs="20px" fw="500">
                    {task?.title}
                </StyledText>
            </StyledDiv>
            <TrashSimple
                size={24}
                color="red"
                style={{ cursor: "pointer" }}
                onClick={() => {
                    deleteTask(task.id);
                }}
            />
        </StyledDiv>
    );
};

export default TodoCard;

import { TaskType } from "../models";

export function setTasksData(tasks: TaskType[]) {
    sessionStorage.setItem("tasks", JSON.stringify(tasks));
}
export function getTasksData() {
    const data = sessionStorage.getItem("tasks");
    if (!data) return;
    return JSON.parse(data);
}

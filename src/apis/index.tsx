import usersData from "../datas/user.json";
import notesData from "../datas/notes.json";
import todoData from "../datas/todo.json";
import { clearStorage, setAccessToken } from "../utils/common";
import { getTasksData } from "../utils/storage";

export async function login() {
    setAccessToken("temporary-token");
}

export async function logout() {
    clearStorage();
}

export async function getUserData() {
    return usersData;
}

export async function getNotesData() {
    return notesData;
}

export async function getTodoData() {
    const data = getTasksData();
    if (data) return data;
    return todoData;
}

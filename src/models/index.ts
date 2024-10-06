export interface UserType {
    name: string;
    mobile: string;
}

export interface NoteType {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
}

export interface TaskType {
    id: number;
    title: string;
    createdAt: Date;
    dueDate: Date;
    status: TaskStatus;
}

export enum TaskStatus {
    all = "all",
    completed = "completed",
    incomplete = "incomplete"
}

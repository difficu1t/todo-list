export interface ToDoState {
  tasks: ITask[];
}

export interface ITask {
  id: number;
  text: string;
  done: boolean;
}
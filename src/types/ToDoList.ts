export interface ToDoState {
  tasks: ITask[];
}

export interface ITask {
  text: string;
  done: boolean;
}
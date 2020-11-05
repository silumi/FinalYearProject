export interface Todos {
  todoId: number;
  created: Date;

  description: string;
  title: string;
  started: Date;
  ended: Date;
  allDay: boolean;
  creatorId: number;
}

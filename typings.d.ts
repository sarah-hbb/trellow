import { Models } from "appwrite";

export interface Board {
  columns: Map<TypedColumn, Column>;
}

type TypedColumn = "todo" | "inprogress" | "done";

export interface ColumnType {
  id: TypedColumn;
  todos: Todo[];
}

export interface Todo {
  $id: string;
  $createdAt: string;
  title: string;
  status: TypedColumn;
  image?: Image;
}

interface Image {
  bucketId: string;
  filedId: string;
}

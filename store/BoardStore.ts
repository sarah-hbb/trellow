import { create } from "zustand";
import { Board, Column, TypedColumn } from "@/typings";
import { getTodosGroupedByColumn } from "@/lib/getTodosGroupedByColumn";

interface BoardStateType {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
}

export const useBoardStore = create<BoardStateType>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },
  getBoard: async () => {
    const board = await getTodosGroupedByColumn();
    set({ board });
  },
  setBoardState : (board)=> {set({board})}
}));

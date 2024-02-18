"use client";
import React, { useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useBoardStore } from "@/store/BoardStore";

const Board = () => {
  const getBoard = useBoardStore((state) => state.getBoard);
  useEffect(() => {
    getBoard();
  }, [getBoard]);

  return (
    <h1> board</h1>
    // <DragDropContext>
    //   <Droppable droppableId="board" direction="horizontal" type="column">
    //     {(provided) => <div>{/* Rendering all the columns */}</div>}
    //   </Droppable>
    // </DragDropContext>
  );
};

export default Board;

import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Board = () => {
  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => <div>{/* Rendering all the columns */}</div>}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;

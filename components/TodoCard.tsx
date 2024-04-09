"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import getUrl from "@/lib/getUrl";
import { useBoardStore } from "@/store/BoardStore";
import { Todo, TypedColumn } from "@/typings";
import { XCircleIcon } from "@heroicons/react/24/solid";
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";

type TodoCardProps = {
  todo: Todo;
  index: number;
  id: TypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

const TodoCard = ({
  todo,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}: TodoCardProps) => {
  const deleteTask = useBoardStore((state) => state.deleteTask);

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (todo.image) return;
    const fetchImage = async () => {
      const url = await getUrl(todo.image!);
      if (url) {
        setImageUrl(url.toString());
      }
    };

    fetchImage();
  }, [todo]);

  return (
    <div
      className="bg-white rounded-md p-2 space-y-2 drop-shadow-md "
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
    >
      <div className="flex justify-between items-center p-5">
        <p>{todo.title}</p>
        <button
          className="text-red-400 hover:text-red-800"
          onClick={() => deleteTask(index, todo, id)}
        >
          <XCircleIcon className="h-8 w-8" />
        </button>
      </div>

      {imageUrl && (
        <div className="h-60 w-full rounded-b-md">
          <Image src={imageUrl} alt="Task image" width={400} height={400} />
        </div>
      )}
    </div>
  );
};

export default TodoCard;

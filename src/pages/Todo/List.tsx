import React from "react";
import { TodoItemType } from "../../types/todoTypes";

type Props = {
  items: TodoItemType[];
  onUpdate: Function;
  onDelete: Function;
}

function List({ items, onUpdate, onDelete }: Props) {

	return (
    <>
      {items.map(item => 
        <li key={item.id} className="mb-2 break-words break-all flex">
          <input type="checkbox" checked={item.completed} className="mr-2" onChange={() => onUpdate(item.id)}/>
          <span className="flex-grow">{item.task}</span>
          <button className="text-gray-500 hover:text-gray-900" onClick={() => onDelete(item.id)}>x</button>
        </li>
      )}
    </>
  );
}

export default List;

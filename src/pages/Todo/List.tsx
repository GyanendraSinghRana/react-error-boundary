import React from "react";
import { ItemType } from "../../data/todoItems";

type Props = {
  items: ItemType[];
}

function List({ items }: Props) {

	return (
    <>
      {items.map(item => 
        <li key={item.id} className="mb-2">
          <input type="checkbox" checked={item.completed} className="mr-2" />
          {item.task}
        </li>
      )}
    </>
  );
}

export default List;

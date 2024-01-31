import React from "react";

function List({ items }) {

	return (
    <>
      {items.map(item => 
        <li key={item.id}>
          <input type="checkbox" checked={item.completed} />
          {item.task}
        </li>
      )}
    </>
  );
}

export default List;

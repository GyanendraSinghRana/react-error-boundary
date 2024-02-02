import React from "react";
import List from "./List";
import AddTodo from "./AddTodo";
import ErrorBoundary from "../../components/ErrorBoundary";
import { ItemType } from "../../data/todoItems";

type Props = {
	items: ItemType[];
}

function Todo({ items }: Props) {
  const completedItems = items.filter((item) => item.completed);
  const incompletedItems = items.filter((item) => !item.completed);

  return (
	<div className="border border-solid border-black rounded-3xl mx-auto my-10 p-10 w-1/2">
			<AddTodo />
			<ul className="ml-2">
				<ErrorBoundary>
					<List items={completedItems} />
				</ErrorBoundary>
				<br />
				<ErrorBoundary>
					<List items={incompletedItems} />
				</ErrorBoundary>
			</ul>
		</div>
  );
}

export default Todo;

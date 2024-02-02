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
		<>
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
		</>
  );
}

export default Todo;

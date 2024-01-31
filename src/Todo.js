import React from "react";
import List from "./List";
import AddTodo from "./AddTodo";
import ErrorBoundary from "./ErrorBoundary";

function Todo({ items }) {
  const completedItems = items.filter((item) => item.completed);
  const incompletedItems = items.filter((item) => !item.completed);

  return (
		<>
			<AddTodo />
			<ul>
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

import React, { useEffect, useState } from "react";
import List from "./List";
import AddTodo from "./AddTodo";
import ErrorBoundary from "../../components/ErrorBoundary";
import { getTodoList, setTodoList } from "../../services/todoService";
import { TodoItemType } from "../../types/todoTypes";

function Todo() {
	const [todos, setTodos] = useState<TodoItemType[]>([]); 
  const completedItems = todos.filter(item => item.completed);
  const incompletedItems = todos.filter(item=> !item.completed);

  useEffect(() => {
		setTodos(getTodoList());
  }, []);

	const handleOnAdd = (newTodo: TodoItemType) => {
		setTodos([...todos, newTodo]);
		setTodoList([...todos, newTodo]);
	}

	const handleOnUpdate = (id: string) => {
    const UpdatedTodoList = todos.map(item => item.id === id ? {...item, completed: !item.completed} : item);
		setTodos(UpdatedTodoList);
		setTodoList(UpdatedTodoList);
	}

  return (
		<div className="border border-solid border-black rounded-3xl mx-auto my-10 p-10 w-1/2">
			<AddTodo onAddTodo={handleOnAdd} />
			<ul className="ml-2">
				<ErrorBoundary>
					<List items={completedItems} onUpdate={handleOnUpdate} />
				</ErrorBoundary>
				<br />
				<ErrorBoundary>
					<List items={incompletedItems} onUpdate={handleOnUpdate} />
				</ErrorBoundary>
			</ul>
		</div>
  );
}

export default Todo;

import React, { useEffect, useState } from "react";
import List from "./List";
import AddTodo from "./AddTodo";
import ErrorBoundary from "../../components/ErrorBoundary";
import { addTodo, deleteTodo, getTodoList, updateTodo } from "../../services/todoService";
import { TodoItemType } from "../../types/todoTypes";

function Todo() {
	const [todos, setTodos] = useState<TodoItemType[]>([]); 
  const completedItems = todos.filter(item => item.completed);
  const incompletedItems = todos.filter(item=> !item.completed);

  useEffect(() => {
		setTodos(getTodoList());
  }, []);

	const handleOnAdd = (newTodo: TodoItemType) => {
		const updatedList = addTodo(newTodo);
		setTodos(updatedList);
	}

	const handleOnUpdate = (id: string) => {
    const updatedTodo = todos.find(item => item.id === id) as TodoItemType;
		const updatedList = updateTodo({...updatedTodo, completed: !updatedTodo.completed});
		setTodos(updatedList);
	}

	const handleOnDelete = (id: string) => {
		const updatedList = deleteTodo(id);
		setTodos(updatedList);
	}

  return (
		<div className="border border-solid border-black rounded-3xl mx-auto my-10 p-10 w-1/2">
			<AddTodo onAddTodo={handleOnAdd} />
			<ul className="ml-2">
				<ErrorBoundary>
					<List items={completedItems} onUpdate={handleOnUpdate} onDelete={handleOnDelete} />
				</ErrorBoundary>
				<br />
				<ErrorBoundary>
					<List items={incompletedItems} onUpdate={handleOnUpdate} onDelete={handleOnDelete} />
				</ErrorBoundary>
			</ul>
		</div>
  );
}

export default Todo;

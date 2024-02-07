import { TodoItemType } from "../types/todoTypes";

const getTodoList = (): TodoItemType[] => {
	const data = localStorage.getItem("todo");
	return data ? JSON.parse(data) : [];
}

const setTodoList = (newTodoList: TodoItemType[]) => {
	localStorage.setItem("todo", JSON.stringify(newTodoList));
}

const addTodo = (newTodo: TodoItemType): TodoItemType[] => {
	const todoList = getTodoList();
	todoList.push(newTodo);
	
	setTodoList(todoList);

	return todoList;
}

const updateTodo = (newTodo: TodoItemType): TodoItemType[] => {
	const todoList = getTodoList();
	const updatedTodoList = todoList.map(todo => (todo.id === newTodo.id ? newTodo : todo));
	
	setTodoList(updatedTodoList);

	return updatedTodoList;
}

const deleteTodo = (id: string): TodoItemType[] => {
	const todoList = getTodoList();
	const updatedTodoList = todoList.filter(todo => todo.id !== id);
	
	setTodoList(updatedTodoList);

	return updatedTodoList;
}

export {
	getTodoList,
	addTodo,
	updateTodo,
	deleteTodo
}

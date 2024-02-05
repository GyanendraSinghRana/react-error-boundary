import { TodoItemType } from "../types/todoTypes";

const getTodoList = () => {
	const data = localStorage.getItem("todo");
	return data ? JSON.parse(data) : [];
}

const setTodoList = (newTodoList: TodoItemType[]) => {
	localStorage.setItem("todo", JSON.stringify(newTodoList));
}

export {
	getTodoList,
	setTodoList
}

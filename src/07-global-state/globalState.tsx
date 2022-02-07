import { useRef, useCallback } from "react";
import { useTodos } from "./useTodos";

const initialTodos = [{ id: 0, text: "Hey there", done: false }];

function EpsSeven() {
	const { todos, addTodo, removeTodo } = useTodos(initialTodos);

	const newTodoRef = useRef<HTMLInputElement>(null);

	const onAddTodo = useCallback(() => {
		if (newTodoRef.current) {
			addTodo(newTodoRef.current.value);
			newTodoRef.current.value = "";
		}
	}, [addTodo]);

	return (
		<div className="App">
			<h1 style={{ marginBottom: "0.5rem", marginTop: "2rem" }}>Todos with Global State</h1>
			{todos.map((todo) => (
				<div key={todo.id}>
					{todo.text}

					<button onClick={() => removeTodo(todo.id)}>Remove</button>
				</div>
			))}
			<div>
				<input type="text" ref={newTodoRef} />
				<button onClick={onAddTodo}>Add Todo</button>
			</div>
		</div>
	);
}

export default EpsSeven;

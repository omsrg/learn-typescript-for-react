import React, { useRef, useCallback } from "react";
import { useTodos } from "../useTodos";

function EpsFive() {
	const { todos, addTodo, removeTodo } = useTodos([{ id: 0, text: "Hey there", done: false }]);

	const newTodoRef = useRef<HTMLInputElement>(null);

	const onAddTodo = useCallback(() => {
		if (newTodoRef.current) {
			addTodo(newTodoRef.current.value);
			newTodoRef.current.value = "";
		}
	}, [addTodo]);

	function UL<T>({
		items,
		render,
		itemClick,
	}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> & {
		items: T[];
		render: (item: T) => React.ReactNode;
		itemClick: (item: T) => void;
	}) {
		return (
			<ul>
				{items.map((item, idx) => (
					<li onClick={() => itemClick(item)} key={idx}>
						{render(item)}
					</li>
				))}
			</ul>
		);
	}

	return (
		<div className="App">
			<h1 style={{ marginBottom: "0.5rem", marginTop: "2rem" }}>Todos with Generic Components</h1>
			<UL
				items={todos}
				itemClick={(item) => alert(item.id)}
				render={(todo) => (
					<>
						{todo.text}
						<button onClick={() => removeTodo(todo.id)}>Remove</button>
					</>
				)}
			/>

			<div>
				<input type="text" ref={newTodoRef} />
				<button onClick={onAddTodo}>Add Todo</button>
			</div>
		</div>
	);
}

export default EpsFive;

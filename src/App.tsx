import React, { useCallback, useState, useEffect, useReducer, useRef } from "react";
import "./App.css";

const Heading = ({ title }: { title: string }) => {
	return <h1>{title}</h1>;
};

const Box: React.FC = ({ children }) => {
	return <div>{children}</div>;
};

interface Payload {
	text: string;
}

interface Todo {
	id: number;
	done: boolean;
	text: string;
}

type ActionType = { type: "ADD"; text: string } | { type: "REMOVE"; id: number };

function App() {
	const [payload, setPayload] = useState<Payload | null>(null);

	useEffect(() => {
		fetch("/data.json")
			.then((res) => res.json())
			.then((data) => {
				setPayload(data);
			});
	}, []);

	const [todos, dispatch] = useReducer((state: Todo[], action: ActionType) => {
		switch (action.type) {
			case "ADD":
				return [
					...state,
					{
						id: state.length,
						text: action.text,
						done: false,
					},
				];
			case "REMOVE":
				return state.filter(({ id }) => id !== action.id);
			default:
				throw new Error();
		}
	}, []);

	const newTodoRef = useRef<HTMLInputElement>(null);

	const onAddTodo = useCallback(() => {
		if (newTodoRef.current) {
			dispatch({
				type: "ADD",
				text: newTodoRef.current.value,
			});
			newTodoRef.current.value = "";
		}
	}, []);

	return (
		<div className="App">
			<Box>{JSON.stringify(payload)}</Box>

			<Heading title="Todos" />
			{todos.map((todo) => (
				<div key={todo.id}>
					{todo.text}

					<button onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>Remove</button>
				</div>
			))}
			<div>
				<input type="text" ref={newTodoRef} />
				<button onClick={onAddTodo}>Add Todo</button>
			</div>
		</div>
	);
}

export default App;

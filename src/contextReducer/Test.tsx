// import { createContext, useReducer } from 'react';

// type AppState = typeof initialState;

// type Action = { type: 'SET_INPUT'; payload: number } | { type: 'SET_INPUT_TO_100' };

// interface InputProviderProps {
// 	children: React.ReactNode;
// }

// const initialState = {
// 	inputValue: 0,
// };

// const reducer = (state: AppState, action: Action) => {
// 	switch (action.type) {
// 		case 'SET_INPUT':
// 			return {
// 				...state,
// 				inputValue: action.payload,
// 			};
// 		case 'SET_INPUT_TO_100':
// 			return {
// 				...state,
// 				inputValue: 100,
// 			};
// 		default:
// 			return state;
// 	}
// };

// export const InputValueContext = createContext<{
// 	state: AppState;
// 	dispatch: React.Dispatch<Action>;
// }>({
// 	state: initialState,
// 	dispatch: () => {},
// });

// export const InputValueProvider = ({ children }: InputProviderProps) => {
// 	const [state, dispatch] = useReducer(reducer, initialState);

// 	return (
// 		<InputValueContext.Provider value={{ state, dispatch }}>{children}</InputValueContext.Provider>
// 	);
// };

import React, { createContext, useReducer } from 'react';

export const initialValues = {
	returnValue: true,
	On: () => {},
	Off: () => {},
};

export const AppContext = createContext(initialValues);

type State = {
	returnValue: boolean;
};

type Action = {
	type: 'one' | 'two';
};

function reducer(state: State, action: Action) {
	switch (action.type) {
		case 'one':
			return { returnValue: true };
		case 'two':
			return { returnValue: false };
		default:
			return state;
	}
}

export const AppProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialValues);

	return (
		<AppContext.Provider
			value={{
				returnValue: state.returnValue,
				On: () => dispatch({ type: 'one' }),
				Off: () => dispatch({ type: 'two' }),
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

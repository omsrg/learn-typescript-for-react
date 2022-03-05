import { createContext, useReducer } from 'react';

interface IProduct {
	id: number;
	name: string;
	desc: string;
}

type ActionType = { type: 'ADD'; payload: number } | { type: 'REMOVE'; payload: number };

const initialState: number[] = [];

type State = number[];

// const initiaValue: IProduct[] = []

export const CartContext = createContext<{
	state: typeof initialState;
	addToCart: (val: number) => void;
}>({
	state: initialState,
	addToCart: () => {},
});

const cartReducer = (state: typeof initialState, action: ActionType) => {
	switch (action.type) {
		case 'ADD':
			return [...state, action.payload];
		case 'REMOVE':
			return { ...state };
	}
};

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(cartReducer, []);

	const addToCart = (val: number) => {
		dispatch({ type: 'ADD', payload: val });
	};
	return <CartContext.Provider value={{ state, addToCart }}>{children}</CartContext.Provider>;
};

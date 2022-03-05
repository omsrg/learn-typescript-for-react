import { useContext } from 'react';
import { ContextProvider, CartContext } from './ContextAndReducer';

function Consumer() {
	const { state, addToCart } = useContext(CartContext);

	const onClick = (val: number) => {
		addToCart(val);
	};

	console.log(state);

	return (
		<div>
			<h1>Learn UseContext and Reducer</h1>
			<h3 style={{ marginBottom: '2rem' }}>I am the consumer</h3>

			<h1>Value: JSON.stringify(cartItems) </h1>

			<button onClick={() => onClick(4)}>Click Me</button>
		</div>
	);
}

const ConsumerWrapper = () => {
	return (
		<ContextProvider>
			<div>
				<Consumer />
			</div>
		</ContextProvider>
	);
};

export default ConsumerWrapper;

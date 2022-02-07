import React, { useCallback } from "react";

const Heading = ({ title }: { title: string }) => {
	return <h1>{title}</h1>;
};

const Box: React.FC = ({ children }) => {
	return <div>{children}</div>;
};

const List: React.FC<{ items: string[]; onClick?: (item: string) => void }> = ({
	items,
	onClick,
}) => {
	return (
		<ul>
			{items.map((item, idx) => (
				<li key={idx} onClick={() => onClick?.(item)}>
					{item}
				</li>
			))}
		</ul>
	);
};

function EpsOne() {
	const onListClick = useCallback((item: string) => {
		alert(item);
	}, []);

	return (
		<div className="App">
			<Heading title="Introduction" />
			<Box>Hello from the other side</Box>
			<List items={["one", "two", "three"]} onClick={onListClick} />
		</div>
	);
}

export default EpsOne;

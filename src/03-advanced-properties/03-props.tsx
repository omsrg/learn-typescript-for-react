import React, { useState } from "react";

const Button: React.FC<
	React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
		title?: string;
	}
> = ({ title, children, style, ...rest }) => (
	<button
		{...rest}
		style={{ ...style, backgroundColor: "lightblue", color: "white", fontSize: "xx-large" }}
	>
		{title ?? children}
	</button>
);

const useNumber = (initialValue: number) => useState<number>(initialValue);

type UseNumberValue = ReturnType<typeof useNumber>[0];
type UseNumberSetValue = ReturnType<typeof useNumber>[1];

const Incrementer: React.FC<{
	value: UseNumberValue;
	setValue: UseNumberSetValue;
}> = ({ value, setValue }) => {
	return (
		<>
			{/* <Button onClick={() => setValue(value + 1)}>Add - {value}</Button> */}
			<Button onClick={() => setValue(value + 1)} title={`Add - ${value}`} />
		</>
	);
};

function EpsThree() {
	const [value, setValue] = useNumber(0);

	return (
		<div className="App">
			<Incrementer value={value} setValue={setValue} />
		</div>
	);
}

export default EpsThree;

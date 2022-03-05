import React from 'react';
import './App.css';
import EpsOne from './01-properties/01-props';
import EpsTwo from './02-hooks/02-hooks';
import EpsThree from './03-advanced-properties/03-props';
import EpsFour from './04-custom-hooks/customHooks';
import EpsFive from './05-generic-components/genComp';
import EpsSixWrapper from './06-useContext/06-useContext';
import EpsSeven from './07-global-state/globalState';
import ConsumerWrapper from './contextReducer/Consumer';

function App() {
	return (
		<div className='App'>
			{/* <EpsOne /> */}
			{/* <EpsTwo /> */}
			{/* <EpsThree /> */}
			{/* <EpsFour /> */}
			{/* <EpsFive /> */}
			{/* <EpsSixWrapper /> */}
			{/* <EpsSeven /> */}
			<ConsumerWrapper />
		</div>
	);
}

export default App;

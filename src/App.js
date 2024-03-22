import { React } from 'react';
import './App.scss';
import AccountsData from './components/AccountsData';
import MapAddition from './components/MapAddition';

const App = () =>
	<div className="App">
		<AccountsData/>
		<MapAddition/>
		Ready to start.
	</div>;

export default App;

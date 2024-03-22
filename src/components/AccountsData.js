import { React } from 'react';
import { map } from '@laufire/utils/collection';
import { peek } from '@laufire/utils/debug';

const accounts = {
	1: { name: 'Arun', lname: 'Raja' },
	2: { name: 'Babu', lname: 'murugan' },
	3: { name: 'Chandra', lname: 'manickam' },
};
const balances = {
	1: 5000,
	2: 2000,
	3: 0,
};

const AccountsData = () => {
	const details = peek(map(accounts, (value, key) =>
		({ ...value, balances: balances[key] })));

	return <pre>{ JSON.stringify(details) }</pre>;
};

export default AccountsData;

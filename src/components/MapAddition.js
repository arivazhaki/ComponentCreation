/* eslint-disable no-undef */

import { map } from '@laufire/utils/collection';
import { peek } from '@laufire/utils/debug';

const students = {
	1: { name: 'arun' },
	2: { name: 'abi' },
};

const marks = {
	1: 400,
	2: 450,
};

// output:{
// 1: {
// name: 'arun',
// total: 400
// },
// 2: {
// name: 'abi',
// total: 450
// }
// }
const MapAddition = () => {
	peek(map(students, (value, key) => ({ ...value, marks: marks[key] })));
	return 'Hi';
};

export default MapAddition;

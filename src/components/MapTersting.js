/* eslint-disable id-match */
import { peek } from '@laufire/utils/debug';
import { React } from 'react';
import { map } from '@laufire/utils/collection';

const student
= {
	studentId: '001',
	studentName: 'Arivu',
};

const FirstStudent = [
	'002',
	'Harshitha',
];

const MapTesting = () => {
	const Obj = map(student, (value, key) => value) ;
	const Obj1 = map(FirstStudent, (value, key) => value);

	peek(Obj);
	peek(Obj1);
	return <div>hi
	</div>;
};

export default MapTesting;

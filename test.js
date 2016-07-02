'use strcit';

import test from 'ava';
import ArraySpiral from './';

test('should returns next items', t => {
	const arr = new ArraySpiral();
	arr.push(0, 1, 2, 3, 4, 5);
	const itr = arr.iterator;

	t.is(itr.next(), 0);
	t.is(itr.next(), 1);
	t.is(itr.next(), 2);
	t.is(itr.next(), 3);
	t.is(itr.next(), 4);
	t.is(itr.next(), 5);
	t.is(itr.next(), 0);
	t.is(itr.next(), 1);
	t.is(itr.next(), 2);
	t.is(itr.next(), 3);
	t.is(itr.next(), 4);
	t.is(itr.next(), 5);
});

test('should returns next items even array has been changed', t => {
	const arr = new ArraySpiral();
	arr.push(0, 1, 2, 3, 4, 5);
	const itr = arr.iterator;

	t.is(itr.next(), 0);
	t.is(itr.next(), 1);
	t.is(itr.next(), 2);
	t.is(itr.next(), 3);
	t.is(itr.next(), 4);
	t.is(itr.next(), 5);

	arr.push(6);

	t.is(itr.next(), 6);
	t.is(itr.next(), 0);
	t.is(itr.next(), 1);
	t.is(itr.next(), 2);
	t.is(itr.next(), 3);
	t.is(itr.next(), 4);
	t.is(itr.next(), 5);
});

test('should returns prev items', t => {
	const arr = new ArraySpiral();
	arr.push(0, 1, 2, 3, 4, 5);
	const itr = arr.iterator;

	t.is(itr.prev(), 5);
	t.is(itr.prev(), 4);
	t.is(itr.prev(), 3);
	t.is(itr.prev(), 2);
	t.is(itr.prev(), 1);
	t.is(itr.prev(), 0);
	t.is(itr.prev(), 5);
	t.is(itr.prev(), 4);
	t.is(itr.prev(), 3);
	t.is(itr.prev(), 2);
	t.is(itr.prev(), 1);
	t.is(itr.prev(), 0);
});

test('should returns concated items', t => {
	let arr = new ArraySpiral();
	arr = arr.concat([0, 1, 2, 3, 4, 5]);
	const itr = ArraySpiral.iterator(arr);

	t.is(itr.next(), 0);
	t.is(itr.next(), 1);
	t.is(itr.next(), 2);
	t.is(itr.next(), 3);
	t.is(itr.next(), 4);
	t.is(itr.next(), 5);
	t.is(itr.next(), 0);
	t.is(itr.next(), 1);
	t.is(itr.next(), 2);
	t.is(itr.next(), 3);
	t.is(itr.next(), 4);
	t.is(itr.next(), 5);
});

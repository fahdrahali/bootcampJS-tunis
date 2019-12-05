import * as I from '../input';
import { func1, func2, transform, addition, lastName, keyValue } from './es6';

it('key and Value', () => {
	const obj = { firstName: 'Jean', lastName: 'Neymar', age: 26 };
	const result = keyValue(obj);
	expect(result).toEqual('firstName: Jean, lastName: Neymar, age: 26');
});

it('last Name', () => {
	const arr = I.arrayOfObjects.map(o => lastName(o));
	expect(arr).toEqual(['Neymar', 'Iniosse', 'Alwest']);
});

it('addition', () => {
	const a = 2;
	const b = 3;

	const total = addition(a, b);
	expect(total).toEqual(5);
});

it('array transformation to string', () => {
	expect(transform(I.array)).toEqual([
		'Nombre 0 : 0',
		'Nombre 1 : 27',
		'Nombre 2 : -11',
		'Nombre 3 : 2018',
	]);
});
describe('ES6', () => {
	describe('Example', () => {
		describe('func1', () => {
			it('empty entry should return empty', () => {
				expect(func1()).toEqual();
			});
			it('no empty entry should return entry param', () => {
				expect(func1(I.object)).toEqual(I.object);
			});
		});
		describe('func2', () => {
			it('should return true', () => {
				expect(func2()).toBeTruthy();
			});
		});
	});
});

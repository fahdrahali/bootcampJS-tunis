export const func1 = toto => toto;

export const func2 = () => true;

export const transform = array =>
	array.map((nombre, index) => `Nombre ${index} : ${nombre}`);
export const addition = (a, b) => a + b;
export const lastName = obj => obj.lastName;
export const keyValue = obj =>
	Object.keys(obj)
		.map(cle => `${cle}: ${obj[cle]}`)
		.join(', ');

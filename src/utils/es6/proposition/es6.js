// Arrays

export const stringifyElements = array =>
  Array.isArray(array) ? array.map((e, i) => `Number ${i + 1} : ${e}`) : [];

export const keepPositiveElements = array =>
  Array.isArray(array)
    ? array.reduce((_, e) => {
        if (Number.isInteger(e) && e > 0) _.push(e);
        return _;
      }, [])
    : [];

// Objects

export const getLastName = obj => (obj && obj.lastName ? obj.lastName : '');

// export const getLastNameBis = obj => {
//   const { lastName } = obj;
//   return lastName || '';
// };

export const getKey = obj => key => (obj && obj[key] ? obj[key] : '');

export const getKeys = obj => Object.keys(obj);

export const getValues = obj => Object.values(obj);

export const getEntries = obj => Object.entries(obj);

// Array of objects

export const addId = array =>
  Array.isArray(array) ? array.map((obj, i) => ({ ...obj, id: i })) : [];

export const findNeymar = array =>
  Array.isArray(array) && array.length > 0
    ? array.find(obj => getKey(obj)('lastName') === 'Neymar')
    : {};

export const getMoreThanAge = array => age =>
  Array.isArray(array) ? array.filter(obj => obj.age > age) : [];

export const getOlder = array =>
  Array.isArray(array)
    ? array.reduce((_, obj) => {
        if (!_.age || _.age < obj.age) return obj;
        return _;
      }, {})
    : {};

export const sumAges = array =>
  Array.isArray(array) ? array.reduce((_, obj) => _ + getKey(obj)('age'), 0) : 0;

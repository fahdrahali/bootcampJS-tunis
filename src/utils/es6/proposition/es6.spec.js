import * as I from '../input';
import * as F from './es6';

describe('ES6', () => {
  describe('Arrays', () => {
    describe('stringifyElements', () => {
      it('undefined input should return empty array', () => {
        expect(F.stringifyElements()).toEqual([]);
      });
      it('empty input array should return empty array', () => {
        expect(F.stringifyElements([])).toEqual([]);
      });
      it('no array input should return empty array', () => {
        expect(F.stringifyElements('PSG')).toEqual([]);
      });
      it('should return array with messages', () => {
        expect(F.stringifyElements(I.array)).toEqual([
          'Number 1 : 0',
          'Number 2 : 27',
          'Number 3 : -11',
          'Number 4 : 2018',
        ]);
      });
    });
    describe('keepPositiveElements', () => {
      it('undefined input should return empty array', () => {
        expect(F.keepPositiveElements()).toEqual([]);
      });
      it('empty input array should return empty array', () => {
        expect(F.keepPositiveElements([])).toEqual([]);
      });
      it('no array input should return empty array', () => {
        expect(F.keepPositiveElements('PSG')).toEqual([]);
      });
      it('should return array with positive numbers', () => {
        expect(F.keepPositiveElements(I.array)).toEqual([27, 2018]);
      });
      it('should return array with positive numbers', () => {
        expect(F.keepPositiveElements([...I.array, 28])).toEqual([27, 2018, 28]);
      });
    });
  });
  describe('Objects', () => {
    describe('getLastName', () => {
      it('empty entry object should return empty string', () => {
        expect(F.getLastName({})).toEqual('');
      });
      it('empty entry object should return empty string', () => {
        expect(F.getLastName(I.object)).toEqual('Neymar');
      });
    });
    describe('getKey', () => {
      it('empty entry object should return empty string', () => {
        expect(F.getKey({})('key')).toEqual('');
      });
      it('should return string', () => {
        expect(F.getKey(I.object)('firstName')).toEqual('Jean');
      });
    });
    describe('getKeys', () => {
      it('empty entry object should return empty array', () => {
        expect(F.getKeys({})).toEqual([]);
      });
      it('should return array of keys', () => {
        expect(F.getKeys(I.object)).toEqual(['firstName', 'lastName']);
      });
    });
    describe('getValues', () => {
      it('empty entry object should return empty array', () => {
        expect(F.getValues({})).toEqual([]);
      });
      it('should return array of values', () => {
        expect(F.getValues(I.object)).toEqual(['Jean', 'Neymar']);
      });
    });
    describe('getEntries', () => {
      it('empty entry object should return empty array', () => {
        expect(F.getEntries({})).toEqual([]);
      });
      it('should return array of entries', () => {
        expect(F.getEntries(I.object)).toEqual([['firstName', 'Jean'], ['lastName', 'Neymar']]);
      });
    });
  });
  describe('Arrays of objects', () => {
    describe('addId', () => {
      it('no array entry should return empty array', () => {
        expect(F.addId()).toEqual([]);
      });
      it('empty entry array should return empty array', () => {
        expect(F.addId([])).toEqual([]);
      });
      it('should return array with ids', () => {
        expect(F.addId(I.arrayOfObjects)).toEqual([
          { firstName: 'Jean', lastName: 'Neymar', age: 26, id: 0 },
          { firstName: 'Marc', lastName: 'Iniosse', age: 24, id: 1 },
          { firstName: 'Dany', lastName: 'Alwest', age: 35, id: 2 },
        ]);
      });
    });
    describe('findNeymar', () => {
      it('empty entry array should return empty object', () => {
        expect(F.findNeymar([])).toEqual({});
      });
      it('should return Neymar object', () => {
        expect(F.findNeymar(I.arrayOfObjects)).toEqual({
          firstName: 'Jean',
          lastName: 'Neymar',
          age: 26,
        });
      });
    });
    describe('getMoreThanAge', () => {
      it('empty entry array should return empty array', () => {
        expect(F.getMoreThanAge([])(0)).toEqual([]);
      });
      it('should return array of more than 25', () => {
        expect(F.getMoreThanAge(I.arrayOfObjects)(25)).toEqual([
          {
            firstName: 'Jean',
            lastName: 'Neymar',
            age: 26,
          },
          { firstName: 'Dany', lastName: 'Alwest', age: 35 },
        ]);
      });
      it('should return array of more than 100', () => {
        expect(F.getMoreThanAge(I.arrayOfObjects)(100)).toEqual([]);
      });
    });
    describe('getOlder', () => {
      it('empty entry array should return empty object', () => {
        expect(F.getOlder([])).toEqual({});
      });
      it('should return array of entries', () => {
        expect(F.getOlder(I.arrayOfObjects)).toEqual({
          firstName: 'Dany',
          lastName: 'Alwest',
          age: 35,
        });
      });
    });
    describe('sumAges', () => {
      it('empty entry array should return 0', () => {
        expect(F.sumAges([])).toEqual(0);
      });
      it('should return array of entries', () => {
        expect(F.sumAges(I.arrayOfObjects)).toEqual(85);
      });
    });
  });
});

import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';

export const all = starWarsNames;
export const random = uniqueRandomArray(starWarsNames);
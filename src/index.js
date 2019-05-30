import uniqueRandomArray from 'unique-random-array';
import actornames from './actornames.json';

export const all = actornames;
export const random = uniqueRandomArray(actornames);

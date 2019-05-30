import {
  expect
} from 'chai';
import {
  all,
  random
} from '.';

function isIncludeIn (arr) {
  return function is (item) {
    return arr.includes(item);
  };
}

function isArrayOfStrings (arr) {
  return arr.every(item => typeof item === 'string');
}

describe('starwars-names', () => {
  it('should have a list of all available names', () => {
    // starWarsNames.all
    // eslint-disable-next-line no-unused-expressions
    expect(isArrayOfStrings(all)).to.be.true;
  });
  it('should allow me to get a random name from the list', () => {
    // starWarsNames.random
    expect(random()).to.satisfy(isIncludeIn(all));
  });
});

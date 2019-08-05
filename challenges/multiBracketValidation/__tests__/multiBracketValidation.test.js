'use strict';

const multiBracketValidation = require('../multiBracketValidation.js');

describe('`multiBracketValidation` function', () => {
  it('should return `null` for an argument that is not a string', () => {
    const str = 0;
    expect(multiBracketValidation(str)).toBeNull();
  });
  it('should be true for a single pair of standalone brackets', () => {
    const str = '{}';
    expect(multiBracketValidation(str)).toBeTruthy();
  });
  it('should be true for standalone paired brackets', () => {
    const str = '{}(){}';
    expect(multiBracketValidation(str)).toBeTruthy();
  });
  it('should be true for balanced brackets with nested non-bracket characters', () => {
    const str = '()[[Extra Characters]]';
    expect(multiBracketValidation(str)).toBeTruthy();
  });
  it('should be false if the is a leading unbalanced bracket', () => {
    const str = '[({})';
    expect(multiBracketValidation(str)).toBeFalsy();
  });
  it('should be false if there is a trailing unbalanced bracket', () => {
    const str = '()(';
    expect(multiBracketValidation(str)).toBeFalsy();
  });
});
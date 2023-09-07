import { capitalization } from "./capitalization";

describe('Function anagrams', () => { 
  it('should be return anagramsed array', () => {
    let stringA = 'hello there good morning!'
    expect(capitalization(stringA)).toBe('Hello There Good Morning!');
  });
 })
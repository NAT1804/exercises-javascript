import { anagrams, anagrams2 } from "./print-step";

describe('Function anagrams', () => { 
  it('should be return anagramsed array', () => {
    let stringA = 'helloS'
    let stringB = 'lloShe'
    expect(anagrams2(stringA, stringB)).toBe(true);
  });
 })
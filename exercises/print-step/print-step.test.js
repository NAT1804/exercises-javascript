import { printStep, printStep2 } from "./print-step";

describe('Function anagrams', () => { 
  it('should be return ', () => {
    let output = '#  /n## /n###/n'
    expect(printStep2(3)).toBe(output);
  });
 })
import { arrayAddition } from "./array-addition";

describe('Function anagrams', () => { 
  it('should be return false', () => {
    let input = [5,7,16,1,2]
    expect(arrayAddition(input)).toBe(false);
  });

  it('should be return true', () => {
    let input = [3,5,-1,8,12]
    expect(arrayAddition(input)).toBe(true);
  });
 })
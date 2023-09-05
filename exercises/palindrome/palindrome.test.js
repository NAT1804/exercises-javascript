import { palindrome } from "./index.js";

describe('Function palindrome', () => { 
  it('should be return true if reversed string equal ', () => {
    let str = 'abba'

    expect(palindrome(str)).toBe(true)
  });
 })
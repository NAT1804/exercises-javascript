import { maxChar } from "./maxChar";

describe('Function maxChar', () => { 
  it('should be return character appear the most', () => {
    let str = 'abcccccccd 1123'

    expect(maxChar(str)).toBe('c')
  });
 })
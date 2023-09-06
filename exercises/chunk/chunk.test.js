import { chunk } from "./chunk";

describe('Function chunk', () => { 
  it('should be return chunked array', () => {
    let arr = [1, 2, 3, 4]

    expect(chunk(arr, 10)).toEqual([[1,2,3,4]])
  });
 })
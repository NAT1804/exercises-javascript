import { maxtrixSpiral } from "./matrix-spiral";

describe('Function matrix spiral', () => { 
  it('should be return matrix spiral', () => {
    expect(maxtrixSpiral(3)).toEqual([[1, 2, 3], [8, 9, 4], [7, 6, 5]]);
  });

  it('should be return matrix spiral', () => {
    expect(maxtrixSpiral(4)).toEqual([
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7]
    ]);
  });
 })
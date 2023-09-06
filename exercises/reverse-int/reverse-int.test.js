import { reverseInt } from "./reverse-int";

describe('Function reverseInt', () => {
  it('should be return 0', () => {
    expect(reverseInt(0)).toEqual(0)
  });

  it('should be return reversed positive number', () => {
    expect(reverseInt(12305)).toEqual(50321)
  });

  it('should be return reversed negative number', () => {
    expect(reverseInt(-12305)).toEqual(-50321)
  });

  it('should be return reversed negative number', () => {
    expect(reverseInt(-12300)).toEqual(-321)
  });

});
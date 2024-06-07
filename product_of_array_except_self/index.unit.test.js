const calcProductsOfOthers = require('./index')

describe('calcProductsOfOthers', () => {
  it('should return the product of all elements except itself for the input [1,2,3,4]', () => {
    const nums = [1, 2, 3, 4];
    const result = calcProductsOfOthers(nums);
    expect(result).toEqual([24, 12, 8, 6]);
  });

  it('should handle an array with two elements', () => {
    const nums = [1, 2];
    const result = calcProductsOfOthers(nums);
    expect(result).toEqual([2, 1]);
  });

  it('should handle an array with zero elements', () => {
    const nums = [1, 0, 3, 4];
    const result = calcProductsOfOthers(nums);
    expect(result).toEqual([0, 12, 0, 0]);
  });

  it('should handle an array with multiple zeros', () => {
    const nums = [0, 0];
    const result = calcProductsOfOthers(nums);
    expect(result).toEqual([0, 0]);
  });

  it('should handle an array with one element being 1', () => {
    const nums = [1, 0, 3, 4];
    const result = calcProductsOfOthers(nums);
    expect(result).toEqual([0, 12, 0, 0]);
  });

  it('should handle a large input array for performance testing', () => {
    const nums = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 100) + 1);
    const result = calcProductsOfOthers(nums);
    expect(result.length).toBe(100000);
  });

  it('should handle another large input array for performance testing', () => {
    const nums = Array.from({ length: 200000 }, () => Math.floor(Math.random() * 100) + 1);
    const result = calcProductsOfOthers(nums);
    expect(result.length).toBe(200000);
  });
});
const findMaximumSubarray = require('./index')

function maximumOfLargeArray(arr) {
  return arr.reduce((acc, cur) => {
    acc = Math.max(acc, cur)
    return acc
  }, arr[0])
}

describe('findMaximumSubarray', () => {
  it('should return the largest sum of contiguous subarray', () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const result = findMaximumSubarray(nums);
    expect(result).toBe(6);
  });

  it('should handle an array with a single negative number', () => {
    const nums = [-1];
    const result = findMaximumSubarray(nums);
    expect(result).toBe(-1);
  });

  it('should handle an array with a single positive number', () => {
    const nums = [1];
    const result = findMaximumSubarray(nums);
    expect(result).toBe(1);
  });

  it('should handle an array with all negative numbers', () => {
    const nums = [-2, -3, -1, -4];
    const result = findMaximumSubarray(nums);
    expect(result).toBe(-1);
  });

  it('should handle an array with all positive numbers', () => {
    const nums = [1, 2, 3, 4];
    const result = findMaximumSubarray(nums);
    expect(result).toBe(10);
  });

  it('should handle a large array for performance testing', () => {
    const nums = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 2001) - 1000);
    const result = findMaximumSubarray(nums);
    expect(result).toBeGreaterThanOrEqual(maximumOfLargeArray(nums));
  });

  it('should handle another large array for performance testing', () => {
    const nums = Array.from({ length: 200000 }, (_, i) => i % 2 === 0 ? i : -i);
    const result = findMaximumSubarray(nums);
    expect(result).toBeGreaterThanOrEqual(maximumOfLargeArray(nums));
  });
});
const findTwoSum = require("./index")

describe('findTwoSum', () => {
  it('should return indices of the two numbers that add up to the target sum', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = findTwoSum(nums, target);
    expect(result).toEqual([0, 1]);
  });

  it('should return null if no two numbers add up to the target sum', () => {
    const nums = [2, 7, 11, 15];
    const target = 10;
    const result = findTwoSum(nums, target);
    expect(result).toBeNull();
  });

  it('should handle negative numbers correctly', () => {
    const nums = [-3, 4, 3, 90];
    const target = 0;
    const result = findTwoSum(nums, target);
    expect(result).toEqual([0, 2]);
  });

  it('should handle a large array of numbers', () => {
    const nums = [];
    for (let i = 0; i < 1000000; i++) {
      nums.push(i);
    }
    const target = 1999997;
    const result = findTwoSum(nums, target);
    expect(result).toEqual([999998, 999999]);
  });

  it('should handle another large array of numbers', () => {
    const nums = [];
    for (let i = 0; i < 10000000; i++) {
      nums.push(i);
    }
    const target = 19999997;
    const result = findTwoSum(nums, target);
    expect(result).toEqual([9999998, 9999999]);
  });
});
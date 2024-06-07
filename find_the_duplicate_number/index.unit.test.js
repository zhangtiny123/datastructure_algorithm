const findDuplicateNumber = require('./index')

describe('findDuplicateNumber', () => {
  it('should return the duplicate number for the input [1,3,4,2,2]', () => {
    const nums = [1, 3, 4, 2, 2];
    const result = findDuplicateNumber(nums);
    expect(result).toBe(2);
  });

  it('should return the duplicate number for the input [3,1,3,4,2]', () => {
    const nums = [3, 1, 3, 4, 2];
    const result = findDuplicateNumber(nums);
    expect(result).toBe(3);
  });

  it('should return the duplicate number for the input [1,1]', () => {
    const nums = [1, 1];
    const result = findDuplicateNumber(nums);
    expect(result).toBe(1);
  });

  it('should return the duplicate number for the input [1,1,2]', () => {
    const nums = [1, 1, 2];
    const result = findDuplicateNumber(nums);
    expect(result).toBe(1);
  });

  it('should handle a large input array for performance testing', () => {
    const nums = Array.from({ length: 100000 }, (_, i) => i % 100000 + 1);
    nums.push(1); // Adding a duplicate
    const result = findDuplicateNumber(nums);
    expect(result).toBe(1);
  });

  it('should handle another large input array for performance testing', () => {
    const nums = Array.from({ length: 200000 }, (_, i) => (i % 200000) + 1);

    nums.push(2); // Adding a duplicate
    const result = findDuplicateNumber(nums);
    expect(result).toBe(2);
  });
});
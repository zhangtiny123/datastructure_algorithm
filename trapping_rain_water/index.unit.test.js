const maxTrappingWater = require('./index')

describe('maxTrappingWater', () => {
  it('should return the amount of trapped water for the input [0,1,0,2,1,0,1,3,2,1,2,1]', () => {
    const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    const result = maxTrappingWater(height);
    expect(result).toBe(6);
  });

  it('should return 0 for an empty array', () => {
    const height = [];
    const result = maxTrappingWater(height);
    expect(result).toBe(0);
  });

  it('should return 0 for an array with no trapped water', () => {
    const height = [1, 1, 1, 1, 1];
    const result = maxTrappingWater(height);
    expect(result).toBe(0);
  });

  it('should return 0 for an array with increasing heights', () => {
    const height = [1, 2, 3, 4, 5];
    const result = maxTrappingWater(height);
    expect(result).toBe(0);
  });

  it('should return 0 for an array with decreasing heights', () => {
    const height = [5, 4, 3, 2, 1];
    const result = maxTrappingWater(height);
    expect(result).toBe(0);
  });

  it('should handle an array with a single element', () => {
    const height = [1];
    const result = maxTrappingWater(height);
    expect(result).toBe(0);
  });

  it('should handle a large input array for performance testing', () => {
    const height = Array.from({ length: 100000 }, (_, i) => (i % 2 === 0 ? 1 : 0));
    const result = maxTrappingWater(height);
    expect(result).toBe(49999);
  });

  it('should handle another large input array for performance testing', () => {
    const height = Array.from({ length: 200000 }, (_, i) => (i % 2 === 0 ? 2 : 1));
    const result = maxTrappingWater(height);
    expect(result).toBe(99999);
  });
});
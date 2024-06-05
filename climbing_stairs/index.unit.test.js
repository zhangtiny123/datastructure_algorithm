const findWaysToTop = require('./index')

describe('findWaysToTop', () => {
  it('should return the number of distinct ways to climb to the top for n = 1', () => {
    const n = 1;
    const result = findWaysToTop(n);
    expect(result).toBe(1);
  });

  it('should return the number of distinct ways to climb to the top for n = 2', () => {
    const n = 2;
    const result = findWaysToTop(n);
    expect(result).toBe(2);
  });

  it('should return the number of distinct ways to climb to the top for n = 3', () => {
    const n = 3;
    const result = findWaysToTop(n);
    expect(result).toBe(3);
  });

  it('should return the number of distinct ways to climb to the top for n = 4', () => {
    const n = 4;
    const result = findWaysToTop(n);
    expect(result).toBe(5);
  });

  it('should return the number of distinct ways to climb to the top for n = 5', () => {
    const n = 5;
    const result = findWaysToTop(n);
    expect(result).toBe(8);
  });

  it('should handle a large n for performance testing (n = 1000)', () => {
    const n = 1000;
    const result = findWaysToTop(n);
    expect(result).toBeGreaterThan(0);
  });

  it('should handle another large n for performance testing (n = 2000)', () => {
    const n = 2000;
    const result = findWaysToTop(n);
    expect(result).toBeGreaterThan(0);
  });


});
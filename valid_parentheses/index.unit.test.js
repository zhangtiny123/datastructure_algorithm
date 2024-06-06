const isValidParentheses = require('./index')

describe('isValidParentheses', () => {
  it('should return true for a valid string "()"', () => {
    const s = "()";
    const result = isValidParentheses(s);
    expect(result).toBe(true);
  });

  it('should return true for a valid string "()[]{}"', () => {
    const s = "()[]{}";
    const result = isValidParentheses(s);
    expect(result).toBe(true);
  });

  it('should return false for an invalid string "(]"', () => {
    const s = "(]";
    const result = isValidParentheses(s);
    expect(result).toBe(false);
  });

  it('should return true for a valid string "([{}])"', () => {
    const s = "([{}])";
    const result = isValidParentheses(s);
    expect(result).toBe(true);
  });

  it('should return false for an invalid string "({[)]}"', () => {
    const s = "({[)]}";
    const result = isValidParentheses(s);
    expect(result).toBe(false);
  });

  it('should return false for an invalid string "["', () => {
    const s = "[";
    const result = isValidParentheses(s);
    expect(result).toBe(false);
  });

  it('should return true for an empty string', () => {
    const s = "";
    const result = isValidParentheses(s);
    expect(result).toBe(true);
  });

  it('should handle a large valid string for performance testing', () => {
    let s = "(".repeat(50000) + ")".repeat(50000);
    const result = isValidParentheses(s);
    expect(result).toBe(true);
  });

  it('should handle another large invalid string for performance testing', () => {
    let s = "(".repeat(50000) + ")".repeat(49999);
    const result = isValidParentheses(s);
    expect(result).toBe(false);
  });
});
const findLongestSubstrinWithoutRepeqtingChars = require('./index')

describe('findLongestSubstrinWithoutRepeqtingChars', () => {
  it('should return the length of the longest substring without repeating characters', () => {
    const s = "abcabcbb";
    const result = findLongestSubstrinWithoutRepeqtingChars(s);
    expect(result).toBe(3);
  });

  it('should return 0 for an empty string', () => {
    const s = "";
    const result = findLongestSubstrinWithoutRepeqtingChars(s);
    expect(result).toBe(0);
  });

  it('should handle string with all identical characters', () => {
    const s = "aaaaaa";
    const result = findLongestSubstrinWithoutRepeqtingChars(s);
    expect(result).toBe(1);
  });

  it('should handle string with no repeating characters', () => {
    const s = "abcdef";
    const result = findLongestSubstrinWithoutRepeqtingChars(s);
    expect(result).toBe(6);
  });

  it('should handle a large input string for performance testing', () => {
    let s = "";
    for (let i = 0; i < 100000; i++) {
      s += String.fromCharCode(97 + (i % 26));
    }
    const result = findLongestSubstrinWithoutRepeqtingChars(s);
    expect(result).toBe(26);
  });

  it('should handle another large input string for performance testing', () => {
    let s = "a".repeat(50000) + "b".repeat(50000);
    const result = findLongestSubstrinWithoutRepeqtingChars(s);
    expect(result).toBe(2);
  });
});
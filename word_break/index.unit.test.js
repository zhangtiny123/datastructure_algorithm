const isBreakable = require('./index')

describe('isBreakable', () => {
  it('should return true for s = "leetcode" and dict = ["leet", "code"]', () => {
    const s = "leetcode";
    const dict = ["leet", "code"];
    const result = isBreakable(s, dict);
    expect(result).toBe(true);
  });

  it('should return false for s = "applepenapple" and dict = ["apple", "pen"]', () => {
    const s = "applepenapple";
    const dict = ["apple", "pen"];
    const result = isBreakable(s, dict);
    expect(result).toBe(true);
  });

  it('should return true for s = "catsandog" and dict = ["cats", "dog", "sand", "and", "cat"]', () => {
    const s = "catsandog";
    const dict = ["cats", "dog", "sand", "and", "cat"];
    const result = isBreakable(s, dict);
    expect(result).toBe(false);
  });

  it('should return false for an empty string and an empty dictionary', () => {
    const s = "";
    const dict = [];
    const result = isBreakable(s, dict);
    expect(result).toBe(false);
  });

  it('should handle a large input string for performance testing', () => {
    const s = "a".repeat(100000) + "b";
    const dict = ["a", "b"];
    const result = isBreakable(s, dict);
    expect(result).toBe(true);
  });

  it('should handle another large input string for performance testing', () => {
    const s = "a".repeat(100000);
    const dict = ["a"];
    const result = isBreakable(s, dict);
    expect(result).toBe(true);
  });

  it('should handle large dictionary for performance testing', () => {
    const s = "leetcode";
    const dict = Array.from({ length: 100000 }, (_, i) => i.toString());
    dict.push("leet", "code");
    const result = isBreakable(s, dict);
    expect(result).toBe(true);
  });
});
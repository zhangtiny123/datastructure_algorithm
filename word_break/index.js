function isBreakable(s, dict) {
  let lastBreakableIndex = 0
  let currentCheckingWord = ''
  for (let i = 0; i < s.length; i++) {
    currentCheckingWord += s[i]
    if (dict.includes(currentCheckingWord)) {
      lastBreakableIndex = i
      currentCheckingWord = ''
    }
  }
  return lastBreakableIndex === s.length - 1
}

module.exports = isBreakable
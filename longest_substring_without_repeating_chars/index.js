function findLongestSubstrinWithoutRepeqtingChars(s) {
  let maxLength = 0
  let currentCharsMap = new Map()
  for (let i = 0; i < s.length; i++) {
    if (currentCharsMap.has(s[i])) {
      maxLength = Math.max(currentCharsMap.size, maxLength)
      currentCharsMap.clear()
    }
    currentCharsMap.set(s[i], i)
  }
  maxLength = Math.max(currentCharsMap.size, maxLength)
  return maxLength
}

module.exports = findLongestSubstrinWithoutRepeqtingChars
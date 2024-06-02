function findLongestSubstrinWithoutRepeqtingChars(s) {
  let maxSubstring = ""
  let currentCharsMap = new Map()
  let currentSubstring = ""
  for (let i = 0; i < s.length; i++) {
    if (currentCharsMap.has(s[i])) {
      if (currentSubstring.length > maxSubstring.length) {
        maxSubstring = currentSubstring
      }
      currentSubstring = ""
      currentCharsMap = new Map()
    }
    currentSubstring += s[i]
    currentCharsMap.set(s[i], i)
  }
  if (currentSubstring.length > maxSubstring.length) {
    maxSubstring = currentSubstring
  }
  return maxSubstring.length
}

module.exports = findLongestSubstrinWithoutRepeqtingChars
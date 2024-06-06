function isValidParentheses(s) {
  const parenthesesMap = new Map()
  parenthesesMap.set('(', ')')
  parenthesesMap.set('[', ']')
  parenthesesMap.set('{', '}')

  const stack = []

  for (let i = 0; i < s.length; i++) {
    if (parenthesesMap.has(s[i])) {
      stack.push(s[i])
    } else {
      let topOne = stack.pop()
      if (parenthesesMap.get(topOne) !== s[i]) {
        return false
      }
    }
  }
  return stack.length === 0
}

module.exports = isValidParentheses
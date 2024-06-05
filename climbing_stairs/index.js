function findWaysToTop(n) {
  if (n <= 2) {
    return n
  }
  let a = 1, b = 2
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b]
  }
  return b
}

module.exports = findWaysToTop
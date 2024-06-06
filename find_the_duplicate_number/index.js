function findDuplicateNumber(nums) {
  let turtle = nums[0]
  let bunny = nums[0]

  do {
    turtle = nums[turtle]
    bunny = nums[nums[bunny]]
  } while (bunny !== turtle)

  bunny = nums[0]
  while (bunny !== turtle) {
    turtle = nums[turtle]
    bunny = nums[bunny]
  }
  return bunny
}

module.exports = findDuplicateNumber
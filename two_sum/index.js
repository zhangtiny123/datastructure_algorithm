function findTwoSum(nums, target) {
  const len = nums.length
  const pairs = new Map()
  for (let i = 0; i < len; i++) {
    if (pairs.has(nums[i])) {
      return [pairs.get(nums[i]), i]
    }
    pairs.set(target - nums[i], i)
  }
  return null
}

module.exports = findTwoSum
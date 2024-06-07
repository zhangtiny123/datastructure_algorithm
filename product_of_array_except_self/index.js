function calcProductsOfOthers(nums) {
  let leftProduct = 1
  let rightProduct = 1
  let result = []
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = rightProduct
    rightProduct *= nums[i]
  }

  for (let i = 0; i < nums.length; i++) {
    result[i] *= leftProduct
    leftProduct *= nums[i]
  }
  return result
}

module.exports = calcProductsOfOthers
function findMaximumSubarray(intArray) {
  let maximum, localMax
  for (let num of intArray) {
    if (!maximum && !localMax) {
      maximum = localMax = num
      continue
    }
    localMax = Math.max(localMax + num, num)
    maximum = Math.max(localMax, maximum)
  }
  return maximum
}

module.exports = findMaximumSubarray
function findMaximumSubarray(intArray) {
  let maximum, contigiousSum
  for (let num of intArray) {
    if (!maximum && !contigiousSum) {
      maximum = num
      contigiousSum = num
      continue
    }
    contigiousSum += num
    if (num > contigiousSum) {
      contigiousSum = num
    }
    maximum = Math.max(contigiousSum, maximum)
  }
  return maximum
}

module.exports = findMaximumSubarray
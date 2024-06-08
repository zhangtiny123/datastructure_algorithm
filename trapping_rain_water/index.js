function maxTrappingWater(height) {
  // const rightMaxs = []
  // var result = 0
  // for (let i = height.length - 1; i >= 0; i--) {
  //   if (height[i + 1] == undefined) {
  //     rightMaxs[i] = 0
  //     continue
  //   }
  //   rightMaxs[i] = Math.max(rightMaxs[i + 1], height[i + 1])
  // }

  // let leftMax = 0
  // for (let i = 0; i < height.length; i++) {
  //   var trapping = Math.min(leftMax, rightMaxs[i]) - height[i]
  //   if (trapping > 0) {
  //     result += trapping
  //   }
  //   leftMax = Math.max(leftMax, height[i])
  // }
  // return result
  if (!height.length) return 0;

  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  let trappedWater = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        trappedWater += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        trappedWater += rightMax - height[right];
      }
      right--;
    }
  }

  return trappedWater;
}

module.exports = maxTrappingWater
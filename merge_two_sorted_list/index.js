// not efficient!
function mergeTwoSortedLists(l1, l2) {
  let mergedList = []
  while (l1.length > 0 || l2.length > 0) {
    if (l1[0] <= l2[0]) {
      mergedList.push(l1.shift())
    } else {
      mergedList.push(l2.shift())
      standing2 = undefined
    }
  }

  return mergedList
}

// Definition for singly-linked list.
class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

// Implementation of the function
function mergeTwoLists(l1, l2) {
  let dummy = new ListNode();
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 !== null ? l1 : l2;

  return dummy.next;
}

module.exports = { mergeTwoLists, mergeTwoSortedLists, ListNode };
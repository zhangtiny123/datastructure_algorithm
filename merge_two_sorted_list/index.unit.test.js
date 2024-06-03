const { mergeTwoLists, mergeTwoSortedLists, ListNode } = require('./index')


function arrayToList(array) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of array) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(list) {
  let array = [];
  while (list !== null) {
    array.push(list.val);
    list = list.next;
  }
  return array;
}

describe('mergeTwoSortedLists', () => {
  it('should merge two sorted lists', () => {
    const l1 = arrayToList([1, 2, 4]);
    const l2 = arrayToList([1, 3, 4]);
    const result = mergeTwoLists(l1, l2);
    expect(listToArray(result)).toEqual([1, 1, 2, 3, 4, 4]);
  });

  it('should handle empty lists', () => {
    const l1 = arrayToList([]);
    const l2 = arrayToList([]);
    const result = mergeTwoLists(l1, l2);
    expect(listToArray(result)).toEqual([]);
  });

  it('should handle one empty list and one non-empty list', () => {
    const l1 = arrayToList([1, 2, 3]);
    const l2 = arrayToList([]);
    const result = mergeTwoLists(l1, l2);
    expect(listToArray(result)).toEqual([1, 2, 3]);
  });

  it('should handle one non-empty list and one empty list', () => {
    const l1 = arrayToList([]);
    const l2 = arrayToList([1, 2, 3]);
    const result = mergeTwoLists(l1, l2);
    expect(listToArray(result)).toEqual([1, 2, 3]);
  });

  it('should handle lists with different lengths', () => {
    const l1 = arrayToList([1, 3, 5, 7]);
    const l2 = arrayToList([2, 4, 6, 8, 10, 12]);
    const result = mergeTwoLists(l1, l2);
    expect(listToArray(result)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 10, 12]);
  });

  it('should handle large input lists for performance testing', () => {
    const l1Array = Array.from({ length: 50000 }, (_, i) => i * 2);
    const l2Array = Array.from({ length: 50000 }, (_, i) => i * 2 + 1);
    const l1 = arrayToList(l1Array);
    const l2 = arrayToList(l2Array);
    const result = mergeTwoLists(l1, l2);
    const expectedArray = Array.from({ length: 100000 }, (_, i) => i);
    expect(listToArray(result)).toEqual(expectedArray);
  });

  it('should handle another large input lists for performance testing', () => {
    const l1Array = Array.from({ length: 100000 }, (_, i) => i);
    const l2Array = Array.from({ length: 100000 }, (_, i) => i + 100000);
    const l1 = arrayToList(l1Array);
    const l2 = arrayToList(l2Array);
    const result = mergeTwoLists(l1, l2);
    const expectedArray = Array.from({ length: 200000 }, (_, i) => i);
    expect(listToArray(result)).toEqual(expectedArray);
  });
});
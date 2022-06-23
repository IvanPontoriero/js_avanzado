/*
    You are given the heads of two sorted linked lists 'list1' and 'list2'.
    Merge the two lists in a one sorted list.
    Return the head of the merged linked list.
*/ 

const list1 = [1, 2, 4];

const list2 = [1, 3, 4];

const sortedList = [];

// Output should be [1, 1, 2, 3, 4, 4];

const mergeAndSortList = (arr1, arr2, mergedList) => {
    // Concatenate the two lists
    mergedList = arr1.concat(arr2);
    // Sort the final list
    mergedList.sort((a, b) => a - b);
    return mergedList;
}

const result = mergeAndSortList(list1, list2, sortedList);

console.log(res);
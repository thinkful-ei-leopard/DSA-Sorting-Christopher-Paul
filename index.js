// * QUESTION 1 

// What is the resulting list that will be sorted after 3 recursive calls to mergesort?

// --> same as the original because it won't have finished calling itself to perform a merge()

// What is the resulting list that will be sorted after 16 recursive calls to mergesort? 

// --> [1,  2,  9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49]

// What are the first 2 lists to be merged?

// --> [21] and [1]

// Which two lists would be merged on the 7th merge?

// --> [21, 1, 26, 45] and [29, 28, 2, 9]


// * QUESTION 2 - Understanding Quicksort

// 1 --> The pivot could have been either 14 or 17

// 2 --> After 2 passes when using the last item on the list as a pivot - 3, 9, 10, 12, 14, 15, 17, 16, 19, 13

// 1st pass
// 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// ij
// 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// j   i
// 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// j       i
// 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// j           i
// 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// j               i
// 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
// j                   i
// 10, 17, 13, 15, 19, 14, 3, 16, 9, 12
//     j                   i
// 10, 3, 13, 15, 19, 14, 17, 16, 9, 12
//        j                   i
// 10, 3, 13, 15, 19, 14, 17, 16, 9, 12
//        j                       i
// 10, 3, 9, 15, 19, 14, 17, 16, 13, 12
//           j                       i
// 10, 3, 9, 12, 19, 14, 17, 16, 13, 15
//           j                       i

//   // 2nd pass
//   10, 3, 9, 12      19, 14, 17, 16, 13, 15
//   ij                nm                     
//   10, 3, 9, 12      19, 14, 17, 16, 13, 15
//   i   j             n   m                     
//   3, 10, 9, 12      14, 19, 17, 16, 13, 15
//       i   j              n   m                     
//   3, 10, 9, 12      14, 19, 17, 16, 13, 15
//       i  j               n   m                     
//   3, 9, 10, 12      14, 19, 17, 16, 13, 15
//          i  j            n      m                     
//   3, 9, 10, 12      14, 13, 17, 16, 19, 15
//          i  j            n          m                     
//   3, 9, 10, 12      14, 15, 17, 16, 19, 13 // <-- PART 1 ANSWER
//          i  j            n              m  
         
//          // 3rd pass
//   3, 9, 10, 12      14, 15,     17, 16, 19, 13 // -> right partition would still need to be sorted
//          i  j            n                  m                     

// //3 --> After 2 passes when using the first item on the list as a pivot

// // 1st pass
// 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
//                                   ij
// 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
//                                i   j
// 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
//                             i      j
// 14, 17, 13, 15, 19, 10, 3, 12, 9, 16
//                         i      j
// 14, 17, 13, 15, 19, 10, 3, 12, 9, 16
//                      i         j
// 14, 17, 13, 15, 19, 10, 3, 12, 9, 16
//                  i             j
// 14, 17, 13, 15, 9, 10, 3, 12, 19, 16
//              i            j
// 14, 17, 13, 12, 9, 10, 3, 15, 19, 16
//         i              j
// 14, 17, 13, 12, 9, 10, 3, 15, 19, 16
//      i                 j
// 14, 3, 13, 12, 9, 10, 17, 15, 19, 16
// i                 j
// 10, 3, 13, 12, 9    14, 17, 15, 19, 16
// i                   j

// //2nd pass
// 10, 3, 13, 12, 9    14, 17, 15, 19, 16
//                ij                  ij
// 10, 3, 13, 12, 9    14, 17, 15, 19, 16
//             i  j                 i   j
// 10, 3, 13, 9, 12    14, 17, 15, 16, 19
//        i   j                 i   j
// 10, 3, 9, 13, 12    14, 17, 16, 15, 19
//     i   j                i   j
// 10, 3, 9, 13, 12    14, 16, 17, 15, 19
// i      j             i   j
// 9, 3, 10,  13, 12    14, 16, 17, 15, 19 // <-- PART 2 ANSWER
// i      j             i   j

// Question 3
let array = [89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5]

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

function qSort(array, start = 0, end = array.length) {
       if (start >= end) {
              return array;
       }

       const middle = partition(array, start, end)
       array = qSort(array, start, middle)
       array = qSort(array, middle + 1, end)
       return array;
}

function partition(array, start, end) {
  const pivot = array[end-1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
}

// console.log(qSort(array))


// QUESTION 4 - IMPLEMENTING MERGE SORT

function mergeSort(array) { // divides the array into a subset of arrays with 1 el each, then calls merge
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);
  
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
       let leftIndex = 0
       let rightIndex = 0
       let outputIndex = 0
       while (leftIndex < left.length && rightIndex < right.length) {
              if (left[leftIndex] < right[rightIndex]) {
                     array[outputIndex] = left[leftIndex]
                     outputIndex++
                     leftIndex++
              }
              else {
                     array[outputIndex++] = right[rightIndex++] // post-increment syntax, different way of writing the same thing on lines 168-170. 
              }
       }

       for(let i = leftIndex; i < left.length; i++) {
              array[outputIndex] = left[i]
              outputIndex++
       }

       for(let i = rightIndex; i < right.length; i++) {
              array[outputIndex++] = right[i] // post-increment syntax, different way of writing the same thing on lines 178-179
       }
       return array
}

// console.log(mergeSort(array))


// QUESTION 5

const LinkedList = require('./LinkedList')

function createList() {
  let newList = new LinkedList;
  newList.insertFirst(1)
  return newList;
}

console.log(createList());
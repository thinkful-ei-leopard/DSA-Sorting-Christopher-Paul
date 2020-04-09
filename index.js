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
14, 17, 13, 15, 19, 10, 3, 16, 9, 12
ij
14, 17, 13, 15, 19, 10, 3, 16, 9, 12
j   i
14, 17, 13, 15, 19, 10, 3, 16, 9, 12
j       i
14, 17, 13, 15, 19, 10, 3, 16, 9, 12
j           i
14, 17, 13, 15, 19, 10, 3, 16, 9, 12
j               i
14, 17, 13, 15, 19, 10, 3, 16, 9, 12
j                   i
10, 17, 13, 15, 19, 14, 3, 16, 9, 12
    j                   i
10, 3, 13, 15, 19, 14, 17, 16, 9, 12
       j                   i
10, 3, 13, 15, 19, 14, 17, 16, 9, 12
       j                       i
10, 3, 9, 15, 19, 14, 17, 16, 13, 12
          j                       i
10, 3, 9, 12, 19, 14, 17, 16, 13, 15
          j                       i

  // 2nd pass
  10, 3, 9, 12      19, 14, 17, 16, 13, 15
  ij                nm                     
  10, 3, 9, 12      19, 14, 17, 16, 13, 15
  i   j             n   m                     
  3, 10, 9, 12      14, 19, 17, 16, 13, 15
      i   j              n   m                     
  3, 10, 9, 12      14, 19, 17, 16, 13, 15
      i  j               n   m                     
  3, 9, 10, 12      14, 19, 17, 16, 13, 15
         i  j            n      m                     
  3, 9, 10, 12      14, 13, 17, 16, 19, 15
         i  j            n          m                     
  3, 9, 10, 12      14, 15, 17, 16, 19, 13
         i  j            n              m  
         
         // 3rd pass
  3, 9, 10, 12      14, 15,     17, 16, 19, 13 // -> right partition would still need to be sorted
         i  j            n                  m                     

//3 --> After 2 passes when using the first item on the list as a pivot
// 1st pass
14, 17, 13, 15, 19, 10, 3, 16, 9, 12
                                  ij
12, 17, 13, 15, 19, 10, 3, 16, 9, 14
                              ij
12, 17, 13, 15, 19, 10, 3, 16, 9, 14
                           i   j
12, 17, 13, 15, 19, 10, 3, 9, 16, 14
                        i  j
12, 17, 13, 15, 19, 10, 3, 9, 16, 14
                    i      j
12, 17, 13, 15, 19, 9, 3, 10, 16, 14
                i      j
12, 17, 13, 15, 3, 9, 19, 10, 16, 14
            i      j
12, 17, 13, 9, 3, 15, 19, 10, 16, 14
        i      j
12, 17, 3, 9, 13, 15, 19, 10, 16, 14
    i      j
12, 9, 3, 17, 13, 15, 19, 10, 16, 14
i       j
3, 9, 12, 17, 13, 15, 19, 10, 16, 14
i       j


Algorithm findWinner(S) // Homework 9-10 using sorting
nlog n MergeSort(S)
1 cnt < - 0
n iter < - S.elements()
1 currID < - s.first().element()
1 currMax < - 0
n while iter.hasNext() do
    n id < - iter.nextObject()
n if id = currID then
n cnt < - cnt + 1
else
k if cnt > currMax then
k currMax < - cnt
k currWinner < - currID
k currID < - id
k cnt < - 1
1 if cnt > currMax then
1 currMax < - cnt
1 currWinner < - currID
1 return (currMax, currWinner)
T(n) is O(nlog n)
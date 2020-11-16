function isValidAVLTree(tree) {

    if (tree.isEmpty()) return true;

    var validTree = function (t, p) {

        // 0 Height for External Node
        if (t.isExternal(p)) return 0;

        var hL = validTree(t, t.leftChild(p));
        var hR = validTree(t, t.rightChild(p));

        // Skip Check if Children Failed Height Check
        if (hL === false || hR === false) return false;

        // Check if AVL Tree: Height +/- 1 for Each Child
        if ((hL >= (hR - 1)) && (hL <= (hR + 1))) {
            if (t.isRoot(p)) {
                // Whole Tree Checked
                return true;
            } else {
                // Subtree Children Valid AVL - Return Current Node Height
                return Math.max(hL, hR) + 1;
            }
        } else {
            return false;
        }
    };

    return validTree(tree, tree.root());

    // function findWinner(S) // Using a Dictionary
    // {
    //     D < - new Dictionary // running time depends on Dictionary type HT 
    //     p < - S.first()
    //     D.insertItem(p.element(), 1)
    //     while (!S.isLast(p))
    //         p < - S.after(p)
    //     cnt < - D.findElement(p.element())
    //     if (cnt == null) {
    //         D.insertItem(p.element(), 1)
    //     }
    //     else {
    //         D.insertItem(p.element(), cnt + 1)
    //     }
    //     iter < - D.items()
    //     maxCnt < - 0
    //     while (iter.hasNext()) {
    //         // (id, cnt) <- iter.nextObject()
    //         obj < - iter.nextObject()
    //         id < - obj.key()
    //         cnt < - obj.element()
    //         if cnt > maxCnt then
    //         maxCnt < - cnt
    //         currWinner < - id
    //         return (maxCnt, currWinner)
    //     }
    // }

    // T(n)  is O(n) if D is a HT based Dictionary
    // T(n) is O(nlog k) if D is a BST based Dictionary


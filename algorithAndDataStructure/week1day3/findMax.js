function findMax(l) {
    return maxHelper(l, l.first());
}
function maxHelper(l, p) {
    if (l.isEmpty()) { return 0; }
    else if (l.isLast(p)) { return p.element() }
    else {
        return Math.max(p.element(), maxHelper(l, l.after(p)));
    }
}

findMax(tst2);
/*eslint-disable*/
function func() {
    try {
        return 1;
    } catch (e) {
        /* ... */
    } finally {
        console.log('finally');
    }
}
console.log(func()); // first works alert from finally, and then this one
/*eslint-disable*/

function getRandomEven() {
    let n = Math.round(Math.random() * 10);
    console.log(n);
    if (n % 2 !== 0)
        throw new Error("It's odd");
    return n;
}

try {
    // setTimeout(getRandomEven,1);
    getRandomEven();
} catch (err) {
    console.log("Error caught: " + err.message);
}

console.log("Remaining part of the program execution....");

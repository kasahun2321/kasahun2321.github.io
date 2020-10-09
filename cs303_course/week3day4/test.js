
/*eslint-disable*/
"use-strict"

function watch() {
    let cout = 10;
    let watchid = setInterval(logtime, 1000);


    function logtime() {
        let date = new Date();
        let hr = date.getHours()
        let mn = date.getMinutes()
        let sc = date.getSeconds();
        console.log(hr, ":", mn, ":", sc)
        if (cout === 0) {
            clearInterval(watchid)
        }
        else {
            cout = cout - 1
        }

    }
}
watch();

console.log((/^\/\?complete$/).test("/?complete"))
console.log("/?complete=11".match(/=(\d|\w)+/g)[0].slice(1))
console.log('='.slice(1))
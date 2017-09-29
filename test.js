async function foo() {
    await bar().then(data => console.log(data));
    console.log('foo')
}

function bar() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('bar')
        }, 5000)
    })
}

foo()

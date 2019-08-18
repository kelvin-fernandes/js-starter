function isYoungAdult(age) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            return age >= 18 ? resolve() : reject()
        }, 2000);
    });
}

isYoungAdult(20)
    .then(function () { console.log("is young adult") })
    .catch(function () { console.log("isn't young adult") })
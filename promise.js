const promise1 = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve();
    } else {
        reject();
    }
});

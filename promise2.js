const promise1 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve({
            id: 290309,
            username: "John Doe"
        });
    } else {
        reject("Something went wrong");
    }
});

const promise2 = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve({
            id: 123456,
            username: "Jane Doe"
        });
    } else {
        reject("Promise 2 failed");
    }
});

promise1
    .then((data) => {
        console.log("Promise 1:", data);
    })
    .catch((error) => {
        console.log("Promise 1 rejected!");
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Promise 1 completed");
    });

promise2
    .then((data) => {
        console.log("Promise 2:", data);
    })
    .catch((error) => {
        console.log("Promise 2 rejected!");
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Promise 2 completed");
    });

Promise.race([promise1, promise2])
    .then((response) => {
        console.log("Race winner:", response);
    })
    .catch((error) => {
        console.log("Race rejected:", error);
    });

Promise.allSettled([promise1, promise2])
    .then((results) => {
        console.log("All Settled:", results);
    });

Promise.any([promise1, promise2])
    .then((response) => {
        console.log("Any:", response);
    })
    .catch((error) => {
        console.log("All promises rejected:", error);
    });
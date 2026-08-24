function fetchUser() {
    return new Promise((resolve, reject) => {
        let success = false;
        if (success) {
            resolve({
                id: 290309,
                username: "John Doe"
            });
        } else {
            reject(new Error("Failed to fetch user"));
        }
    });
}
async function getUser(){
    try {
        const user = await fetchUserData();
        console.log(user);
    }
     catch (error){
        console.log('error: ${error.message}');
     }
    }

getUser();
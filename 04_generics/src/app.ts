const names: Array<string> = ["aa a"];
names[0].split(" ");

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("done");
    }, 1000);
    // reject();
});

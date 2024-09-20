// const GITHUB_API = "https://api.github.com/users/surajchauhan2310";
// const user = fetch(GITHUB_API);
// console.log(user);

// user.then(function (data) {
//   console.log(data);
// });

// console.log(user.data.url);

// --------------------------------------------------------------------

    const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved hua ==>1!");
    }, 10000);
    });

    const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved hua ==>2!");
    }, 5000);
    });

    async function getData() {
    return p;
    }

    // Resolving the promises using the await keyword

    async function handlePromises() {
    console.log("Hello JS");
    const val1 = await p1;
    console.log("Hello world! 1");
    console.log(val1);
    const val2 = await p2;
    console.log("Hello world! 2");
    console.log(val2);
    }
    handlePromises();

// -------------------------------------------------
// Resolving the promise in an older way

// const data = getData();
// data.then((res) => console.log(res));
// console.log("Hello Universe!");
// ------------------------

// async function demo() {
//   //   console.log("Hello world!");
//   //   return `Hello world!`;
//   throw new Error("Its an Error!!");

// }
// console.log(demo());

// ------------------------------------------

const GITHUB_API = "https://api.github.com/users/surajchauhan2310";
async function handleAPIPromise() {
  try {
    const data = await fetch(GITHUB_API);
    const jsonVal = await data.json();
    console.log(jsonVal);
  } catch (err) {
    // console.log(err);
    throw new Error("Its an Error!!");
  }
}
// handleAPIPromise();
handleAPIPromise().catch((err) => err);

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved hua ==>1!");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved hua ==>2!");
  }, 30000);
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
console.log("Its a break time");
handlePromises();

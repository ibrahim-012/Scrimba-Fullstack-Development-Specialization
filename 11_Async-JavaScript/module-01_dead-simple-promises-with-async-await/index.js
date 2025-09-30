// const response = fetch('https://jsonplaceholder.typicode.com/posts/1');
//   .then(response => response.json())
//   .then(data => console.log(data));

async function getPost() {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); 
   const data = await response.json();
   console.log(data);
   
   //    console.log(`Typeof 'reponse': ${typeof response}`) 
   //    console.log(response) 
   //    console.log(`Typeof 'data': ${typeof data}`) 
}

getPost();

// async function getBlogPost() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('blog post'), 1000);
//   });
  
//   const result = await promise;
//   console.log(result);
//   console.log('done');

//  promise
//      .then(value => console.log(value))
//      .finally(() => console.log('done'));
// }

// getBlogPost()

async function getBlogPost() {
    return "works here too"
}

getBlogPost().then((value) => console.log(`works as a promise and ${value}`));
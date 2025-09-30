// Challenge: 
// Rewrite the GET API call from the previous challenge using async-await


// Challenge: write the code below using async await
// fetch('https://jsonplaceholder.typicode.com/users/3')
//   .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);  
//       }
      
//       return response.json()
//   })
//   .then(person => console.log(`${person.name} works for ${person.company.name}`))
//   .catch(err => console.error(err))
  
// my solution
async function getUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/3')
        if (!response.ok) {
        throw new Error(response.status)
        }
        const person = await response.json()
        console.log(`${person.name} works for ${person.company.name}`)
    } catch (err) {
        console.error(err)
    }
}

getUserData()

// Per's solution
async function getUser() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
    if (!response.ok) {
        throw new Error(response.status);
    }
    const person = await response.json();
    console.log(person);    
    }
    catch (error) {
        console.log(error);
    }
}

getUser()

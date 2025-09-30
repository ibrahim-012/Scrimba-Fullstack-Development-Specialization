// Challenge: 
// The JSON Placeholder API has /users endpoint, 
// just like the one we saw in the tutorial for /posts
// Get the user with ID 3 and log their name and company they work for.
// Handle errors if something does not quite work. 

// Here's the endpoint: https://jsonplaceholder.typicode.com/users/3


// my solution
fetch("https://jsonplaceholder.typicode.com/users/3")
.then(response => response.json())
.then(data => {
    console.log(`Name: ${data.name}`)
    console.log(`Company: ${data.company.name}`)}
)
.catch(error => console.error(Error(error)))

    

// Per's solution
fetch("https://jsonplaceholder.typicode.com/users/3")
.then(response => {
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
})
.then(person => {
    console.log(`${person.name} works for ${person.company.name}`);
})
.catch(err => console.log(err));
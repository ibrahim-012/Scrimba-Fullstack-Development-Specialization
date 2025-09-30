// fetch('https://api.scrimba.com/dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => {
//         console.log(err)
//         // update the DOM to warn the user
//         // access an alternative API
//     })
//     .finally(()=> console.log('The operation completed.'))  


/*
Challenge:
1. Convert the above code to use async/await, handle errors with “try/catch” blocks, and add a “finally” block.

*/

// instructor's solution
// dont need async function if using type='module' in html script tag
try {
    const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/images/random')
    const data = await response.json()
    console.log(data)
} catch (err) {
    console.log(err)
    // update the DOM to warn the user
    // access an alternative API
    throw new Error('This is a network error!')
} finally {
    console.log('The operation completed.')
}

// my solution
async function getDog() {
    try {
        // the code we want to try to execute
        const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
        const data = await response.json()
        console.log(data)
    } catch(err) {
        // the code to execute on an error
        console.error(Error(err))
    } finally {
        // code to execute at the end of the operation
        console.log('The operation completed')
    }   
}

getDog()

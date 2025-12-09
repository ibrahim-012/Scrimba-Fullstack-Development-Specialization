1. What is a React component?
A function that returns React elements. (UI)

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

Correct answer: The function name should start with a capital letter: MyComponent.

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header());
```
Correct answer: The component should be rendered as a JSX element: <Header />.
# Sesi 8 - Styling Component, UI Frameworks, Styling App

## Styling Component

### 1. inline css dengan double curly braces dipisahkan dengan koma 
    <Component style{{property:"value", property1:"value"}} />

```jsx 
function App() {
    return (
        <div style={{ backgroundColor: "#010101", padding: "30px" }}>
            <h1>My First React App</h1>
        </div>
    );
}
```

### 2. Object variable css

```jsx
const myStyle = {
    backgroundColor: "#010101",
    padding: "30px",
};

function App() {
    return (
        <div style={myStyle}> // variable
            <h1>My First React App</h1>
        </div>
    );
}
```

### 3. External CSS file

```jsx
import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>My First React App</h1>
        </div>
    );
}
```

### 4. External CSS Module

```jsx
import styles from "./App.module.css"; // import css module

function App() {
    return (
        <div className={styles.App}>
            <h1>My First React App</h1>
        </div>
    );
}
```

### 5. External Object Variable
    
```jsx
const myStyle = {
    backgroundColor: "#010101",
    padding: "30px",
};
```
    
```jsx
import myStyle from "./App"; // import object variable

function App() {
    return (
        <div style={myStyle}>
            <h1>My First React App</h1>
        </div>
    );
}
```

### 6. Styled Component

```bash
npm install styled-components
```

```jsx
import styled from "styled-components";

const MyDiv = styled.div`
    background-color: #010101;
    padding: 30px;
`;

function App() {
    return (
        <MyDiv>
            <h1>My First React App</h1>
        </MyDiv>
    );
}
```
### 7. CSS in JS library

    contoh dengan library emotion
```bash
npm install @emotion/react @emotion/styled
```

```jsx
import styled from "@emotion/styled";

const MyDiv = styled.div`
    background-color: #010101;
    padding: 30px;
`;

function App() {
    return (
        <MyDiv>
            <h1>My First React App</h1>
        </MyDiv>
    );
}
```

## UI Frameworks

### Contoh dengan Bootstrap
[Open folder](./UI-framework/)
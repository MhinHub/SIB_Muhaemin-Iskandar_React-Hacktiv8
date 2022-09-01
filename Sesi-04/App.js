// Karena hanya ingin mencoba menginstal jadi saya menggunakan React menggunakan CDN

// function App() {
//     return (
//         <p>Hello React function</p>
//     )
// }

class App extends React.Component {
    render() {
        return (
            <p>Hello React class</p>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

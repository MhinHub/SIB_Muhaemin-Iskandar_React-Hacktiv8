import "./styles.css";

export default function App() {
  function Header() {
    return (
      <header>
        <h1>React App Header</h1>
      </header>
    );
  }

  function Content() {
    return (
      <p>Lorem ipsum kemani kesum diantar kerumah ipman kesum jadialah ipsum</p>
    );
  }

  function Footer() {
    return (
      <footer className="footer">
        <p>&copy; Bla-bla 2022</p>
      </footer>
    );
  }
  return (
    <div className="App container">
      <Header />
      <hr />
      <Content />
      <hr />
      <Footer />
    </div>
  );
}

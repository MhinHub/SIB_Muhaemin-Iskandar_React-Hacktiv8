import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import AboutCompany from "./pages/About/AboutCompany";
import AboutMe from "./pages/About/AboutMe";
import Members from "./pages/Members/Members";
import Member from "./pages/Members/Member";
import Items from "./pages/Items/Items";
import ItemDetail from "./pages/Items/ItemDetail";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="about-company" element={<AboutCompany />} />
            <Route path="about-me" element={<AboutMe />} />
          </Route>
          <Route path="/members" element={<Members />}>
            <Route path=":memberName" element={<Member />} />
          </Route>
          <Route path="/items" element={<Items />} >
            <Route path=":itemId" element={<ItemDetail />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
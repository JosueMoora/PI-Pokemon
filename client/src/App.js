import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Home, Detail, Form, Landing, Error, About } from "./views";
import Footer from "./components/Footer/Footer";
function App() {

  return (
    <div className="App">
        {useLocation().pathname !== "/" && <NavBar/> }
        <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Form />} />        
        <Route path="/error" element={<Error/>} />        
        <Route path="/about" element={<About/>} />        
        </Routes>
        {useLocation().pathname !== "/" && <Footer/> }
        
    </div>
  );
}

export default App;

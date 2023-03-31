import React from "react";
import Top from "./components/Top";
import './index.css';
import Body from "./components/Body";
import LowerBody from "./components/LowerBody";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
       <Top />
       <Body />
       <LowerBody />
       <Contact />
       <Blog />
       <Footer />
    </div>
  );
}

export default App;

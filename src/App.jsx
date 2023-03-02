import React from "react";
import Footer from "./components/FooterDiv/Footer";
import Jobs from "./components/JobDiv/Jobs";
import Navbar from "./components/NavBar/Navbar";
import Search from "./components/SearchDiv/Search";
import Value from "./components/ValueDiv/Value";

const App = () => {
  return (
    <div className=" w -[85%] m-auto bg-white">
      <Navbar />
      <Search />
      <Jobs />
      <Value />
      <Footer/>
    </div>
  )
};

export default App;

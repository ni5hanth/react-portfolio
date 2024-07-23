import React from "react";
import './App.css';
import Header from './components/Header';
import MainContent from "./components/MainContent";
//import MainContent from'./components/MainContent';
 
const App = () => {
  return(

    <div className="Header">
    <Header />
    <div className="MainContent">
    <MainContent />
    </div>
    </div>
  )
}

export default App;
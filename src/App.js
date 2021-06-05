import './App.css';
import React from "react";
import Header from "./Header";
import Tindercards from './Tindercards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="app">
      

      <Header />
      <Tindercards />
      <SwipeButtons />
      
    </div>
  );
}

export default App;

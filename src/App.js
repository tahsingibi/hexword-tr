import { useState } from "react";
import AllHex from "./AllHex";
import Header from "./Header";


function App() {

  const [bgChange, setBgChange] = useState("ss")

  return (
    <div className="App" style={{backgroundColor:`${bgChange}` }}>
      <div className="container">
        <Header/>
        <AllHex bgChange={bgChange} setBgChange={setBgChange}/>
      </div>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light")  // set mode
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.getElementsByClassName("form-check-label")[0].innerHTML = "Enable dark mode";
      // document.getElementById("summary").style.color = "black";
      showAlert("light mode has been enabled" , "success");

    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.getElementsByClassName("form-check-label")[0].innerHTML = "Enable light mode";
      // document.getElementById("summary").style.color = "white";
      showAlert("Dark mode has been enabled" , "success");
      

    }
  }
  return (
    <>
     < Navbar tittle="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
     <Alert  alert = {alert}/>
      
       
        

        <div className="container my-3">
        <Textform heading="Enter the text to analyze" showAlert={showAlert} mode={mode} toggleMode={toggleMode}  />
        <About aboutText="About us" mode={mode} toggleMode={toggleMode}/>
        

        </div> 
      



    </>
  );

}
export default App;

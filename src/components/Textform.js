import React, { useState } from 'react'


export default function Textform(props) {

  const handleUpClick = () => {
    // console.log("button clicked " +text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase", "success");

  }
  const handleloClick = () => {
    // console.log("button clicked " +text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");

  }
  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value);
  }
  const clearTextfield = (event) => {
    // console.log("on change")

    setText("");
    props.showAlert("Textfield cleared", "success");



  }
  const toSentence = () => {
    if (text.length > 1) {
      let newstring = text.replace(text[0], text[0].toUpperCase());
      newstring = text.replace(/^\s*\w|[\.\!\?]\s*\w/g, function (c) {
        return (c.toUpperCase());
      });

      setText(newstring);
      props.showAlert("Converted to sentencecase", "success");
    }
    props.showAlert("Converted to sentencecase", "success");


  }

  const copyText = () => {
    var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges();
    props.showAlert("Text copied to clipboard", "success");

  }

  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))

    props.showAlert("Extra spaces removed", "success");

  }

  const [text, setText] = useState('')
  return (
    <>
      <div className='container my-3' style={{ color: props.mode === "dark" ? "white" : "black"  }}>


        < div className="mb-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
          <h2 >{props.heading}</h2>
          

          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "#1895" : "white", color: props.mode === "dark" ? "white" : "black" }} id="myBox" rows="5" ></textarea>
        </div>
        <button disabled={text.length===0} className="btn  btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn  btn-primary mx-2 my-1" onClick={handleloClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn  btn-primary mx-2 my-1" onClick={clearTextfield}>Clear textfield</button>
        <button disabled={text.length===0} className="btn  btn-primary mx-2 my-1" onClick={toSentence}>Convert to sentence </button>
        <button disabled={text.length===0} className="btn  btn-primary mx-2 my-1" onClick={copyText}>Copy text</button>
        <button disabled={text.length===0} className="btn  btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>








      </div>
      <div className="container my-2" id='summary' style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Your text sumary</h2>


        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words  and {text.length} chararter</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!== 0}).length} minute require to read</p>
        <h2>preview</h2>
        <p>{text.length>0 ? text: "Nothing to preview"}</p>
      </div>


    </>

  )
}


import React from 'react'


export default function About(props) {
    
    // const [myStyle, setMyStyle]= useState({
    //     color:'black',
    //     backgroundColor:'white'

    // });
    // const[btntext , setBtnText] = useState("enable dark mode")
    // let toggleStyle = ()=>{
    //     if(props.mode ==='dark'){
    //         setMyStyle({
    //             color: ' black',
    //             backgroundColor:'white'
    //         })
    //         // setBtnText("enable dark mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border: '1px solid white'

    //         })
    //         // setBtnText('enable light mode')
    //     }
    // }

    let myStyle = {
        color: props.mode === 'dark' ? 'white':'#042743',
        backgroundColor: props.mode === 'dark'? 'rgb(36 74 104)': 'white'
        // border: '2px solid',
        // borderColor: props.mode === 'dark'? 'white': 'black'
    }

    
    return (
        <div className='container' >
            <h1 className='my-2' style = { {color: props.mode === 'dark' ? 'white':'#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <strong>  Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body">
                            Textutils give you way to manipulate your text quickly an efficiently in a way you want .
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <strong> Free to use </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body">
                            Textutils is free character counter tool that provide instant character count and word count statistics for given text. Textutils report the the word and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                           <strong> Browser compatible </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body">
                         This word counter software works in any browser like Chrome , Firefox ,Internet explorer, Safari , Opera. It suits to count character in facebook , blog , books , excel-document , pdf-document, essays , etc.
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

import { useState } from "react";

function Calc(){
    const [ans, setAns] = useState("");
    const [firstNumbers, setFirstNumbers] = useState("");


    const arr = ["1","2","3","4","5","6","7","8","9","0"]

    let operator = ["+","-","*","/"]


    function onBtnClick(event){
        setAns((data) => {
            
            return data += event.target.outerText
        })
        // console.log(ans)
    }

    function onOprClick(event){
        if(event.target.outerText === "+"){
            setFirstNumbers((data) => {
                return [...data, ans, event.target.outerText]
            })
            
            console.log(firstNumbers)
            setAns("")
        }
        else if(event.target.outerText == "-"){
            setFirstNumbers((data) => {
                return [...data, ans, event.target.outerText]
            })
            
            console.log(firstNumbers)
            setAns("")

        }
        else if(event.target.outerText == "*"){
            
        }
        else if(event.target.outerText == "/"){

        }
    }

    return(
        <div style={{"background-color": "orange", "border-radius": "10px", "padding": "10px", "display": "grid", "grid-template-columns": "1fr 1fr 1fr", "gap": "2px", "margin-left": "600px", "margin-top": "200px", "margin-right": "600px"}}>
            
            {arr.map((num, index)=>(
                <button onClick={onBtnClick}>{num}</button>
            ))}

            {operator.map((num, index)=>(
                <button onClick={onOprClick}>{num}</button>
            ))}


            <button>=</button>
            <h1>{ans}</h1>
        </div>
    );
}

export default Calc;
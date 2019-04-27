import React from "react";
import ReactDOM from "react-dom";

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div id="input" className="center">
                {/* <form onSubmit={()=>{this.sendInfo(e)}}>
                    Birthday:
                    <input type="date" name="bday"/>
                    <button onClick={(e)=>{this.sendInfo(e)}}>calculate my light-volume</button>
                </form> */}


                <div className="center">how old are you?</div>
                Age:
                <input id="yearsInput" type="number" name="quantity" min="1"></input>
                <button onClick={()=>{this.sendInfo()}}>calculate my light-volume</button>
            </div>
        )
    }

    sendInfo(e){
        // e.preventDefault();
        this.props.updateData(document.getElementById("yearsInput").value);
        document.getElementById("earth").classList.add("setpulse");
        setTimeout(()=>{
            document.getElementById("earth").classList.add("pulse");
        }, 200);
        setTimeout(()=>{
            document.getElementById("earth").classList.remove("setpulse");
            document.getElementById("earth").classList.remove("pulse");
        }, 2400)
    }
}

export default Input;
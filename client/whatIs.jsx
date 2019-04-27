import React from "react";
import ReactDOM from "react-dom";

class WhatIs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
    }

    render(){
        let explanation = "something something physics lightspeed relitivity existential";

        return(
            <div id="whatIs" className="center">
                <button onClick={()=>{this.toggle()}}>What is this?</button>
                <div>{this.state.show ? explanation : ""}</div>
            </div>
        )
    }

    toggle(){
        this.setState({show: !this.state.show});
    }

}

export default WhatIs;
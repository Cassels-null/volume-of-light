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
        let explanation = [
            'The fastest particles and information can move is the speed of light, so if you want to send a message to a planet 50 light-years away, it will take 50 years.',
            'The question I asked is "how big is the space I could possibly have affected since my birth?"',
            'The math isn\'t to hard: it\'s the volume of a sphere with a radius of one light-year per year you have been alive',
            'This is a little calculation I like to run on my birthday.',
            'For my 22 birthday, I took a few hours to build out this app.'
        ];

        return(
            <div id="whatIs" className="center">
                <button onClick={()=>{this.toggle()}}>What is this?</button>
                <div className="infoLine">{this.state.show ? explanation[0] : ""}</div>
                <div className="infoLine">{this.state.show ? explanation[1] : ""}</div>
                <div className="infoLine">{this.state.show ? explanation[2] : ""}</div>
                <div className="infoLine">{this.state.show ? explanation[3] : ""}</div>
                <div className="infoLine">{this.state.show ? explanation[4] : ""}</div>
            </div>
        )
    }

    toggle(){
        this.setState({show: !this.state.show});
    }

}

export default WhatIs;
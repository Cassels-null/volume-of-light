import React from "react";
import ReactDOM from "react-dom";

import Input from "./input.jsx";
import ShowMath from "./showMath.jsx";
import Footer from "./footer.jsx";
import WhatIs from "./whatIs.jsx";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            years: 0
        };
        this.updateData = this.updateData.bind(this);
    }

    render(){
        return(
            <div id="main" className="center">
                <Input updateData={this.updateData}/>
                <ShowMath years={this.state.years}/>
                <WhatIs/>
                <Footer/>
            </div>
        )
    }

    updateData(years){
        this.setState({years: years});
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
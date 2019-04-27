import React from "react";
import ReactDOM from "react-dom";

class ShowMath extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        var volume = ( (4/3) * Math.PI * (this.props.years ** 3));
        return(
            <div id="showMath" className="center">
            <img id="earth" src="./simple-earth-icon-by-Vexels.png"></img>
            {/* <a href="https://www.vexels.com/vectors/preview/158194/simple-earth-icon"> Simple earth icon </a> | designed by Vexels */}
            <div>the volume of space you have influenced is</div>
            <div>{volume.toFixed(2)} cubic light-years</div>
            </div>
        )
    }

}

export default ShowMath;
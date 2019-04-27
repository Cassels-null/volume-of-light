import React from "react";
import ReactDOM from "react-dom";

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div id="footer" className="center">
                <a className="subtleLink" href="https://www.vexels.com/vectors/preview/158194/simple-earth-icon"> Simple earth icon </a> designed by Vexels
            </div>
        )
    }

}

export default Footer;
import React from "react";
const Header = () =>{
    const home= require('../assets/img/home.png');
    const user= require('../assets/img/user.png');
    const add = require('../assets/img/add.png');
    const chart = require('../assets/img/chart-histogram.png');
    return(
            <div className="options">
                <li className="options_struct">
                    <a className="appLink" href="/#"><img src={home} alt="Logo" className="appLinkImg" /><h2 className="appLinkTitle">Home</h2></a>
                    <a className="appLink" href="/#"><img src={user} alt="Logo" className="appLinkImg"/><h2 className="appLinkTitle">User</h2></a>
                    <a className="appLink" href="/#"><img src={add}  alt="Logo" className="appLinkImg"/><h2 className="appLinkTitle">Add</h2></a>
                    <a className="appLink" href="/#"><img src={chart}alt="Logo" className="appLinkImg"/><h2 className="appLinkTitle">Finance</h2></a>
                </li>
            </div>
    )
}

export default Header;
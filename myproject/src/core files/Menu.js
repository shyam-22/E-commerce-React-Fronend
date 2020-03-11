import React from "react";
import {Link, withRouter} from 'react-router-dom'

import Layout from "./Layout";
//link -----> we dont want to relaod the page on each time when we click on the LINK
//withRouter --> we used bcoz we need to access the props history

const isActive = (history,path) => {
    if(history.location.pathname === path)
    {
        return {color : '#ff9900'}
    }
    else 
    {
        return {color : '#ffffff'}
    }
}


const Menu = ({history}) => {
    <div>
        <ul className="nav-nav-tabs bg-primary">
            <li className="nav-item">
                <link className="nav-link" style= {isActive(history,'/')} to="/">Home</link>
                <link className="nav-link" style= {isActive(history,'/signin')} to="/signin">Signin</link>
                <link className="nav-link" style= {isActive(history,'/signup')} to="/signup">Signup</link>

            </li>
        </ul>
    </div>
};




export default withRouter(Menu);
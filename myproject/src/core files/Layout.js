import React from "react";
import Menu from "./Menu";

const Layout = ( {title = "Title",description = "description", className,children} ) => {
    <div>
        <Menu/>
        <div className= "jumbotron">
        <h2>{title}</h2>
        <p className="lead">{description}</p>
        <div className={className}>{children}</div> //we will show the content which available at children props
        </div>
    </div>


}



export default Layout;
import React from "react";

const Greet = props => {

    return (
        <>
        <h2>Hello {props.user} a.k.a {props.heroName}</h2>
        {props.children}
        </>
    )
    
}

export default Greet;
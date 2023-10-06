import React from "react";
import "../textStyled/index.css"

let TextStyled = ({text, color}) => {
    return (
        <div className="text" style={{color: color, textTransform: "uppercase"}}>
            <p>{text}</p>
        </div>
    )
}

export default TextStyled;
import React from "react"
import "./transform.css"

const Transform = ({text, color}) => {
    return (
        <div className="text" style={{color: color, textTransform: "uppercase"}}>
            <p>{text}</p>
        </div>
    )
}

export default Transform;
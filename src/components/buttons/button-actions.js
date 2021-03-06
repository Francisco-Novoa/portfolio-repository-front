import React from "react"

export default function ButtonAction({href,text,style}){
    return (
        <ul className="actions" style={{alignSelf:"flex-end", margin:"2px"}}>
            <li><a href={href} className={`button ${style}`} target="blank" >{text}</a></li>
        </ul>
    )
}
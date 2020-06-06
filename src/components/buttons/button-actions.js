import React from "react"

export default function ButtonAction({href,text}){
    return (
        <ul className="actions">
            <li><a href={href} className="button style1">{text}</a></li>
        </ul>
    )
}
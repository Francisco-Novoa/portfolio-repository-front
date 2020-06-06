import React from "react"

export default function ButtonAction1({action,text}){
    return (
            <li><button onClick={(e)=>{e.preventDefault();action()}} className="button style1">{text}</button></li>
    )
}

export  function ButtonAction2({action,text}){
    return (
            <li><button onClick={(e)=>{e.preventDefault();action()}} className="button style2">{text}</button></li>
    )
}
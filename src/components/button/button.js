import React from "react"

export default function Button_Nav( {url, text}) {

    return (
        <li className="current">
            <a href={url} target="_blank">
                {text}
            </a>
        </li>
    )

}
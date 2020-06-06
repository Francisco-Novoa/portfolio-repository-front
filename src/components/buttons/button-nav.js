import React from "react"

export default function ButtonNav( {url, text}) {

    return (
        <li className="current">
            <a href={url} target="blank">
                {text}
            </a>
        </li>
    )

}
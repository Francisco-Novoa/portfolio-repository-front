import React from "react"
import ButtonNav from "../../buttons/button-nav"

export default function Header (){
    return(
        <section id="header" className="wrapper">
        <div id="logo">
          <h1><a href="index.html">Francisco Javier Novoa P.</a></h1>
          <p>Full Stack Web Developer</p>
        </div>
        <nav id="nav">
          <ul>
            <ButtonNav url="https://github.com/Francisco-Novoa" text="Github" />
            <ButtonNav url="https://www.linkedin.com/in/francisconovoaparada/" text="Linkedin" />
          </ul>
        </nav>
      </section>
    )
}
import React from "react"
import Intro from "./intro"
import Proyectos from './proyectos';
import Tecnologias from './tecnologias';
import Contacto from './contacto';
import Header from './header';

export default function Homepage (){
    return(
        <div id="page-wrapper">
        <Header />
        <Intro />
        <Proyectos />
        <Tecnologias />
        <Contacto />
      </div>
    )
}
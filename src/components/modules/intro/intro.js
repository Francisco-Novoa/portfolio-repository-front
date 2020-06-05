import React from "react"

export default function Intro() {
    return (
        <section id="intro" className="wrapper style1">
            <div className="title">Tengo el honor y el placer de introducrme a mi mismo, </div>
            <div className="container">
                <p className="style1">  quien soy y que es esto?</p>
                <p className="style2">
                    Soy Francisco Novoa, desarrollador web
                <br className="mobile-hide" />
                </p>
                <p className="style3">
                    En esta pagina almaceno los proyectos que he realizado tanto de forma individual como colaborativa.
                </p>
                <p className="style3">Cada proyecto se ve acompañado de una breve descripcion de su naturaleza, de las tecnologias necesarias para crearlo
                y de la motivacion que me llevo a hacer cada uno.
                </p>
            </div>
        </section>
    )

}
import React from "react"
import { RiComputerLine } from "react-icons/ri";
import ButtonAction from "../../buttons/button-actions";

function Proyecto({ title, description, href, text }) {
  return (
    <div className="col-6 col-12-medium">
      <section style={{
        display:"flex",
        alignContent:"space-between",
        flexDirection:"column",
        height:"100%"
        }} >
        <div className="row">
          <div className="col-2">
            <RiComputerLine size="30" color="grey" />
          </div>
          <div className="col-10" >
            <h2> {title}</h2>
          </div>
        </div>
        <p>{description}</p>
        <div className="row" style={{height:"100%", display:"flex", justifyContent:"center"}}>

          <ButtonAction
            href={href}
            text={text}
            // eslint-disable-next-line
            style={"style3"}
          />
        </div>
      </section>
    </div>
  )
}

export default function ProyectosMenores() {
  return (
    <section id="main" className="wrapper style1">
      <div className="title">Proyectos menores</div>
      <div className="container">
        <a href="/" className="image featured">
          <img src="https://engineering.stanford.edu/sites/default/files/styles/full_width_banner_tall/public/chalkboard_web.jpg?itok=XbT9euOn" alt="" />
        </a>
        <section id="features">
          <header className="style1">
            <h2>Proyectos Menores</h2>
            <p>Aca hay series de proyectos menores, hechos para practicar o demostrar alguna tecnologia en menor escala.</p>
          </header>
          <div className="feature-list">
            <div className="row">
              <Proyecto
                title="Card Sorter"
                description="Una pagina que use para aprender a manipular el DOM directamente, crea un grupo de cartas aleatorias y las ordena de mayor a menor usando uno de varios metodos de sorting"
                href="https://panchoportafoliobackend.herokuapp.com/cardsorter/index.html"
                text="Ordenador de Cartas"
              />
              <Proyecto
                title="Music Player"
                description="Proyecto hecho como parte de 4Geeks Academy, es un reproductor de musica que extrae los archivos desde una api de su propiedad."
                href="https://panchoportafoliobackend.herokuapp.com/musicplayer/index.html"
                text="8 bits"
              />
              <Proyecto 
                title="Tic Tac Toe/Noughts and Crosses/Gato" 
                description="Proyecto hecho como parte de 4Geeks Academy, es un juego simple de gato, fue hecho utilizando Reactjs. mirando hacia atras, debo reconocer que desaprobeche las posibilidades que la libreria ofrece, pero aun asi fue uno de mis primeros intentos en React y me gusta igual."
                href="https://panchoportafoliobackend.herokuapp.com/tictactoe/index.html"
                text="A jugar!"
                />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
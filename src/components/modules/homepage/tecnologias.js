import React from "react"
import { RiComputerLine } from "react-icons/ri";
import ButtonAction from "../../buttons/button-actions";

function Proyecto({ title, description, href, text }) {
  return (
    <div className="col-6 col-12-medium">
      <section style={{
        display: "flex",
        alignContent: "space-between",
        flexDirection: "column",
        height: "100%"
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
        <div className="row" style={{ height: "100%", display: "flex", justifyContent: "center" }}>

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
            <p>Aca hay series de proyectos menores, hechos para practicar o demostrar alguna tecnología en menor escala.</p>
            <p>Cada proyecto esta hosteado en Heroku, así que la primera carga del proyecto puede tardar unos momentos mientras Heroku despierta el dyno que contiene el proyecto.</p>
          </header>
          <div className="feature-list">
            <div className="row">
              <Proyecto
                title="Card Sorter"
                description="Una pagina que use para aprender a manipular el DOM directamente, crea un grupo de cartas aleatorias y las ordena de mayor a menor usando uno de varios métodos de sorting"
                href="https://panchoportafoliobackend.herokuapp.com/cardsorter/index.html"
                text="Ordenador de Cartas"
              />
              <Proyecto
                title="Music Player"
                description="Proyecto hecho como parte de 4Geeks Academy, es un reproductor de música que extrae los archivos desde una api de su propiedad."
                href="https://panchoportafoliobackend.herokuapp.com/musicplayer/index.html"
                text="8 bits"
              />
              <Proyecto
                title="Tic Tac Toe/Noughts and Crosses/Gato"
                description="Proyecto hecho como parte de 4Geeks Academy, es un juego simple de gato, fue hecho utilizando Reactjs. mirando hacia atrás, debo reconocer que desaproveche las posibilidades que la librería ofrece, pero aun así fue uno de mis primeros intentos en React y me gusta igual."
                href="https://panchoportafoliobackend.herokuapp.com/tictactoe/index.html"
                text="A jugar!"
              />
              <Proyecto
                title="Simple To Do List"
                description="Proyecto hecho inicialmente como parte de 4Geeks Academy, es una lista de tareas hecha para probar las capacidades de ReactJS, al ser auto contenido fue sujeto ideal para probar las capacidades de la plataforma de serverless web hosting heroku, que adicionalmente proveen el back end de esta página"
                href="https://sleepy-island-61659.herokuapp.com/"
                text="Pruebame"
              />
              <Proyecto
                title="Lista de Contactos"
                description="Proyecto hecho inicialmente como parte del curso FullStackOpen, es una agenda de contactos, hecha en Reactjs que guarda nombre y número de contactos telefónicos. El backend, en Node.js y Express, guarda los contactos en una base de datos MongoDb gratuita proveida por MongoDB.com y accedida usando Mongoose. A consecuencia de eso los datos ingresados perduran en la base de datos pese a la naturaleza efímera de los dinos proveídos por heroku."
                href="https://powerful-tundra-94616.herokuapp.com/"
                text="Pruebame"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
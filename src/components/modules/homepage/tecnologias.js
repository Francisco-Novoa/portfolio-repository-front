import React from "react"
import { RiComputerLine } from "react-icons/ri";

function Proyecto({ title, description }) {
  return (
    <div className="col-6 col-12-medium">
      <section>
        <div className="row">
          <div className="col-2">
            <RiComputerLine size="30" color="grey" />
          </div>
          <div className="col-10">
            <h2> {title}</h2>

          </div>
        </div>
        <p>{description}</p>
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
              <Proyecto title="Proyecto Pequeño 1" description="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. También se usa en programas como Microsoft PowerPoint o Genially como plantillas para remplazar con texto " />
              <Proyecto title="Proyecto Pequeño 2" description="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. También se usa en programas como Microsoft PowerPoint o Genially como plantillas para remplazar con texto " />
              <Proyecto title="Proyecto Pequeño 3" description="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. También se usa en programas como Microsoft PowerPoint o Genially como plantillas para remplazar con texto " />
              <Proyecto title="Proyecto Pequeño 4" description="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. También se usa en programas como Microsoft PowerPoint o Genially como plantillas para remplazar con texto " />
              <Proyecto title="Proyecto Pequeño 5" description="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. También se usa en programas como Microsoft PowerPoint o Genially como plantillas para remplazar con texto " />
              <Proyecto title="Proyecto Pequeño 6" description="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. También se usa en programas como Microsoft PowerPoint o Genially como plantillas para remplazar con texto " />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
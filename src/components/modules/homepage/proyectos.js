import React from "react"
import ButtonAction from "../../buttons/button-actions"

function Proyect({ href, text, title, body, src }) {
    return (
        <div className="col-4 col-12-medium">
            <section className="highlight">
                <a href={href} className="image featured"><img src={require(`${src}`)} alt="" /></a>
                <h3><a href={href}>{title}</a></h3>
                <p>{body}</p>
                <ButtonAction 
                href={href}
                 text={text}
                  style={"style1"} />
            </section>
        </div>
    )
}

export default function Proyectos() {
    return (
        <section id="highlights" className="wrapper style3">
            <div className="title">Proyectos Destacados</div>
            <div className="container">
                <div className="row aln-center">
                    <Proyect
                        title="Ghibli Blog"
                        href="https://panchoportafoliobackend.herokuapp.com/ghibliblog/index.html"
                        text="Explora!"
                        body="Un blog hecho para consumir la Api Studio Ghibli API. Creada utilizando ReactJS, React-Icons, React-Bootstrap y Create React App. la página fue organizada usando CSS Flexbox y React-Bootstrap"
                        src="./GB.JPG"
                    />
                    
                </div>
            </div>
        </section>
    )
}
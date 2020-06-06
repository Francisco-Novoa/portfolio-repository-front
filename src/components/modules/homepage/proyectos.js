import React from "react"
import ButtonAction from "../../buttons/button-actions"

function Proyect({ href, text, title, body, src }) {
    return (
        <div className="col-4 col-12-medium">
            <section className="highlight">
                <a href="/" className="image featured"><img src={src} alt="" /></a>
                <h3><a href="/">{title}</a></h3>
                <p>{body}</p>
                <ButtonAction href={href} text={text} />
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
                        title="Proyecto1"
                        href="/"
                        text="Mas.."
                        body="en un lugar de la mancha cuyo nombre no quiero acordarme"
                        src="https://picsum.photos/200/300"
                    />
                    <Proyect
                        text="Mas.."
                        href="/"
                        title="Proyecto2"
                        body="en un lugar de la mancha cuyo nombre no quiero acordarme"
                        src="https://picsum.photos/seed/picsum/200/300"
                    />
                    <Proyect
                        text="Mas.."
                        href="/"
                        title="Proyecto3"
                        body="en un lugar de la mancha cuyo nombre no quiero acordarme"
                        src="https://picsum.photos/200/300?grayscale"
                    />
                </div>
            </div>
        </section>
    )
}
import React from "react"
import ButtonAction from "../../buttons/button-actions"

function Proyect({ href, text, title, body, src }) {
    return (
        <div className="col-4 col-12-medium" >
            <section className="highlight" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <a href={href} className="image featured"><img src={require(`${src}`)} alt="" height="550px" /></a>
                <h3><a href={href}>{title}</a></h3>
                <p>{body}</p>
                <br />
                <div style={{ display: "flex", justifyContent: "center", alignContent: "bottom", height: "100%", paddingBottom: "5px" }}>
                    <ButtonAction
                        href={href}
                        text={text}
                        style={"style1"} />
                </div>

            </section>
        </div>
    )
}

function Proyect2Folders({ href, href2, text, text2, title, body, src }) {
    return (
        <div className="col-4 col-12-medium" >
            <section className="highlight" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <a href={href} className="image featured"><img src={require(`${src}`)} alt="" height="550px" /></a>
                <h3><a href={href}>{title}</a></h3>
                <p>{body}</p>
                <br />
                <div style={{ display: "flex", justifyContent: "center", alignContent: "bottom", height: "100%", paddingBottom: "5px" }}>
                    <ButtonAction
                        href={href}
                        text={text}
                        // eslint-disable-next-line
                        style={"style1"} />
                    <ButtonAction
                        href={href2}
                        text={text2}
                        // eslint-disable-next-line
                        style={"style1"} />
                </div>

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
                    <Proyect2Folders
                        title="ChinChin"
                        href="https://github.com/Francisco-Novoa/restaurant-chinchin-frontend"
                        href2="https://github.com/Francisco-Novoa/restaurant-chinchin-backend"
                        text="Front End"
                        text2="Back End"
                        body="Una plataforma de donde Dueños de Restaurantes pueden poner sus productos en un menú, subir fotos de esos productos y colocarlos al alcance de usuarios de chinchin quienes realizar pedidos a los restaurants. Los pedidos son enviados utilizando email. Proyecto realizado en grupo siguiendo metodologias agiles y utilizando GitHub en todo momento. Debido a que este es un trabajo grupal, no he subido este proyecto a ningun servicio de hosting."
                        src="./CC.png"
                    />

                </div>
            </div>
        </section>
    )
}
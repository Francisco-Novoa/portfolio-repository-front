import React from "react"
import SendMessage from "../services/email"
import { FaLinkedin, FaGithubSquare, FaPhone, FaRegEnvelope, FaComment } from "react-icons/fa";

function SocialMedia() {
    return (
        <div className="col-6 col-12-medium">
            <section className="feature-list small">
                <div className="row">
                    <div className="col-6 col-12-small">
                        <div className="row">
                            <div className="col-6">
                                <FaComment size="35" />
                            </div>
                            <div className="col-6">
                                <h3>Redes Sociales</h3>
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <a href="https://www.linkedin.com/in/francisconovoaparada/" target="black">
                                        <FaLinkedin size="50px" />
                                    </a>
                                    <a href="https://github.com/Francisco-Novoa" target="black">
                                        <FaGithubSquare size="50px" />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-12-small">
                        <div className="row">
                            <div className="col-6">
                                <FaRegEnvelope size="35" />
                            </div>
                            <div className="col-6">
                                <h3>Email</h3>
                                <p>
                                    fj.novoap@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-12-small">
                        <div className="row">
                            <div className="col-6">
                                <FaPhone size="35" />
                            </div>
                            <div className="col-6">
                                <h3 >Celular</h3>
                                <p>
                                    +56969019928
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}



export default function Contacto() {

    return (
        <section id="footer" className="wrapper">
            <div className="title">Contacto</div>
            <div className="container">
                <header className="style1">
                    <p>
                        Formas de Contactarme se encuentran en la parte inferior. Hablame, veamos qué podemos hacer juntos.
    				</p>
                </header>
                <div className="row">
                    <SendMessage />
                    <SocialMedia />
                </div>
                <div id="copyright">
                    <ul>
                        <li>&copy; </li><li>pagina hecha en base a un "Template" disponible en <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
import React,{useState} from "react"
import ButtonAction1, { ButtonAction2 } from "../../buttons/BottonesFuncionales"

export default function SendMessage() {
    const [local, setLocal]=useState({
        name:"",
        email:"",
        message:""
    })
    const onChange =({target})=>{
        setLocal({...local,[target.name]:target.value})
    }
    const onSubmit = () => {
        console.log(local)
    }
    const cleanup = () => {
        setLocal({
            name:"",
            email:"",
            message:""
        })
    }
    return (
        <div className="col-6 col-12-medium">
            <section>
                <form method="post" action="#">
                    <div className="row gtr-50">
                        <div className="col-6 col-12-small">
                            <input type="text" name="name" value={local.name} onChange={(e)=>{onChange(e)}} id="contact-name" placeholder="Nombre" />
                        </div>
                        <div className="col-6 col-12-small">
                            <input type="text" name="email" value={local.email} onChange={(e)=>{onChange(e)}} id="contact-email" placeholder="Email" />
                        </div>
                        <div className="col-12">
                            <textarea name="message" id="contact-message" value={local.message} onChange={(e)=>{onChange(e)}} placeholder="Mensaje" rows="4"></textarea>
                        </div>
                        <div className="col-12">
                            <ul className="actions">
                                <ButtonAction1 action={onSubmit} text="Enviar" />
                                <ButtonAction2 action={cleanup} text="Cancelar" />
                            </ul>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
}
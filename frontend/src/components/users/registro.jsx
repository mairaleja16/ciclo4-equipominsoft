import React, { useState } from 'react'
import { Form, Input, Button, FormGroup, Label } from "reactstrap"
import { CREATE_USERS } from '../helpers/Mutations'
import { useMutation } from "@apollo/client"


export default function Registro() {
    const [register, setRegister] = useState({ "status": "pendiente" })

    const [createUser, { loading, error }] = useMutation(CREATE_USERS)

    const onSubmit = (event) => {
        event.preventDefault()

        const newUser = {
            "email": register.mail,
            "name": register.name,
            "rol": register.rol,
            "password": register.password,
            "userDNI": register.userDNI,
        }
        setRegister(newUser)
        console.log(register)
        createUser({
            variables: {
                record: {
                    mail: register.mail,
                    name: register.name,
                    password: register.password,
                    rol: register.rol,
                    status: register.status,
                    userDNI: register.userDNI,
                }
            }
        }
        )
        setRegister({ "status": "pendiente" })
        document.getElementById("create-user-form").reset()
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setRegister({ ...register, [name]: value })
    }
    if (loading) return (<h1>Creando usuario...</h1>);
    if (error) return (<h1>`Submission error! ${error.message}`</h1>);


    return (
        <div className="container">
            <h1>Registro de Usuario</h1>
            <Form inline className="row" id="create-user-form" onSubmit={onSubmit} autoComplete="off">
                <FormGroup floating className="col-12 col-md-8 col-lg-6">
                    <Input
                        id="Email"
                        name="mail"
                        placeholder="Email"
                        type="email"
                        autoComplete="off"
                        required
                        onChange={handleInputChange}
                    />
                    <Label for="Email">
                        Email
                    </Label>
                </FormGroup>
                <FormGroup floating className="col-12 col-md-8 col-lg-6">
                    <Input
                        id="nombre"
                        name="name"
                        placeholder="Nombre"
                        type="text"
                        autoComplete="off"
                        required
                        onChange={handleInputChange} />
                    <Label for="nombre">Nombre</Label>
                </FormGroup>
                <FormGroup floating className="col-12 col-md-8 col-lg-6">
                    <Input
                        id="identificacion"
                        name="userDNI"
                        placeholder="Identificación"
                        type="text"
                        autoComplete="off"
                        aria-required="true"
                        required
                        onChange={handleInputChange} />
                    <Label for="identificacion">N° Identificación</Label>
                </FormGroup>
                <FormGroup floating className="col-12 col-md-8 col-lg-6">
                    <Input
                        id="password"
                        name="password"
                        placeholder="Contraseña"
                        type="password"
                        autoComplete="off"
                        aria-required="true"
                        required
                        onChange={handleInputChange} />
                    <Label for="password">Contraseña</Label>
                </FormGroup>
                <FormGroup className="col-12 col-md-8 col-lg-6">
                    <Label for="rol">Seleccione el Rol</Label>
                    <Input
                        id="rol"
                        name="rol"
                        placeholder="rol"
                        type="select"
                        autoComplete="off"
                        aria-required="true"
                        onChange={handleInputChange}>
                        <option>estudiante</option>
                        <option>lider</option>
                        <option>administrador</option>
                    </Input>
                </FormGroup>
                <FormGroup className="col-12 col-md-8 col-lg-6" >
                    <Label for="estado">Estado del usuario</Label>
                    <Input
                        name="status"
                        id="estado"
                        readOnly
                        placeholder="pendiente"
                        autoComplete="off"
                        aria-required="true"
                        onChange={handleInputChange}>
                    </Input>
                </FormGroup>
                <Button
                    type="submit"
                    color="success"
                    outline
                    className="col-12 col-md-8 col-lg-6"
                > Registrar </Button>
            </Form>
        </div>
    )

}


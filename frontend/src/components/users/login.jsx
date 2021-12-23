import { useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { VALIDATE_USER } from '../helpers/Queries'

function Login() {
    const [user, setUser] = useState({})

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }
    const onSubmit = (event) => {
        event.preventDefault()
        const validateUser = {
            "email": user.mail,
            "password": user.password,

        }
        setUser(validateUser)
        console.log(user)
        getUser({
            variables: {
                filter: {
                    mail:user.mail,
                    password:user.password
                }
            }
        })
        document.getElementById("create-user-form").reset()
    }
    const [getUser, { loading, error, data }] = useLazyQuery(VALIDATE_USER);
    console.log(data)
    if (loading) return (<h1>Creando usuario...</h1>);
    if (error) return (<h1>`Submission error! ${error.message}`</h1>);
    return (
        <div className="content">
            <h2>Bienvenido a MinsoftProjects</h2>
            <h6>Valide su usuario para continuar</h6>
            <Form inline className="row" id="create-user-form" onSubmit={onSubmit} autocomplete="off">
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
                <Button
                    color="primary"
                >
                    Ingresar
                </Button>
            </Form>
        </div>
    )
}

export default Login

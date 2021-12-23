import React, { useState } from 'react'
import { Form, Input, Button, FormGroup, Label } from "reactstrap"
import { CREATE_PROJECT } from '../helpers/Mutations'
import { PROJECTS_LIST } from '../helpers/Queries'
import { useMutation } from "@apollo/client"


export default function ProjectsInscription() {
    const [project, setProject] = useState({
        "projectStatus": "inactivo",
        "projectPhase": "iniciado"
    })
    const onSubmit = (event) => {
        event.preventDefault()
        const newProject = {
            "startDate": project.startDate,
            "overallObjetives": project.overallObjetives,
            "specificObjetives": project.specificObjetives,
            "finishDate": project.finishDate,
            "userDNI": project.userDNI,
            "budget": project.budget,
            "projectName": project.projectName,
            "name": project.name,
        }
        setProject(newProject)
        console.log(project)
        createProject({
            variables: {
                record: {
                    startDate: project.startDate,
                    projectPhase: project.projectPhase,
                    projectStatus: project.projectStatus,
                    overallObjetives: project.overallObjetives,
                    specificObjetives: project.specificObjetives,
                    finishDate: project.finishDate,
                    userDNI: project.userDNI,
                    budget: project.budget,
                    projectName: project.projectName,
                    name: project.name,
                }
            }
        }
        )
        setProject({
            "projectStatus": "inactivo",
            "projectPhase": "iniciado"
            })
        document.getElementById("create-user-form").reset()
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setProject({ ...project, [name]: value })
    }
    const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
        refetchQueries:[{query:PROJECTS_LIST}]
    })
    if (loading) return (<h1>Creando usuario...</h1>);
    if (error) return (<h1>`Submission error! ${error.message}`</h1>);

    return (
        <div className="container">
            <h1>Registro de Proyectos</h1>
            <Form inline className="row" id="create-user-form" onSubmit={onSubmit} autoComplete="off">
                <FormGroup floating className="col-12 col-md-8 col-lg-6">
                    <Input
                        id="projectName"
                        name="projectName"
                        placeholder="Nombre del Proyecto"
                        type="text"
                        autoComplete="off"
                        required
                        onChange={handleInputChange}
                    />
                    <Label for="projectName">
                        Nombre del Proyecto
                    </Label>
                </FormGroup>
                <FormGroup floating className="col-12 col-md-8 col-lg-6">
                    <Input
                        id="name"
                        name="name"
                        placeholder="Encargado del Proyecto"
                        type="text"
                        autoComplete="off"
                        required
                        onChange={handleInputChange}
                    />
                    <Label for="name">
                        Encargado del Proyecto
                    </Label>
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
                    <Label for="identificacion">DNI del Encargado</Label>
                </FormGroup>
                <FormGroup floating className="col-12 col-md-8 col-lg-6">
                    <Input
                        id="startDate"
                        name="startDate"
                        placeholder="Fecha de Inicio"
                        type="Date"
                        autoComplete="off"
                        required
                        onChange={handleInputChange} />
                    <Label for="startDate">Fecha de Inicio</Label>
                </FormGroup>
                <FormGroup floating className="col-12 col-md-8 col-lg-6">
                    <Input
                        id="finishDate"
                        name="finishDate"
                        placeholder="Fecha de Terminación"
                        type="Date"
                        autoComplete="off"
                        required
                        onChange={handleInputChange} />
                    <Label for="finishDate">Fecha de Terminación</Label>
                </FormGroup>
                <FormGroup floating className="col-12 col-md-8 col-lg-6">
                    <Input
                        id="specificObjetives"
                        name="specificObjetives"
                        placeholder="Objetivos Específicos"
                        type="textarea"
                        autoComplete="off"
                        aria-required="true"
                        required
                        onChange={handleInputChange} />
                    <Label for="specificObjetives">Objetivos Específicos</Label>
                </FormGroup>
                <FormGroup floating className="col-12 col-md-8 col-lg-6">
                    <Input
                        id="overallObjetives"
                        name="overallObjetives"
                        placeholder="Objetivo General"
                        type="textarea"
                        autoComplete="off"
                        aria-required="true"
                        required
                        onChange={handleInputChange} />
                    <Label for="overallObjetives">Objetivo General</Label>
                </FormGroup>
                <FormGroup floating className="col-12 col-md-8 col-lg-6" >
                    <Input
                        name="budget"
                        id="budget"
                        type="text"
                        placeholder="Presupuesto"
                        autoComplete="off"
                        aria-required="true"
                        onChange={handleInputChange}>
                    </Input>
                    <Label for="budget">Presupuesto</Label>
                </FormGroup>
                <FormGroup className="col-12 col-md-8 col-lg-6">
                    <Label for="projectPhase">Fase del Projecto</Label>
                    <Input
                        id="projectPhase"
                        name="projectPhase"
                        placeholder="null"
                        readOnly
                        type="text"
                        autoComplete="off"
                        aria-required="true"
                        onChange={handleInputChange}>

                    </Input>
                </FormGroup>
                <FormGroup className="col-12 col-md-8 col-lg-6">
                    <Label for="projectStatus">Estado del Projecto</Label>
                    <Input
                        id="projectStatus"
                        name="projectStatus"
                        placeholder="inactivo"
                        type="text"
                        readOnly
                        autoComplete="off"
                        aria-required="true"
                        onChange={handleInputChange}>
                    </Input>
                </FormGroup>
                {/* <FormGroup className="col-12 col-md-8 col-lg-6">
                    <Label for="projectPhase">Fase del Projecto</Label>
                    <Input
                        id="projectPhase"
                        name="projectPhase"
                        placeholder="Fase"
                        type="select"
                        autoComplete="off"
                        aria-required="true"
                        onChange={handleInputChange}>
                        <option>iniciado</option>
                        <option>desarrollo</option>
                        <option>terminado</option>
                    </Input>
                </FormGroup>
                <FormGroup className="col-12 col-md-8 col-lg-6">
                    <Label for="projectStatus">Fase del Projecto</Label>
                    <Input
                        id="projectStatus"
                        name="projectStatus"
                        placeholder="Estado"
                        type="select"
                        autoComplete="off"
                        aria-required="true"
                        onChange={handleInputChange}>
                        <option>activo</option>
                        <option>inactivo</option>
                    </Input>
                </FormGroup> */}
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

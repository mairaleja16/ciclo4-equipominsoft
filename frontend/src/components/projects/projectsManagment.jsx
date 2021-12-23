import React, { Fragment, useState } from 'react'
import { Button } from 'reactstrap';
import ProjectsInscription from './projectsInscriptions';
import ProjectsList from './projectsList';


export default function Projects() {
  //funcion para renderizar listado de proyectos
  const [projectsList, setProjectsList] = useState(false)

  const onProjectsList = () => {
    setNewProject(false)
    setProjectsList(!projectsList)
  }

  //funcion para crear nuevo proyecto
  const [newProject, setNewProject] = useState(false)

  const onNewProject = () => {

    setProjectsList(false)
    setNewProject(!newProject)
  }

  return (
    <Fragment>
      <div className="container">
      <h1>Gestión de Proyectos</h1>
      <Button
        color="success"
        className="col-12 col-md-8 col-lg-6 mt-2"
        onClick={onNewProject}>Nuevo Projecto</Button>
      <Button
        color="success"
        className="col-12 col-md-8 col-lg-6 mt-2"
        onClick={onProjectsList}>Listado de Proyectos</Button>
      <div>
        {projectsList? (<div className="container mt-2">
          <ProjectsList />
        </div>) : ((<div></div>))}
      </div>
      <div>
        {newProject ? (<div className="container mt-2">
          <ProjectsInscription />
        </div>) : ((<div></div>))}
      </div>
      </div>
    </Fragment >

  )
}

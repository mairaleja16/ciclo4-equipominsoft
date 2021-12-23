import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { useQuery } from '@apollo/client';
import { PROJECTS_LIST } from '../helpers/Queries';

function ProjectsList() {
    const [load, setLoading] = useState(true)
    useEffect(() => {
        setLoading(false)
    }, [load]);

    const { loading, error, data } = useQuery(PROJECTS_LIST);
    if (loading) return <p>Loading...</p>;
    if (error) {
        return <p>Error:(</p>;
    }
    console.log(data)

    return (
        <div>
            {load ?
                (<div className="spinner-grow spinner-grow-lg" role="status">
                    <span className="sr-only"></span>
                </div>) : null
            }
            {data ?
                (<div className="container">
                    {data.projectsManagmentMany.map(item => (
                            <Card key={item.id}
                                body
                                color="primary"
                                outline
                            >
                                <CardBody>
                                    <CardTitle
                                        className="mb-2"
                                        tag="h2">
                                        <p>{item.projectName}</p>
                                    </CardTitle>
                                    <CardText>
                                        Encargado: {item.name}<br/>
                                        Fase: {item.projectPhase}<br/>
                                        Estado: {item.projectStatus}<br/>
                                        Objetivo General: {item.overallObjetives}<br/>
                                        Objetivos Específicos: {item.specificObjetives}<br/>
                                        Fecha de Inicio: {item.startDate.substring(0, 10)}<br/>
                                        Fecha de Finalización: {item.finishDate.substring(0, 10)}<br/>
                                        Presupuesto: {item.budget}
                                    </CardText>
                                    <Button
                                        color="success"
                                        outline>
                                        Modificar
                                    </Button>
                                </CardBody>
                            </Card>

                    )
                    )
                    }
                </div>) : null}
        </div>
    )
}

export default ProjectsList

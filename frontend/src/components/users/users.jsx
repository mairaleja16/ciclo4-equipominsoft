import React from 'react';
import USER_BY_ID from "../helpers/Queries.js"
import {
  useQuery,
} from "@apollo/client";
import { Card, CardBody, CardText, CardTitle} from 'reactstrap';

export default function Users() {
  const { loading, error, data } = useQuery(USER_BY_ID);
  if (loading) return <p>Loading...</p>;
  if (error) {
    return <p>Error :(</p>;
  }
  return data.userMany.map((item) => {
    return (
      <div className="container">
            <Card key={item.id}
              body
              color="success"
              outline>
              <CardBody>
                <CardTitle
                  className="mb-2"
                  tag="h2">
                  <p>{item.name}</p>
                </CardTitle>
                <CardText>
                  <p>Estado: {item.status}</p>
                  <p>Rol: {item.rol}</p>
                </CardText>
              </CardBody>
            </Card>
      </div>
    )
  })
}


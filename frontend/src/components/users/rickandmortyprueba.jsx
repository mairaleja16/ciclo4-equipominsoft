import React from 'react';
import {
    useQuery,
    gql,
  } from "@apollo/client";
  

  
  const DATOS = gql`
    {
      characters {
        results {
          id
          name
          species
          type
          gender
          image
        }
      }
    }
  `;
  
  export default function ExchangeRates() {
    const { loading, error, data } = useQuery(DATOS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.characters.results.map((item) => {
      return(
        <div>
          <p key={item.id}>{item.name}, {item.species}, {item.type}</p>
          <p key={item.id}><img src={item.image}></img></p>
          
        </div>
      )
    })
  
  }
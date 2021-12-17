import React from 'react';
import USER_BY_ID from "../helpers/Queries.js"
import {
  useQuery,
} from "@apollo/client";

export default function Users() {
  const { loading, error, data } = useQuery(USER_BY_ID);
  if (loading) return <p>Loading...</p>;
    if (error){
      return <p>Error :(</p>;
      } 
  return data.userMany.map((item) => {
    return(
      <div>
        <p key={item.id}>{item.name}, {item.mail}, {item.status}</p>
        <p key={item.id}>{item.userDNI}</p>
        
      </div>
    )
  })
}


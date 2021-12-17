import {
    gql
  } from "@apollo/client";
 const USER_BY_ID = gql`query buscarUsuario($filter: FilterFindManyusersInput){
    userMany(filter:$filter){
      name
      mail
      status
      userDNI
      rol
      password
    }
  }
  `;
export default USER_BY_ID

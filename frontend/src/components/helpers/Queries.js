import {
    gql
  } from "@apollo/client";
const USER_BY_ID = gql`query buscarUsuario($filter: FilterFindManyusersInput){
    userMany(filter:$filter){
      mail
      name
      password
      status
      userDNI
      rol
    }
  }
  `;
export default USER_BY_ID

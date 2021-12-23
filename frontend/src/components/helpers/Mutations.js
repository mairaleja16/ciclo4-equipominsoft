import {
    gql
  } from "@apollo/client";
 export const CREATE_USERS = gql`
    mutation createUser($record: CreateOneusersInput!){
    userCreateOne(record:$record){
      record {
        mail
        name
        password
        rol
        status
        userDNI
      },
      recordId,
      error {
        message
      }
    }
  }
  `;
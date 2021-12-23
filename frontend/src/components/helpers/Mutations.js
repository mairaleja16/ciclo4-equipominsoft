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

export const CREATE_PROJECT = gql`mutation createProject($record:CreateOneprojectsManagmentInput!){
  projectsManagmentCreateOne(record:$record){
     record {
       projectName
       startDate
       projectPhase
       projectStatus
       overallObjetives
       specificObjetives
       budget
       finishDate
       userDNI
       name

     },
     recordId,
     error {
       message
     }
   }
 }`
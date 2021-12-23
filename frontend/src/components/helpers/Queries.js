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

export const PROJECTS_LIST = gql`
query buscarProyectos($filter:FilterFindManyprojectsManagmentInput){
  projectsManagmentMany(filter:$filter){
    
    projectName
    projectPhase
    overallObjetives
    specificObjetives
    projectStatus
    startDate
    finishDate     
    budget
    name
    userDNI
  }
}`
export default USER_BY_ID

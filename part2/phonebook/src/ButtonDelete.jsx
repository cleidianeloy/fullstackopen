import personService from "./services/persons" ;

function ButtonDelete({person, setUpdate, updateMessage}) {

const deletePerson = () => {
    if(window.confirm(`Delete ${person.name}`)){
      personService.deletePerson(person.id)
      .then(() =>{
          updateMessage(`${person.name} was Deleted`, true)
          setUpdate(1)
      }).catch((error)=> {
          updateMessage(`Information of ${person.name} has already been removed from server`, false)
      })
    }
}

  return (
    <button onClick={() => deletePerson(person.id)}>delete</button>
  )
}

export default ButtonDelete
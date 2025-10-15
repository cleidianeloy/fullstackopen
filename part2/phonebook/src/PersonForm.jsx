import { useState } from 'react';
import personService from "./services/persons" ;
function PersonForm({persons,setUpdate, updateMessage}) {
  const [newName, setNewName] = useState('');
  const [newPhone, setnewPhone] = useState('');

  const changeNewName = (event) => {
    const newInput = event.target.value;
    setNewName(newInput);
  }
  const changeNewPhone = (event) => {
    const newInput = event.target.value;
    setnewPhone(newInput);
  }
  const nameExists = (name) => {
    return personService.getAll()
        .then((personsList) => {
            return personsList.find((person) => person.name === name);
        });
  }

  const addNewPerson = async (event) => {
      event.preventDefault();
      const newPerson = {
          name: newName,
          number: newPhone
      }
      const nameExisted = await nameExists(newName);
      console.log(nameExisted)
      if(nameExisted){
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
          newPerson.id = nameExisted.id
          personService.update(nameExisted.id, newPerson)
              .then((response) =>{
                 updateMessage(`${newName} was updated`, true)
                 setUpdate(1)
              }).catch(()=>{
                 updateMessage(`${newName} can't be updated, some error happened`, false)
                 setUpdate(1)
              })
            }
      }else{
        newPerson.id = (Number.parseInt(persons[persons.length - 1].id) + 1) + ""
        personService.create(newPerson).then((response)=>{
            updateMessage(`${newName} was created`, true)
            setUpdate(1)
        }).catch(()=>{
          updateMessage(`${newName} can't be created, some error happened`, false)
           setUpdate(1)
        })
      }
  }

  return (
      <form onSubmit={addNewPerson}>

        <div>
          name: <input onChange={changeNewName}/>
        </div>
        <div>
          number: <input onChange={changeNewPhone}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm
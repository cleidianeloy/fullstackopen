import { useEffect, useState } from 'react';
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import personService from "./services/persons" ;
import Notification from "./Notification";
//TODO: 2.16: The Phonebook — 11º passo
function App() {
  const [persons, setPersons] = useState([]) 
  const [personsToShow, setPersonsToShow] = useState([]);
  const [message, setMessage] = useState(null);
  const [update, setUpdate] = useState(1);
  const updateMessage = (message, goodMessage = false)=>{
    const newMessage =  {   
        message: message, 
        goodMessage: goodMessage
    }
    setMessage(newMessage)
    setTimeout(()=>{
      setMessage(null);
    }, 5000)
  }
  useEffect(()=>{
    if(update === 1){
        personService.getAll().then((response)=>{
            setPersons(response);
            setUpdate(0)
        }).catch((error)=>{
            updateMessage("phonebook list can't be updated", false)
            setUpdate(0)
        })
    }

  }, [update])

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message}/>
      <Filter persons={persons} setPersonsToShow={setPersonsToShow}/>
      <h2>Add a new</h2>
      <PersonForm persons={persons} setUpdate={setUpdate} updateMessage={updateMessage}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} persons={persons} setUpdate={setUpdate} updateMessage={updateMessage}/>
    </div>
  )
}

export default App

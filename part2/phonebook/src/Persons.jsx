import ButtonDelete from "./ButtonDelete";
function Persons({persons, personsToShow, setUpdate, updateMessage}) {
  return (
      <ul>
        {
            personsToShow.length > 0 ? 
            personsToShow.map((person)=> {
              return <li key={person.name}>{person.name} {person.number} 
              <ButtonDelete person={person}  
              setUpdate={setUpdate} 
              updateMessage={updateMessage}/></li>
            }) :
            persons.map((person)=> {
              return <li key={person.name}>{person.name} {person.number} 
              <ButtonDelete person={person} 
              setUpdate={setUpdate} 
              updateMessage={updateMessage}/></li>
            })
        }
      </ul>
  )
}

export default Persons
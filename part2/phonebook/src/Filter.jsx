function Filter({persons, setPersonsToShow}) {
  const updateFilter = (event) => {
    const newInput = event.target.value;
    const findedPerson = persons.filter((person)=> person.name.toLowerCase().includes(newInput.toLowerCase()));
    setPersonsToShow(findedPerson)
  }

  return (
    <div>
        filter shown with: <input onChange={updateFilter}/>
    </div>
  )
}

export default Filter

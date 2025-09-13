function Total(props) {
  return (
    <p>Number of exercises {props.exercises.reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</p>
  ) 
}

export default Total
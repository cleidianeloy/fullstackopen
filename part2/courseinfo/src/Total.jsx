function Total(props) {
  return (
    <p><strong>Total of {props.exercises.reduce((accumulator, currentValue) => accumulator + currentValue, 0)} exercises</strong></p>
  ) 
}

export default Total
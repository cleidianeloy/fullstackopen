import Part from "./Part"
function Content(props) {
  return (
    <>
        {
            props.parts.map((component, index)=>{
                return <Part key={index} name={component.name} exercises={component.exercises}/>
            })
        }
    </>
  ) 
}

export default Content
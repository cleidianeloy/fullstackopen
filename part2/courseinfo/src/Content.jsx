import Part from "./Part"
function Content({parts}) {
  return (
    <>
        {
            parts.map((component)=>{
                return <Part key={component.id} title={component.name} exercises={component.exercises}/>
            })
        }
    </>
  ) 
}

export default Content
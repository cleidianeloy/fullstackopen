import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
function Course({course}) {
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total exercises={course.parts.map((component) => component.exercises)}/>
    </div>
  ) 
}

export default Course
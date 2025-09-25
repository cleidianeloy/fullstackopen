import Button from "./Button"
const Feedback = ({good, neutral, bad}) => {
    return (
        <div>
           <h1>Give Feedback</h1>
            {[good, neutral, bad].map((value, index)=>{
                return <Button key={index} text={value.text} onclick={value.action}/>
            })}
        </div>
    )
}
export default Feedback;
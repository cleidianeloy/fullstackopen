import { useState } from 'react'
import Feedback from "./Feedback"
import Statistics from './Statistics'
function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
         <Feedback 
          good={{text:"Good", action: () => setGood(good + 1) }} 
          neutral={{text:"Neutral", action: () => setNeutral(neutral + 1)}}
          bad={{text:"Bad", action: () => setBad(bad +1)}}/>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </>

  )
}

export default App

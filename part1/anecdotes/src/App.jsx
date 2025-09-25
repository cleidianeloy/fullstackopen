import { useState } from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(anecdotes.map((element, index)=> {
      return 0
  }));
  const getRandomAnec = () => {
      const min = Math.ceil(0);
      const max = Math.floor(anecdotes.length);
      return Math.floor(Math.random() * (max - min) + min);
  }
  const updatePoints = (selected) => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  }
  const mostVoted = (array) => {
    const largestPoints = Math.max(...array);
    return points.indexOf(largestPoints)
  }
  
  return (
    <div>
      <div>
          <h1>Anecdote of the day</h1>
          <p>{anecdotes[selected]}</p>
          <p>has {points[selected]} votes</p>
          <button onClick={() => {updatePoints(selected)}}>vote</button> 
          <button onClick={() => {setSelected(getRandomAnec())}}>next anecdote</button>
      </div>

      <div>
          <h1>Anecdote with most votes</h1>
          <p>{anecdotes[mostVoted(points)]}</p>
          <p>has {points[mostVoted(points)]} votes</p>  
      </div>
    </div>
  )
}

export default App

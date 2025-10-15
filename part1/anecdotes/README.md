# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

<h1>Anecdotes Exercises (Part 1)</h1>

<hr>

<h2>1.12*: anecdotes step 1</h2>
<p>The world of software engineering is filled with anecdotes that distill timeless truths from our field into short one-liners.</p>
<p>Expand the following application by adding a button that can be clicked to display a <strong>random</strong> anecdote from the field of software engineering:</p>
<pre><code>import { useState } from 'react'

const App = () => {
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
   
  const [selected, setSelected] = useState(0)

  return (
    &lt;div&gt;
      {anecdotes[selected]}
    &lt;/div&gt;
  )
}

export default App</code></pre>
<p>Content of the file <strong>main.jsx</strong> is the same as in previous exercises.</p>
<p>Find out how to generate random numbers in JavaScript, eg. via a search engine or on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random">Mozilla Developer Network</a>. Remember that you can test generating random numbers e.g. straight in the console of your browser.</p>
<p>Your finished application could look something like this:</p>
<p></p>

<hr>

<h2>1.13*: anecdotes step 2</h2>
<p>Expand your application so that you can <strong>vote</strong> for the displayed anecdote.</p>
<p><strong>NB</strong> store the votes of each anecdote into an array or object in the component's state. Remember that the correct way of updating state stored in complex data structures like objects and arrays is to make a <strong>copy</strong> of the state.</p>
<p>You can create a copy of an object like this:</p>
<pre><code>const votes = { 0: 1, 1: 3, 2: 4, 3: 2 }
const copy = { ...votes }
// increment the property 2 value by one
copy[2] += 1     </code></pre>
<p>OR a copy of an array like this:</p>
<pre><code>const votes = [1, 4, 6, 3]
const copy = [...votes]
// increment the value in position 2 by one
copy[2] += 1     </code></pre>
<p>Using an array might be the simpler choice in this case. Searching the Internet will provide you with lots of hints on how to <a href="https://stackoverflow.com/questions/55940735/create-an-array-filled-with-zeros-in-javascript">create a zero-filled array of the desired length</a>.</p>
<p></p>

<hr>

<h2>1.14*: anecdotes step 3</h2>
<p>Now implement the final version of the application that displays the anecdote with the <strong>largest number of votes</strong>:</p>
<p></p>
<p>If multiple anecdotes are tied for first place it is sufficient to just show one of them.</p>
<p>This was the last exercise for this part of the course and it's time to push your code to GitHub and mark all of your finished exercises to the "my submissions" tab of the submission application.</p>

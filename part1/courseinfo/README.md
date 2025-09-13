# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

<h1>Exercises 1.1.-1.2.</h1>
<p>
  The following sections detail the exercises for this course.
</p>
<hr />
<h2>1.1: Course Information, step 1</h2>
<p>
  The application that we will start working on in this exercise will be further
  developed in a few of the following exercises. In this and other upcoming
  exercise sets in this course, it is enough to only submit the final state of
  the application. If desired, you may also create a commit for each exercise of
  the series, but this is entirely optional.
</p>
<p>Use Vite to initialize a new application. Modify <code>main.jsx</code> to match the following</p>
<pre><code>import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(&lt;App /&gt;)</code></pre>
<p>and <code>App.jsx</code> to match the following</p>
<pre><code>const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    &lt;div&gt;
      &lt;h1&gt;{course}&lt;/h1&gt;
      &lt;p&gt;
        {part1} {exercises1}
      &lt;/p&gt;
      &lt;p&gt;
        {part2} {exercises2}
      &lt;/p&gt;
      &lt;p&gt;
        {part3} {exercises3}
      &lt;/p&gt;
      &lt;p&gt;Number of exercises {exercises1 + exercises2 + exercises3}&lt;/p&gt;
    &lt;/div&gt;
  )
}
export default App</code></pre>
<p>and remove the extra files <code>App.css</code> and <code>index.css</code>, also remove the directory <code>assets</code>.</p>
<p>Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: <code>Header</code>, <code>Content</code>, and <code>Total</code>. All data still resides in the <code>App</code> component, which passes the necessary data to each component using <code>props</code>. <code>Header</code> takes care of rendering the name of the course, <code>Content</code> renders the parts and their number of exercises and <code>Total</code> renders the total number of exercises.</p>
<p>Define the new components in the file <code>App.jsx</code>.</p>
<p>The <code>App</code> component's body will approximately be as follows:</p>
<pre><code>const App = () => {
  // const-definitions

  return (
    &lt;div&gt;
      &lt;Header course={course} /&gt;
      &lt;Content ... /&gt;
      &lt;Total ... /&gt;
    &lt;/div&gt;
  )
}</code></pre>
<p><strong><span style="color:red">WARNING</span></strong> Don't try to program all the components concurrently, because that will almost certainly break down the whole app. Proceed in small steps, first make e.g. the component <code>Header</code> and only when it works for sure, you could proceed to the next component.</p>
<p>Careful, small-step progress may seem slow, but it is actually <strong>by far the fastest</strong> way to progress. Famous software developer Robert "Uncle Bob" Martin has stated</p>
<blockquote>
  <p>"The only way to go fast, is to go well"</p>
</blockquote>
<p>that is, according to Martin, careful progress with small steps is even the only way to be fast.</p>
<hr />
<h2>1.2: Course Information, step 2</h2>
<p>Refactor the <code>Content</code> component so that it does not render any names of parts or their number of exercises by itself. Instead, it only renders three <code>Part</code> components of which each renders the name and number of exercises of one part.</p>
<pre><code>const Content = ... {
  return (
    &lt;div&gt;
      &lt;Part .../&gt;
      &lt;Part .../&gt;
      &lt;Part .../&gt;
    &lt;/div&gt;
  )
}</code></pre>

---

<h1>Exercises 1.3.-1.5.</h1>
<p>
  We continue building the application that we started working on in the previous
  exercises. You can write the code into the same project since we are only
  interested in the final state of the submitted application.
</p>
<p>
  <strong>Pro-tip:</strong> you may run into issues when it comes to the
  structure of the <code>props</code> that components receive. A good way to
  make things more clear is by printing the props to the console, e.g. as
  follows:
</p>
<pre><code class="language-jsx">const Header = (props) => {
  console.log(props)
  return &lt;h1&gt;{props.course}&lt;/h1&gt;
}</code></pre>
<p>
  If and <strong>when</strong> you encounter an error message
</p>
<blockquote>
  <p>Objects are not valid as a React child</p>
</blockquote>
<p>keep in mind the things told <a href="https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx">here</a>.</p>
<hr />
<h2>1.3: Course Information step 3</h2>
<p>
  Let's move forward to using objects in our application. Modify the variable
  definitions of the <code>App</code> component as follows and also refactor the
  application so that it still works:
</p>
<pre><code class="language-jsx">const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    &lt;div&gt;
      ...
    &lt;/div&gt;
  )
}</code></pre>
<hr />
<h2>1.4: Course Information step 4</h2>
<p>
  Place the objects into an array. Modify the variable definitions of
  <code>App</code> into the following form and modify the other parts of the
  application accordingly:
</p>
<pre><code class="language-jsx">const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    &lt;div&gt;
      ...
    &lt;/div&gt;
  )
}</code></pre>
<p>
  <strong>NB</strong> at this point you can assume that there are always three
  items, so there is no need to go through the arrays using loops. We will come
  back to the topic of rendering components based on items in arrays with a more
  thorough exploration in the next part of the course.
</p>
<p>
  However, do not pass different objects as separate props from the
  <code>App</code> component to the components <code>Content</code> and
  <code>Total</code>. Instead, pass them directly as an array:
</p>
<pre><code class="language-jsx">const App = () => {
  // const definitions

  return (
    &lt;div&gt;
      &lt;Header course={course} /&gt;
      &lt;Content parts={parts} /&gt;
      &lt;Total parts={parts} /&gt;
    &lt;/div&gt;
  )
}</code></pre>
<hr />
<h2>1.5: Course Information step 5</h2>
<p>
  Let's take the changes one step further. Change the course and its parts into a
  single JavaScript object. Fix everything that breaks.
</p>
<pre><code class="language-jsx">const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    &lt;div&gt;
      ...
    &lt;/div&gt;
  )
}</code></pre>

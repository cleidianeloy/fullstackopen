# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

<h1>Unicafe Exercises (Part 1)</h1>

<hr>

<h2>1.6: unicafe step 1</h2>
<p>Like most companies, the student restaurant of the University of Helsinki <strong>Unicafe</strong> collects feedback from its customers. Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: <strong>good</strong>, <strong>neutral</strong>, and <strong>bad</strong>.</p>
<p>The application must display the total number of collected feedback for each category. Your final application could look like this:</p>
<p></p>
<p>Note that your application needs to work only during a single browser session. Once you refresh the page, the collected feedback is allowed to disappear.</p>
<p>It is advisable to use the same structure that is used in the material and previous exercise. File <strong>main.jsx</strong> is as follows:</p>

<pre>
<code>
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(&lt;App /&gt;)</code></pre>
<p>You can use the code below as a starting point for the <strong>App.jsx</strong> file:</p>
<pre>
<code>
    import { useState } from 'react'
    const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        &lt;div&gt;
        code here
        &lt;/div&gt;
    )
    }

    export default App
</code>
</pre>

<hr>

<h2>1.7: unicafe step 2</h2>
<p>Expand your application so that it shows more statistics about the gathered feedback: the <strong>total number</strong> of collected feedback, the <strong>average score</strong> (the feedback values are: good 1, neutral 0, bad -1) and the <strong>percentage of positive feedback</strong>.</p>

<hr>

<h2>1.8: unicafe step 3</h2>
<p>Refactor your application so that displaying the statistics is extracted into its own <strong>Statistics</strong> component. The state of the application should remain in the <strong>App</strong> root component.</p>
<p>Remember that components should not be defined inside other components:</p>
<pre><code>// a proper place to define a component
const Statistics = (props) => {
  // ...
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // do not define a component within another component
  const Statistics = (props) => {
    // ...
  }

  return (
    // ...
  )
}</code></pre>

<hr>

<h2>1.9: unicafe step 4</h2>
<p>Change your application to display statistics <strong>only once feedback has been gathered</strong>.</p>

<hr>

<h2>1.10: unicafe step 5</h2>
<p>Let's continue refactoring the application. Extract the following two components:</p>
<ul>
        <li><strong>Button</strong> handles the functionality of each feedback submission button.</li>
        <li><strong>StatisticLine</strong> for displaying a single statistic, e.g. the average score.</li>
</ul>
<p>To be clear: the <strong>StatisticLine</strong> component always displays a single statistic, meaning that the application uses multiple components for rendering all of the statistics:</p>
<pre><code>const Statistics = (props) => {
  /// ...
  return(
    &lt;div&gt;
      &lt;StatisticLine text="good" value ={...} /&gt;
      &lt;StatisticLine text="neutral" value ={...} /&gt;
      &lt;StatisticLine text="bad" value ={...} /&gt;
      // ...
    &lt;/div&gt;
  )
}</code></pre>
<p>The application's state should still be kept in the root <strong>App</strong> component.</p>

<hr>

<h2>1.11*: unicafe step 6</h2>
<p>Display the statistics in an HTML <strong>table</strong>, so that your application looks roughly like this:</p>

<p>Remember to keep your console open at all times. If you see this warning in your console:</p>

<p>Then perform the necessary actions to make the warning disappear. Try pasting the error message into a search engine if you get stuck.</p>
<p>Typical source of an error <code>Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist.</code> is from a Chrome extension. Try going to <code>chrome://extensions/</code> and try disabling them one by one and refreshing React app page; the error should eventually disappear.</p>
<p>Make sure that from now on you don't see any warnings in your console!</p>
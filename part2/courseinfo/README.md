# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Exercises

### 2.1: Course information step 6

Let's finish the code for rendering course contents from exercises 1.1 - 1.5. You can start with the code from the **model answers**.

**Model Answers Note:** The model answers for part 1 can be found by going to the submission system, clicking on **my submissions** at the top, and in the row corresponding to part 1 under the **solutions** column, clicking on **show**. To see the solution to the `course info` exercise, click on `App.jsx` under `courseinfo`.

> **Project Copying Note:** If you copy a project from one place to another, you might have to delete the `node_modules` directory and install the dependencies again with the command `npm install` before you can start the application. Generally, it's not recommended that you copy a project's whole contents and/or add the `node_modules` directory to the version control system.

We'll modify the `App` component as follows:

```javascript
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}
export default App
```

1.  Define a component responsible for formatting a single course called **`Course`**.
2.  The component structure of the application should follow this pattern:
    ```
    App
      Course
        Header
        Content
          Part
          Part
          ...
    ```
    Thus, the `Course` component should contain the sub-components (`Header`, `Content`, `Part`) defined in the previous part, which are responsible for rendering the course name and its parts.
3.  The application must work **regardless of the number of parts** a course has.
4.  **Ensure that the console shows no errors\!**

*(You don't need the sum of the exercises yet.)*

### 2.2: Course information step 7

  * Show also the **sum of the exercises** of the course.

### 2.3\*: Course information step 8

  * If you haven't done so already, calculate the sum of exercises with the array method **`reduce`**.

> **Pro Tip:** If your `reduce` implementation is not working:
>
> ```javascript
> const total = 
>   parts.reduce((s, p) => someMagicHere)
> ```
>
> Use `console.log` by writing the arrow function in its longer form to debug the accumulator (`s`) and current element (`p`):
>
> ```javascript
> const total = parts.reduce((s, p) => {
>   console.log('what is happening', s, p)
>   return someMagicHere 
> })
> ```
>
> **Not working?** Use your search engine to look up how `reduce` is used in an **Object Array**.

### 2.4: Course information step 9

Let's extend the application to allow for an **arbitrary number** of courses:

```javascript
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      // Render multiple courses here
    </div>
  )
}
```

### 2.5: Separate module step 10

  * Declare the **`Course`** component as a **separate module**, which is imported by the `App` component.
  * You can include all subcomponents of the course (`Header`, `Content`, `Part`) within this same `Course` module.


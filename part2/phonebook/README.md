# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Running the Project
You need to run two separate commands in two different terminal windows: one to start the JSON server and another to start the React application.
### Start the JSON Server:
Open the first terminal window and run the following command to start the mock API server:

    npm run server

### Start the React Application:
Open the second terminal window (in the same project folder) and run:

    npm run dev

---

# Exercises 2.1-2.5: Course Information Refactoring

These exercises involve refactoring the course information application to handle single and multiple courses, calculate the total number of exercises, and utilize separate modules for components.

-----

## Submission Guidelines

  * The exercises are submitted via **GitHub** (by pushing to your repository) and by marking the exercises as done in the **submission system**.
  * You can submit all exercises to the same repository, or use multiple different repositories. If you submit exercises from different parts into the same repository, name your directories well.
  * The exercises are submitted **one part at a time**. Once you have submitted the exercises for a part, you can no longer submit any missed exercises for that part.
  * **Note:** This part has more exercises than the ones before, so **do not submit** until you have completed all the exercises from this part you wish to submit.

---
Ótimo\! Aqui está o texto formatado para o seu arquivo README, cobrindo os exercícios **2.6. a 2.17.** sobre o projeto da Agenda de Telefones (The Phonebook), com destaque para os blocos de código e dados.

# Exercises 2.6-2.17: The Phonebook Application

This set of exercises focuses on building and enhancing a simple phonebook application using React, managing state, handling user input, performing data persistence with a backend server, and implementing CRUD (Create, Read, Update, Delete) operations.

-----

## General Instructions

In related sets of exercises, it is sufficient to return the **final version** of your application. You may also make a separate commit after you have finished each part of the exercise set, but doing so is not required.

-----

## Part 1: Basic Functionality (2.6-2.10)

### 2.6: The Phonebook Step 1

Let's start by implementing the addition of a person (name only) to the phonebook.

Use the code below as a starting point for the `App` component:

```javascript
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* ... render the persons list here */}
    </div>
  )
}
export default App
```

  * The `newName` state is meant for controlling the form input element.
  * **NB:** Remember to **prevent the default action** of submitting HTML forms\!
  * **Debugging:** You can temporarily add `<div>debug: {newName}</div>` for debugging.

### 2.7: The Phonebook Step 2

  * Prevent the user from being able to add names that **already exist** in the phonebook.
  * Issue a warning using the `alert` command when a duplicate name is attempted.
  * **Hint:** When forming strings that contain values from variables, use a **template string** for an idiomatic JavaScript approach:
    ```javascript
    `${newName} is already added to phonebook`
    ```

### 2.8: The Phonebook Step 3

  * Expand your application by allowing users to add **phone numbers** to the phone book.
  * You will need to add a second `input` element and its event handler to the form:

<!-- end list -->

```html
<form>
  <div>name: <input /></div>
  <div>number: <input /></div>
  <div><button type="submit">add</button></div>
</form>
```

### 2.9\*: The Phonebook Step 4

  * Implement a **search filter** field that can be used to filter the list of people by name.
  * The filtering logic should be **case insensitive** (e.g., searching "arto" returns "Arto Hellas").
  * The search field can be an `input` element placed **outside** the HTML form.
  * **Dummy Data:** It's useful to "hardcode" some initial data for testing this functionality:

<!-- end list -->

```javascript
const [persons, setPersons] = useState([
  { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
])
```

### 2.10: The Phonebook Step 5

  * **Refactor** the application by extracting suitable parts into new components.
  * Maintain the application's state and all event handlers in the **`App` root component**.
  * It is sufficient to extract **three** components. Good candidates are:
      * `Filter` (search filter)
      * `PersonForm` (form for adding people)
      * `Persons` (component that renders all people/the filtered list)
  * The refactored root component structure should resemble this:

<!-- end list -->

```javascript
const App = () => {
  // ... state and handlers ...

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter ... />

      <h3>Add a new</h3>

      <PersonForm 
        /* ... props for handlers/state ... */
      />

      <h3>Numbers</h3>

      <Persons 
        /* ... props for persons/filtered list ... */
      />
    </div>
  )
}
```

  * **NB:** Review the chapter on **"do not define a component in another component"** to avoid common pitfalls.

-----

## Part 2: Backend Communication and CRUD (2.11-2.17)

### 2.11: The Phonebook Step 6

  * Store the initial state of the application in the file **`db.json`** at the project root.
  * Initial `db.json` content:

<!-- end list -->

```json
{
  "persons":[
    { 
      "name": "Arto Hellas", 
      "number": "040-123456",
      "id": "1"
    },
    { 
      "name": "Ada Lovelace", 
      "number": "39-44-5323523",
      "id": "2"
    },
    { 
      "name": "Dan Abramov", 
      "number": "12-43-234345",
      "id": "3"
    },
    { 
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122",
      "id": "4"
    }
  ]
}
```

  * Start **`json-server` on port 3001** (`http://localhost:3001/persons`).
  * Modify the application to fetch the initial data from the server using the **`axios`** library and complete the fetching with an **`Effect hook`**.

### 2.12: The Phonebook Step 7

  * Fix the application so that newly added numbers are **saved to the backend server** via an HTTP POST request.

### 2.13: The Phonebook Step 8

  * Extract the code that handles communication with the backend (CRUD operations) into its **own module** (e.g., `services/persons.js`).

### 2.14: The Phonebook Step 9

  * Implement functionality to **delete entries** from the phonebook using a dedicated button for each person.
  * Confirm the action using **`window.confirm`**.
  * Deletion is performed by making an **HTTP DELETE request** to the resource's URL (e.g., `localhost:3001/persons/2`).
  * **NB:** Do not use `delete` as a variable name in JavaScript as it is a reserved word.

### 2.15\*: The Phonebook Step 10

  * Change the functionality so that if a number is added for an **already existing user**, the new number will **replace the old one**.
  * Use the **HTTP PUT** method for updating the phone number.
  * The application should ask the user to **confirm the update** action.

### 2.16: Phonebook Step 11

  * Use the improved error message example from Part 2 to show a **notification that lasts for a few seconds** after a successful operation (person added or number changed).

### 2.17\*: Phonebook Step 12

  * Address a concurrency issue: If a person is **deleted in one browser** and then an attempt is made to **change their number in a second browser**, an error will occur.
  * Fix this issue according to the example shown in the **"promise and errors"** section of Part 2.
  * Modify the error handling so that the user is shown a message when the operation does not succeed.
  * Ensure the messages for successful and unsuccessful events **look different**.
  * **Note:** The initial "404" error may still print to the console, but you should not see "Uncaught (in promise) Error".


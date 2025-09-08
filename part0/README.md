
<h1>Exercises 0.1.-0.6.</h1>


<h2>0.1: HTML</h2>
<p>Review the basics of HTML by reading this tutorial from Mozilla: <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">HTML tutorial</a>.</p>
<p>This exercise is not submitted to GitHub, it's enough to just read the tutorial.</p>

<hr>

<h2>0.2: CSS</h2>
<p>Review the basics of CSS by reading this tutorial from Mozilla: <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics">CSS tutorial</a>.</p>
<p>This exercise is not submitted to GitHub, it's enough to just read the tutorial.</p>

<hr>

<h2>0.3: HTML forms</h2>
<p>Learn about the basics of HTML forms by reading Mozilla's tutorial <a href="https://developer.mozilla.org/en-US/docs/Learn/Forms">Your first form</a>.</p>
<p>This exercise is not submitted to GitHub, it's enough to just read the tutorial.</p>

<hr>

<h2>0.4: New note diagram</h2>
<p>In the section <strong>Loading a page containing JavaScript - review</strong>, the chain of events caused by opening the page <a href="https://studies.cs.helsinki.fi/exampleapp/notes">https://studies.cs.helsinki.fi/exampleapp/notes</a> is depicted as a sequence diagram.</p>
<p>The diagram was made as a GitHub Markdown-file using the Mermaid-syntax, as follows:</p>
<pre>
<code>
        sequenceDiagram
        participant browser
        participant server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
        activate server
        server-->>browser: HTML document
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
        activate server
        server-->>browser: the css file
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
        activate server
        server-->>browser: the JavaScript file
        deactivate server

        Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
        activate server
        server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
        deactivate server

        Note right of browser: The browser executes the callback function that renders the notescopy
</code>
</pre>
<p>
    Create a similar diagram depicting the situation where the user creates a new note on the page <a href="https://studies.cs.helsinki.fi/exampleapp/notes">https://studies.cs.helsinki.fi/exampleapp/notes</a> by writing something into the text field and clicking the <strong>Save</strong> button.
</p>
<p>
    If necessary, show operations on the browser 
    or on the server as comments on the diagram.
</p>
<p>
    The diagram does not have to be a sequence diagram. Any sensible way of presenting the events is fine.
</p>
<p>
All necessary information for doing this, and the next two exercises, can be found in the text of this part. The idea of these exercises is to read the text once more and to think through what is going on there. Reading the application code is not necessary, but it is of course possible.
</p>
<p>
    You can do the diagrams with any program, but perhaps the easiest and the best way to do diagrams is the <strong>Mermaid</strong> syntax that is now implemented in GitHub Markdown pages!
</p>
<hr>
<h2>0.5: Single page app diagram</h2>
<p>Create a diagram depicting the situation where the user goes to the single-page app version of the notes app at <a href="https://studies.cs.helsinki.fi/exampleapp/spa">https://studies.cs.helsinki.fi/exampleapp/spa</a>.
</p>
<hr>
<h2>0.6: New note in Single page app diagram</h2>
<p>
Create a diagram depicting the situation where the user creates a new note using the single-page version of the app.
</p>
<p>This was the last exercise, and it's time to push your answers to GitHub and mark the exercises as done in the submission system.</p>

# LAB - Class 26 - 29

## Project: RESTy React App

### Author: Nathan

### Links and Test Objects

- [Deployed on GitHub Pages](https://401-advanced-javascript-nathanrcox.github.io/resty/)
- [Heroku API Auth App](https://nrc-api-server.herokuapp.com/clothes)

```
{"name": "shirt", "brand": "Hermes", "type": "men's"}
```

(Problems getting the post to work included the folowing):
  - data was in the wrong format, without "" around the keys;
  - was trying to stringify an object;
  - didn't have the right request headers;

### Resources

- [Getting headers from a React fetch method](https://medium.com/@stevemillerdotdev/getting-response-headers-with-the-javascript-fetch-api-799c83c6480e)

 <!-- - [ci/cd](http://xyz.com) (GitHub Actions) -->

### Setup

#### Phase 1 (lab 26) User & Developer Stories

- [x] As a user, I expect an easy-to-read and understandable user interface, so that I can use the application intuitively.
- [x] As a user, I want to enter the URL to a REST API and select the REST method to use to access it.
- [x] As a user, I want visual confirmation that my entries and selections are valid, so that I have confidence the application will be able to fetch the API data that I’ve requested.

---

- [x] As a developer, I want to create a visually appealing site with a header, footer, and a large content area.
- [x] As a developer, I want to create a form that asks for a URL.
- [x] As a developer, I want to create buttons that let the user choose from the REST methods of get, post, put, and delete.
- [x] When the form is filled out and the button is clicked, I want to display the URL and the method chosen.

#### Phase 2 (lab 27) User & Developer Stories

- [x] As a user, I want to enter the URL to an API and issue a GET request so that I can retrieve it’s data.
- [x] As a user, I want to see the results returned from an API request in my browser in a readable format.

#### Phase 3 (lab 28) User & Developer Stories

- [x] As a user, I want to be able to use all four REST methods, so that I can do more than just get data.
  - [x] get all and get one
  - [x] delete
  - [x] post
  - [x] put
- [x] As a user, I want a simple list of all previous queries I’ve run, so that I can easily see which queries I’ve run before.
- [ ] As a user, I want to click on an old query and have my selections appear in the form for me, so I don’t have to re-type them.
- [ ] Stretch Goal: As a user, I want to see a “loading” indicator while RESTy is fetching data so that I know it’s working on my request.

#### Phasee 4 (lab 29) Routing: User & Developer Stories

- [ ] As a user, I want to see all of my previous queries as a separate page so that I can browse them in greater detail.
- [ ] As a user, I would like to view a separate “Help” page so I can learn how the application works.

---

- Header

  - [ ] Add a menu bar to the header.
  - A link labeled “Home” that links to ‘/’ and shows the search form/results page.
  - [ ] A link labeled “History” that links to ‘/history’ and loads the history page.
  - [ ] A link labeled “Help” that links to ‘/help’ and loads the about us page.

- Homepage

  - [ ] Add a simple history list to the left side of the application.
  - [ ] List all previous queries, showing the method and the URL.
  - [ ] When a user clicks a previous query, populate the RESTy forms with the query information.
  - [ ] Completely hide the output area (Headers & Results) when there are none to display.
  - [ ] Display any fetch/load errors in place of the results area, if they occur.
  - [ ] Add a “Loading” indicator while fetching
  - [ ] When the user clicks the “Go!” button, show a loading icon on the page.
  - [ ] When the fetching of results is complete, remove the loading icon and show the results.

- History Page

  - [ ] Maintain a list of every unique and successful API call the user has made.
  - [ ] Show a list of ever previous API call.
  - [ ] Clicking on an entry shows the full details of that query in a separate section on the page.
    - [ ] URL, Method, Body
    - [ ] Optionally, you can store other metadata about the query (time ran, bytes returned, etc) to show your users
  - [ ] Show a button labeled “Re-Run” that would execute that API call again and shows the home page with the form pre-filled

- Help Page

  - [ ] Display static content detailing how a user should use the REST-y application.

#### `.env` requirements (where applicable)

<!-- i.e.

- `PORT` - Port Number
- `MONGODB_URI` - URL to the running mongo instance/db -->

#### How to initialize/run your application (where applicable)

`npm start`

#### How to use your library (where applicable)

### Tests

- To run tests, type npm test in the command line from the root directory.
- Any tests of note?
- Describe any tests that you did not complete, skipped, etc.:

### UML

![UML](./assets/lab26-UML.png)
![UML Lab 27](./assets/lab27-UML.png)

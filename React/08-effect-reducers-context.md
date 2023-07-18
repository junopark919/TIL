# Advanced: Effect, Reducers and Context

## 1. Working with Side Effects

### What is an Effect(Side Effect)?

- Main job: Render UI & React to user input
  - Evaluate & render JSX
  - Manage State & props
  - React to (user) events & input
  - Re-evaluate component upon state & prop changes
- This all is 'baked into' React via the 'tools' and features covered in this course (i.e. useState() hook, props, etc.)

<br>

- Side Effects: Anything else
  - Store data in browser storage
  - Send http request to back-end servers
  - Set & manage timers
- These tasks must happen outside of the normal component evaluation and render cycle - especially since they might block/delay rendering(e.g. Http requests)

<br>

### Handling Side Effect with the useEffect() Hook

```javascript
useEffect(() => { ... }, [ dependencies ]);
```

- A function that should be executed **after** every component evaluation **if** the specified dependencies changed.
  - Your side effect code goes into this function.
- Dependencies of this effect - the function only runs if the dependencies changed.
  - Specify your dependencies of your function here.

<br>

### Using the useEffect() Hook

- You lose all the data after reload.
- You need to store data in the local storage of the browser.
- `localStorage.setItem(key(string), value(string))`
- You can check this data on 'DevTool > Application > LocalStorage'

```javascript
const [isLoggedIn, setIsLoggedIn] = useState(false);

const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

if (storedUserLoggedInInformation === '1') {
  setIsLoggedIn(true);
}

const loginHandler = (email, password) => {
  localStorage.setItem('isLoggedIn', '1');
  setIsLoggedIn(true);
};
```

- But this component function re-executes infinitely.
- That is why useEffect() hook is needed here.
- It will not run after every component evaluation, but only if the dependencies changed.

### useEffect()

```javascript
useEffect(() => {
  const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

  if (storedUserLoggedInInformation === '1') {
    setIsLoggedIn(true);
  }
}, []);
```

#### Logout

```javascript
const logoutHandler = () => {
  localStorage.removeItem('isLoggedIn');
  setIsLoggedIn(false);
};
```

## 2. Managing More Complex State with Reducers

<br>

## 3. Managing App-Wide or Component-Wide State with Context

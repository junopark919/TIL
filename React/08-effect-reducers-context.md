# Advanced: Effect, Reducers and Context

## 1. Working with Side Effects

### 1. What is an Effect(Side Effect)?

#### Main job: Render UI and react to user input

- Evaluate and render JSX
- Manage State and props
- React to (user) events and input
- Re-evaluate component upon state and prop changes

This all is 'baked into' React via the 'tools' and features covered in this course (i.e. useState() hook, props, etc.)

#### Side Effects: Anything else

- Store data in browser storage
- Send http request to back-end servers
- Set and manage timers

These tasks must happen outside of the normal component evaluation and render cycle - especially since they might block/delay rendering (e.g. Http requests)

<br>

### 2. Handling Side Effect with the useEffect() Hook

```javascript
useEffect(() => { ... }, [ dependencies ]);
```

- A function that should be executed **after** every component evaluation **if** the specified dependencies changed.
  - Your side effect code goes into this function.
- Dependencies of this effect - the function only runs if the dependencies changed.
  - Specify your dependencies of your function here.

<br>

### 3. Using the useEffect() Hook

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

#### useEffect()

```javascript
useEffect(() => {
  const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

  if (storedUserLoggedInInformation === '1') {
    setIsLoggedIn(true);
  }
}, []);
```

##### Logout

```javascript
const logoutHandler = () => {
  localStorage.removeItem('isLoggedIn');
  setIsLoggedIn(false);
};
```

<br>

### 4. What to Add & Not to Add as Dependencies

- You don't need to add state updating functions.
- You don't need to add 'built-in' APIs or functions.
- You don't need to add variables or functions defined **outside** of your components.

```javascript
import { useEffect, useState } from 'react';

let myTimer;

const MyComponent = (props) => {
  const [timerIsActive, setTimerIsActive] = useState(false);

  const { timerDuration } = props;

  useEffect(() => {
    if (!timerIsActive) {
      setTimerIsActive(true);
      myTimer = setTimeout(() => {
        setTimerIsActive(false);
      }, timerDuration);
    }
  }, [timerIsActive, timerDuration]);
};
```

- setTimerIsActive(function)
- myTimer(out of component)
- setTimeout(built-in API)

### 5. Using the useEffect Cleanup Function

#### Debouncing

- Once the user made a pause during typing, works useEffect();

```javascript
useEffect(() => {
  const identifier = setTimeout(() => {
    console.log('Checking from validity!');
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
    );
  }, 500);

  return () => {
    console.log('CLEANUP');
    clearTimeout(identifier);
  };
}, [enteredEmail, enteredPassword]);
```

### 6. Summary

```javascript
useEffect(() => {
  console.log('EFFECT RUNNING');

  return () => {
    console.log('EFFECT CLEANING');
  };
}, [enteredPassword]);
```

- useEffect() runs for every time the component funtions reruns.
- It runs **after** every component render cycle including the first time the component was mounted.
- Once we add an empty array(dependency), it only executes for the first time the component was mounted and rendered, but **not after and for any subsequent render cycle**.
- We also have the cleanup function, which we can return.
- The cleanup function runs **before** this state function as a whole runs, but **not before the first time it runs**.

## 2. Managing More Complex State with Reducers

<br>

## 3. Managing App-Wide or Component-Wide State with Context

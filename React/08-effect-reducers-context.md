# Advanced: Effect, Reducers and Context

## 1. Working with Side Effects

### 1. What is an Effect(Side Effect)?

Main job: Render UI and react to user input

- Evaluate and render JSX
- Manage State and props
- React to (user) events and input
- Re-evaluate component upon state and prop changes

This all is 'baked into' React via the 'tools' and features covered in this course (i.e. useState() hook, props, etc.)

Side Effects: Anything else

- Store data in browser storage
- Send http request to back-end servers
- Set and manage timers

These tasks must happen **outside of the normal component evaluation and render cycle** ⏤ especially since they might block/delay rendering. (e.g. Http requests)

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

- You lose all the data after reload and you need to store data in the local storage of the browser.

  ```javascript
  localStorage.setItem(key, value); // Key and value both are string.
  ```

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

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  ```

- But this component function re-executes infinitely and that is why useEffect() hook is needed here.

  ```javascript
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);
  ```

<br>

### 4. What to Add & Not to Add as Dependencies

- You don't need to add **state updating functions**, **built-in** APIs or functions, variables or functions defined **outside of your components**.

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

<br>

### 5. Using the useEffect Cleanup Function

#### Debouncing

- This function execution is fairly fast and that might be a problem.
- Instead, you can wait for a pause of a certain time duration until you collect enough data.

```javascript
useEffect(() => {
  const identifier = setTimeout(() => {
    console.log('Checking from validity!');
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
    );
  }, 500);

  // cleanup function
  // cleanup function runs before every new side effect(execept for the very first time) function execution and before the component is removed.
  return () => {
    console.log('CLEANUP');
    clearTimeout(identifier);
  };
}, [enteredEmail, enteredPassword]);
```

<br>

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
- It runs **after every component render cycle** including the first time the component was mounted.
- Once we add an empty array(dependency), it only executes for the first time the component was mounted and rendered, but **not after and for any subsequent render cycle**.
- We also have the cleanup function, which we can return.
- The cleanup function runs **before this state function as a whole runs**, but **not before the first time it runs**.

<br>

## 2. Managing More Complex State with Reducers

### 1. What is useReducers and Reducers?

- For more complex state ⏤ multiple states, multiple ways of changing or dependencies.
- useState() often becomes hard or error-prone to use in such scenarios.
- useReducer() can be a replacement for useState() ⏤ more powerful state management.

<br>

### 2. Using the useReducer() Hook

```javascript
const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
```

- **state**: The state snapshot used in the component re-render/re-evaluation cycle.
- **dispatchFn**: A function that can be used to dispatch a new action. (i.e. trigger an update of the state)
- **reducerFn**:

  ```javascript
  (prevState, action) => newState;
  ```

  A function that is triggered automatically once an action is dispatched. (via dispatchFn()) ⏤ it receives the latest state snapshot and should return the new, updated state.

- **initialState**: The initial state.
- **initFn**: A function to set the initial state programmatically.

<br>

### 3. useState() vs useReducer()

- When using useState() becomes cumbersome or you're getting a lot of bugs/unintended behaviors.
- useState()
  - The main state management **tool**.
  - It's for independent pieces of state/data.
  - State updates are easy and limited to a few kinds of updates.
- useReducer()
  - You need **more power**.
  - You have related pieces of state/data.
  - You have more complex state updates.

```javascript
// Initiate useReducer function
import { React, useReducer } from 'react';

const Login = (props) => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });
};
```

```javascript
// Receives the latest state and return the new, updated state
const emailChangeHandler = (event) => {
  dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
};

const passwordChangeHandler = (event) => {
  dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
};

const validateEmailHandler = (event) => {
  dispatchEmail({ type: 'INPUT_BLUR' });
};

const validatePasswordHandler = (event) => {
  dispatchPassword({ type: 'INPUT_BLUR' });
};
```

```javascript
// It can be defined out of userReducer() function, because any items here are not related to it.
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'USER_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  // state.value can be the latest state
  return { value: state.value, isValid: state.value.includes('@') };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'USER_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: state.value, isValid: state.value.trim().length > 6 };
};
```

<br>

## 3. Managing App-Wide or Component-Wide State with Context

- Making a context file in `src/store/auth-context.js`

```javascript
const AuthContext = React.createContext({
  isLoggedIn: false,
});
```

- Providing the context to all the components(including the dependant components).

```javascript
import AuthContext from './store/auth-context';

// Taking states from context through value and update dafult value.
<AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
  ...
</AuthContext.Provider>;
```

- Listening to Context to get the needed state directly.

```javascript
<AuthContext.Consumer>
  {(ctx) => {
    return (
      <nav className={classes.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href='/'>Users</a>
            </li>
          )}
        ...
      </nav>
    );
  }}
</AuthContext.Consumer>
```

- More simpler way

```javascript
import { useContext } from 'react';

const ctx = useContext(AuthContext);
```

### Context Limitations

- React context is not optimized for high frequency changes.
- Shouldn't be used to replace all component communications and props.

### Rules of Hooks

- Only call React hooks in React functions.
  - React component functions
  - Custom hooks
- Only call React hooks at the top level.
  - Don't call them in nested functions.
  - Don't call them in any block statements.
- extra, unofficial rule for useEffect(): Always add everything you refer to inside of useEffect() as a dependency.

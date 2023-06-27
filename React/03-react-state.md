# Making Apps Interactive & Reactive

- Handling events
- Updating the UI & working with "state"
- A closer look at components & state

<br>

## 1. Event Listener and Handler

- Add an event listener to a React element(on + the event name prop such as onClick)

```javascript
const clickHandler = () => {
  console.log('Clicked!');
};

<button onClick={clickHandler}>Change title</button>;
```

<br>

## 2. State

- Component functions need to be called again for data changes, but React never repeats anymore after initial rendering.
- State allows us to define values as state where changes to these values should reflect in the component function being called again.

```javascript
import { useState } from 'react';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  // title(current state value) / setTitle(a function for updating title)

  const clickHandler = () => {
    setTitle('Updated!');
  };
};
```

- **State is separated on a per component instance basis** — that is why we use 'const' and call useState function to change the value.

<br>

### - In Case of Multiple States

```javascript
const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('');

const titleChangeHandler = (event) => {
  setEnteredTitle(event.target.value);
};
```

- Alternative approach for multiple states 1

```javascript
const [userInput, setUserInput] = useState({
  enteredTitle: '',
  enteredAmount: '',
  enteredDate: '',
});

const titleChangeHandler = (event) => {
  setUserInput({
    ...userInput, // Without overwriting, the other data will get lost.
    enteredTitle: event.target.value,
  });
};
```

- Alternative approach for multiple states 2 (This is safer)

```javascript
const titleChangeHandler = (event) => {
  setUserInput((prevState) => {
    return { ...prevState, enteredTitle: event.target.value };
    // prevState: guarantee this state snapshot will always be the latest one in scheduled time.
  });
};
```

- Alternative approach for mutiple handlers: using one shared handler function

```javascript
const inputChangeHandler = (identifier, value) => {
  if (identifier === 'title') {
    setEnteredTitle(value);
  } else if (identifier === 'date') {
    setEnteredDate(value);
  } else {
    setEnteredAmount(value);
  }
};

<input
  type='text'
  onChange={(event) => inputChangeHandler('title', event.target.value)}
/>;
```

<br>

## 4. Submission

```javascript
const submitHandler = (event) => {
  event.preventDefault(); // Prevent the default of the server request being sent (not reload anymore)

  const expenseData = {
    title: enteredTitle,
    amount: enteredAmount,
    date: new Date(enteredDate),
  };
};

// in form
<form onSubmit={submitHandler}></form>;
```

<br>

## 5. Two-Way Binding

- Not only listen to changes in the input to update your state, but also feed the state back into the input.
- You can both gather user input and change it.

```javascript
// in submit handler function
const submitHandler = (event) => {
  setEnteredTitle('');
  setEnteredAmount('');
  setEnteredDate('');
};

// on input elements
<input
  value={enteredTitle}
  onChange={(event) => inputChangeHandler('title', event.target.value)}
/>;
```

<br>

## 6. Child-to-Parent Component Communication (Bottom-up)

- Pass the data in the opposite direction of _props_.
- Create our own event props and expect functions as values.
- Pass data to that function as a parameter.

```javascript
// Parent component
// in new expense component(upper component)
const saveExpenseDataHandler = (enteredExpenseData) => {
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString(), // It's temporary
  };
};

// on expense form component element
<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />;
```

```javascript
// Child component
// in submit handler component
props.onSaveExpenseData(expenseData);
```

<br>

## 7. Lifting State Up

- No direct connection between sibling components.
- Only communicate from child to parent and then parent to child: _lifting state up → passing data via props_.
- Lift it up just as high as necessary in your component tree until you have a component which has both access to the components.

## 8. Derived and Computed State

- Depnding on the same source, one state would be enough.
- Instead of being managed as a standalone state which updates whenever the other state updates.
- When the state is updated, the component function will re-execute again anyway.

```javascript
let filterInfoText = '2019, 2021 & 2022';

if (filteredYear === '2019') {
  filterInfoText = '2020, 2021 & 2022';
} else if (filteredYear === '2021') {
  filterInfoText = '2019, 2020 & 2022';
} else {
  filterInfoText = '2019, 2020 & 2021';
}

<p>Data for year {filterInfoText} is hidden.</p>;
```

<br>

## 9. Controlled vs Uncontrolled / Stateless vs Stateful Components

- Controlled/Stateful
  - Manage state
  - Pass the data through props
- Uncontrolled/Stateless
  - Presentational/dumb component
  - Just to output some data

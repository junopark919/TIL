# Making Apps Interactive & Reactive

- Handling events
- Updating the UI & working with "state"
- A closer look at components & state

<br>

## 1. Event Listener and Handler

- Add an event listener to a React element(on + the event name prop such as onClick)

```JavaScript
<button
  onClick={() => {
    console.log('Clicked!');
  }}
>
  Change title
</button>
```

```javascript
const clickHandler = () => {
  console.log('Clicked!!!!!');
};

...

<button onClick={clickHandler}>Change title</button>;
```

<br>

## 2. State

- Component functions need to be called again for data changes.
- React never repeats anymore after initial rendering.
- **State** allows us to define values as state where changes to these values should reflect in the component function being called again.
- `useState(title, setTitle)`
  - `title`: current state value
  - `setTitle`: a function for updating `title`

```javascript
import { useState } from 'react';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');
  };

  ...
};
```

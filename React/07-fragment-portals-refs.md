# Fragments, Portals & Refs

## JSX Limitations & Fragments

- You can't return more than one 'root' JSX element(You also can't store more than one 'root' JSX element in a variable).
- In bigger apps, you can easily end up with tons of unnecessary <div>s(or other elements) which add no semantic meaning or structure to the page but are only there because of React's JSX requirement.

  - Wrapper component

  ```javascript
  // components/Helpers/Wrapper.js
  const Wrapper = (props) => {
    return props.children;
  };
  ```

  ```javaScript
  return (
    <Wrapper>
      <h2>Hi there!</h2>
      <p>This does not work :-(</p>
    </Wrapper>
  )
  ```

  - Fragments

  ```javaScript
  return (
    <React.Fragment>
      <h2>Hi there!</h2>
      <p>This does not work :-(</p>
    </React.Fragment>
  )
  ```

  ```javaScript
  import { Fragment } from 'react';

  return (
  <Fragment>
    <h2>Hi there!</h2>
    <p>This does not work :-(</p>
  </Fragment>
  )
  ```

  ```javaScript
  return (
    <>
      <h2>Hi there!</h2>
      <p>This does not work :-(</p>
    </>
  )
  ```

  - It's an empty wrapper component: It doesn't render any real HTML element to the DOM. But it fulfills React's JSX requirement.

<br>

## Getting a Cleaner DOM with Portals

- Semantically and from a 'clean HTML structure' perspective, having this nested modal isn't ideal. It is an overlay to the entire page after all (that's similar for side-drawers, other dialogs, etc.)

```javascript
return (
  <React.Fragment>
    <MyModal />
    <MyInputForm />
  </React.Fragment>
);
```

```javascript
return (
  <React.Fragment>
    <h2>Some other content...</h2>
    <div class="my-modal">
      <h2>A Modal Title!</h2>
    </div>
    <form>
      <label>Username</label>
      <input type="text" />
    </form>
  </React.Fragment>
);
```

```javascript
return (
  <React.Fragment>
    <div class="my-modal">
      <h2>A Modal Title!</h2>
    </div>
    <section>
      <h2>Some other content...</h2>
      <form>
        <label>Username</label>
        <input type="text" />
      </form>
    </section>
  </React.Fragment>
);
```

- It's a bit like styling a `<div>` like a `<button>` and adding an event listener to it: It'll work, but it's not a good practice.

```javascript
<div onClick={clickHandler}>Click me, I'm a bad button</div>
```

```javascript
<div id="backdrop-root"></div>
<div id="overlay-root"></div>
<div id="root"></div>
```

```javascript
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return <Card className={styles.modal}>...</Card>;
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReatDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReatDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};
```

<br>

## Working with Refs

- You can get access to other DOM elements and work with them.
- UseState update out states on every keystroke: rebundant.
- You can only read a value quickly, but never change anything.

```javascript
import { useRef } from 'react';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const userHandler = (props) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    ...
  }

  return (
    <input
      id="name"
      type="text"
      value={enteredName}
      onChange={nameChangeHandler}
      ref={nameInputRef}
    />
    <input
      id="age"
      type="text"
      value={enteredAge}
      onChange={ageChangeHandler}
      ref={ageInputRef}
    />
  );
};
```

### Controlled vs Uncontrolled Components

- If we access values with a ref, these input components would now be uncontrolled ones.
- Because they are internal state, only reflect values in them. Not feed data back into the input.

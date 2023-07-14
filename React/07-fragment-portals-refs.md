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
- It's a bt like styling a `<div>` like a `<button>` and adding an event listener to it: It'll work, but it's not a good practice.

```javascript
<div onClick={clickHandler}>Click me, I'm a bad button</div>
```

<br>

## Working with Refs

```

```

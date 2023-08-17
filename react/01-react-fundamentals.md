# REACT FUNDAMENTALS

## 1. Introduction to React

### 1. The Rise of Single-Page Applications(SPA)

- Server-side rendering → Client-side rendering
- Handling data + displaying data in a UI → UI needs to stay in sync with data → Hard problem to solve with vanilla JavaScript
  - Requires lots of direct DOM manipulation and traversing(imperative) — spaghetti code
  - Data(state) is usually stored in the DOM, shared across entire app — hard to reason + bugs

### 2. Why Do Front-End Frameworks Exist?

1. Front-end frameworks solve this problem and take hard work away from developers.
2. They enforce a correct way of structuring and writing code(therefore contributing to solving the problem of spaghetti code)
3. They give developers and teams a consistent way of building front-end applications.

### 3. What is React?

- JavaScript library for building user interfaces.

  #### Component-Based

  - Components are the building blocks of UI in React.
  - Build complex UIs by building and combining multiple components.

  #### Declarative

  - Describe how components look like and how they work using a declarative syntax called JSX.
  - Declarative: telling React what a component should look like, based on current data/state.
  - React is abstraction away from DOM: never touch the DOM.
  - JSX: a syntax that combines HTML, CSS, JS as well as referencing other components.

  #### State-Driven

  - React reacts to state changes by re-rendering the UI.

  #### JavaScript Library

  - React is only the 'view' layer. We need to pick multiple external libraries to build a complete application.

<br />

## 2. Components, Props and JSX

## 3. Interactive Components

### 1. What is State?

- Data that a component can hold over time, necessary for information that it needs to remember throughout the app's lifecycle.
- Component's memory
- "State variable" / "piece of state": A single variable in a component (component state)
- Updating component state triggers React to re-render the component

∵ Allows developers to:

- update the component's view (by re-rendering it)
- persist local variables between renders

```javascript
function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }
}
```

### 2. The Mechanics of State

- We don't do direct DOM manipulations
  (because React is declarative)
- How is a component view updated then?
- In React, a view is updated by re-rendering the component
  (Important React principle)
- A component is re-rendered when its state is updated

```
State → render/re-render(State is preserved throughout re-renders) → Updated view
```

∵ React is called 'React' because it reacts to state changes by re-rendering the UI

### Controlled Elements

- An input element that is completely synchronized with state.

### State vs. Props

- State
  - **Internal** data, owned by component
  - Component memory
  - Can be updated by the component itself
  - Updating state causes component to re-render
  - Used to make components interactive
- Props
  - **External** data, owned by parent component
  - Similar to function parameters
  - Read-only
  - **Receiving new props causes component to re-render.** Usually when the parent's state has been updated.

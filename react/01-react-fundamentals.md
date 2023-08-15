# REACT FUNDAMENTALS

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

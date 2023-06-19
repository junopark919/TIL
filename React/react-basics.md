# What is JSX?

- JSX = JavaScript XML(eXtensible Markup Language)
- developer friendly code(Syntactic sugar) → transformed behind the scenes → run in the browser

<br>

# Building a Component

- One **file** per **component**
- Build a component tree from App.js(root component)
- `<App />` rendered into single HTML page
- Start with a capital character in one word in component name
- Need **one root element** per return statement

<br>

# Props

- The attributes of your custom HTML elements(components)
- Components can't just use data stored in other components
- Need to pass data via **props** from one component to another
- Allows to make your components reusable: hard code → dynamic code

<br>

## Ways of Props

- parent component

```
> Example 1
<ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date} />

> Example 2
<ExpenseItem expense={expense[0]}>
```

- child component

```
> Example 1
function ExpenseItem(props) {
  ...
  {props.date}
  {props.title}
  {props.amount}
  ...
}

> Example 2: object destructuring
function ExpenseItem({data, title, amount}) {
  ...
  {date}
  {title}
  {amount}
  ...
}
```

<br>

# Splitting Components

- Always keep your component small and focused — more manageable
- Split one bigger component to multiple components and files
- Pass data from a component to a direct child component

<br>

# Composition(children props)

- The approach of building a user interface from smaller building blocks
- For HTML structure/style duplication
- Called as a component card
- custom components as a wrapper

```
function Card(props) {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
}
```

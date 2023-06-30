# Rendering Content

## 1. Rendering List

- `map()` method creates a new array with each element being the result of the callback function.
- React simply renders these JSX elements by side by side.

```javascript
{
  props.items.map((expense) => (
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
}
```

<br>

## 2. Using Stateful List

```javascript
const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

const addExpenseHandler = (expense) => {
  setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses];
  });
};
```

<br>

## 3. Understanding "Keys"

- When you add a new item, React renders a new item as the last item and updates all items and replace their content: it can leads to bugs.
- Key is a unique id for every elements and it can help React identify the individual items.

```javascript
<ExpenseItem
  key={expense.id}
  title={expense.title}
  amount={expense.amount}
  date={expense.date}
/>
```

<br>

## Conditional Content

- Render different output under different conditions.

```javascript
{
  filteredExpenses.length === 0 ? (
    <p>No expenses found.}</p>
  ) : (
    filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  );
}
```

- '&&' trick

```javascript
{
  filteredExpenses.length === 0 && <p>No expenses found.</p>;
}
{
  filteredExpenses.length > 0 &&
    filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
}
```

- Extra variable logic

```javascript
let expensesContent = <p>No expenses found.</p>;

if (filteredExpenses.length > 0) {
  expensesContent = filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
}

{
  expensesContent;
}
```

## Adding Styles

```javascript
<div className='chart-bar__fill' style={{ height: barFillHeight }}></div>
<div className='chart-bar__fill' style={{ 'background-color': 'red' }}></div>
<div className='chart-bar__fill' style={{ backgroundColor: 'red' }}></div>
```

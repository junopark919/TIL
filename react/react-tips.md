# Tips for React

- When you want to change the day of the month.

```javascript
const date = new Date();
date.setDate(date.getDate() + count);
```

- It works as 'if else' statement I can't use inside return in React.

```javascript
<span>
  {count === 0
    ? 'Today is '
    : count > 0
    ? `${count} days from today is `
    : `${Math.abs(count)} days ago was `}
</span>
```

- When you make a select option automatically.
- `_` is value and `i` is index from `(_, i) => i + 1`. When you don't use value here, `_` can be a identifier for it.

```javascript
<select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
  {' '}
  {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
    <option value={num} key={num}>
      {num}
    </option>
  ))}
</select>
```

# Tips for React

When you want to change the day of the month.

```javascript
const date = new Date();
date.setDate(date.getDate() + count);
```

It works as 'if else' statement I can't use inside return in React.

```javascript
<span>
  {count === 0
    ? 'Today is '
    : count > 0
    ? `${count} days from today is `
    : `${Math.abs(count)} days ago was `}
</span>
```

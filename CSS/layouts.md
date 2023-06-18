# Flexbox

## What is flexbox?

- Building 1-dimensional layouts
- Automatically divided
- Align items to one another
- Vertical centering and equal-height columns
- Replacing for floats

<br>

## Terminology

- flex container
- flex items
- main axis
- cross axis

<br>

| Flex container    | Definition                                                | Flex items    | Definition                                              |
| ----------------- | --------------------------------------------------------- | ------------- | ------------------------------------------------------- |
| `gap`             | create space between items                                | `align-self`  | overwrite align-items for individual flex items         |
| `justify-content` | align items along main axis                               | `flex-grow`   | allow an element to grow                                |
| `align-items`     | align items along cross axis                              | `flex-shrink` | allow an element to shrink                              |
| `flex-direction`  | define which is the main axis                             | `flex-basis`  | define an item's width                                  |
| `flex-wrap`       | allow items to wrap into a new line if they are too large | `flex`        | shorthand for flex-grow, -shrink, -basis                |
| `align-content`   | only applies when there are multiple lines                | `order`       | controls of items -1 makes items first, 1 makes it last |

<br>

# CSS grid

## What is CSS grid?

- Building 2-dimensional layouts
- Divide a container element into rows and columns
- less nested HTML and easier-to-read CSS
- Not meant to replace flexbox

<br>

## Terminology

- grid container
  - grid container
  - grid items
  - column axis
  - row axis
- grid items
  - grid lines
  - grid cells
  - grid track(row/column)
  - gutters(gaps)

<br>

| Flex container                                    | Definition                               | Flex items                       | Definition                                                    |
| ------------------------------------------------- | ---------------------------------------- | -------------------------------- | ------------------------------------------------------------- |
| `grid-template-rows` <br> `grid-template-columns` | establish the grid row and column tracks | `grid-column` <br> `grid-row`    | place a grid item into a specific cell, based on line numbers |
| `row-gap` <br> `column-gap`                       | create empty space between tracks        | `justify-self` <br> `align-self` | align items inside rows/columns for single items              |
| `justify-items` <br> `align-items`                | align items inside rows/columns          |                                  |
| `justify-content` <br> `align-content`            | align entire grid inside grid container  |

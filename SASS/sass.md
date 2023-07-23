# SASS and NPM

## 1. What is SASS?

### 1. What is SASS?

- SASS is a CSS preprocessor, an extension of CSS that adds power and elegance to the basic language.
- SASS source code → SASS compiler → compiled CSS code

<br>

### 2. Main SASS Features

- Variables: for reusable values such as colors, font-sizes, spacing, etc.
- Nesting: to nest selectors inside of one another, allowing us to write less code.
- Operators: for mathematical operations right inside of CSS.
- Partials and imports: to write CSS in different files and importing them all into one single file.
- Mixiins: to write reusable pieces of CSS code.
- Functions: similar to mixins, with the difference that they produce a value that can be used.
- Extends: to make different selectors inherit declarations that are common to all of them.
- Control directives: for writing complex code using conditionals and loops.

<br>

## 2. Variables, Nesting, Mixins, Extends and Functions

### 1. Variable

```scss
$color-primary: #f9ed69;
$color-secondary: #f08a5d;
$color-tertiary: #b83b5e;
$color-text-dark: #333;
$color-text-light: #eee;

$width-button: 150px;

nav {
  background-color: $color-primary;

  &::after {
    content: '';
    clear: both;
    display: table;
  }
}
```

## 2. Nesting

```scss
.nav {
  list-style: none;
  float: left;

  li {
    display: inline-block;
    margin-left: 30px;

    &:first-child {
      margin: 0;
    }

    a:link {
      text-decoration: none;
      text-transform: uppercase;
      color: $color-text-dark;
    }
  }
}

.buttons {
  float: right;
}

.btn-main:link,
.btn-hot:link {
  padding: 10px;
  display: inline-block;
  text-align: center;
  border-radius: 100px;
  text-decoration: none;
  text-transform: uppercase;
  width: $width-button;
  color: $color-text-light;
}

.btn-main {
  &:link {
    background-color: $color-secondary;
  }

  &:hover {
    background-color: darken($color-secondary, 15%);
  }
}

.btn-hot {
  &:link {
    background-color: $color-tertiary;
  }

  &:hover {
    background-color: darken($color-tertiary, 10%);
  }
}
```

<br>

## 3. Mixins

```scss
@mixin clearfix {
  &::after {
    content: '';
    clear: both;
    display: table;
  }
}

@mixin style-link-text($col) {
  text-decoration: none;
  text-transform: uppercase;
  color: $col;
}

.nav {
  @include clearfix;

  li {
    a:link {
      @include style-link-text($color-text-dark);
    }
  }
}

.btn-main:link,
.btn-hot:link {
  @include style-link-text($color-text-light);
}
```

## 4. Functions

```scss
@function divide($a, $b) {
  @return $a / $b;
}

nav {
  margin: divide(60, 2) * 1px;
}
```

## 5. Extends

```scss
%btn-placeholder {
  padding: 10px;
  display: inline-block;
  text-align: center;
  border-radius: 100px;
  width: $width-button;
  @include style-link-text($color-text-light);
}

.btn-main {
  &:link {
    @extend %btn-placeholder;
    background-color: $color-secondary;
  }

  &:hover {
    background-color: darken($color-secondary, 15%);
  }
}

.btn-hot {
  &:link {
    @extend %btn-placeholder;
    background-color: $color-tertiary;
  }

  &:hover {
    background-color: lighten($color-tertiary, 10%);
  }
}
```

<br>

## 4. NPM and the Node Ecosystem

- NodeJS: Allows developers to write and run JavaScript applicatios on the server. Developers started using node.js to also write tools to help them with local web development.
- NPM: NPM is a simple command line interface that allows developers to install and manage packages on their local computers. There are all kinds of open-source tools, libraries and frameworks needed for modern development. Modern web development could simply not exist without a package manager.

<br>

## 5. NPM Packages: Install SASS

- Initiate npm packages in a project.

```bash
npm init
```

- Install SASS in a project.
  - `--save-dev`: Install it as development dependencies to help building our project. (Only for a helper and tool)
  - `--save`: Install it as dependencies to build our project with the functions that it offers you.

```bash
npm install node-sass --save-dev
npm install jquery --save
```

- Uninstall dependencies

```bash
npm uninstall jquery --save
```

<br>

## 6. NPM Scripts: Write and Compile SASS

- You can use your own command line you defined on in scripts on 'package.json'.

```json
"scripts": {
  "compile:sass": "node-sass sass/main.scss css.style -w" // compile scss file to css file + watch option
}
```

```bash
npm run compile:sass
```

- Or you can keep watching the result on live-server without compile.

```bash
npm install live-server -g
live-server
```

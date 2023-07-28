# Bootstrap

## 1. Introduction

### 1. What is Boostrap?

- Open-source front-end CSS/UI framework for developing responsive websites and user interfaces.
- Provides pre-existing components like buttons, alerts, navigation bars and more.

### 2. Advantages of Bootstrap

- Responsive design: a mobile-first framework
- Rapid development: save time by not writing near as much CSS
- Prototyping: great for getting front-ends up quickly
- Customizable: use SASS to compile your own version of boostrap.css
- JavaScript plugins: modals, carousels, popovers and more
- Documentation: find working examples of everything
- Cross browser compatibility: works on all browsers and OS

### 3. Is Bootstrap Dead?

- Bootstrap is heavily used in all areas including enterprise, startsups and freelancers/agencies.
- It is the alternative to Tailwind CSS.
- Most people that say Bootstrap (or anything for that matter) is dead are influencers and people that never worked in the real world.
- Some large companies that use Bootstrap are Twitter, Spotify, LinkedIn, Udemy, Upwork and many more.

### 4. How to Use Bootstrap

- CDN(Content Delivery Network)
- Download Files
- Compiling SASS
  - You can compile the Bootstrap SASS files on your own and customize the CSS that is built from them.
  - You can download the SASS files or install using a package manager like NPM.

<br>

## 2. Bootstrap Fundamentals

### 1. Container

- Classes that is used to wrap and contain the content of your web page with either a fixed or responsive width.
- container / container-sm / container-md / container-lg / container-lg / container-xl / container-xxl / container-fluid(always 100%)

### 2. Typography

- Heading: h1 / h2 / h3 / h4 / h5 / h6
- Display heading: display-1 / display-2 / display-3 / display-4 / display-5 / display-6
- Lead paragraph: lead
- Blockquote: blockquote
- Font weight: fw-bold / fw-bolder / fw-semibold / fw-medium / fw-normal(default) / fw-light / fw-lighter / fst-italic / fst-normal
- Line height: lh-1 / lh-sm / lh-base(default) / lh-lg
- Text transform: text-lowercase / text-uppercase / text-capitalize
- Text alignment: text-start / text-center / text-end / text-sm-end / text-md-end / text-lg-end / text-xl-end

### 3. Display & Position

#### Display

- Display none: d-none
- Display inline: d-inline
- Display block: d-block
- Display inline block: d-inline-block
- Hide on small screen: d-none d-md-block
- Hide on medium screens and up: d-block d-md-none

#### Position

- Position static: position-static
- Position relative: position-relative
- Position absolute: position-absolute
  - Position in absolute: start-0 / end-0 / top-0 /bottom-0
- Position fixed: position-fixed / fixed-top / fixed-bottom

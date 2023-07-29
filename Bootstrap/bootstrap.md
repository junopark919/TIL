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
- .container / .container-sm / .container-md / .container-lg / .container-lg / .container-xl / .container-xxl / .container-fluid(always 100%)

### 2. Typography

#### Heading

- .h1 / .h2 / .h3 / .h4 / .h5 / .h6

#### Display heading

- .display-1 / .display-2 / .display-3 / .display-4 / .display-5 / .display-6

#### Lead paragraph

- .lead

#### Blockquote

- .blockquote

#### Font weight

- .fw-bold / .fw-bolder / .fw-semibold / f.w-medium / .fw-normal(default) / .fw-light / .fw-lighter / .fst-italic / .fst-normal

#### Line height

- .lh-1 / .lh-sm / .lh-base(default) / .lh-lg

#### Text transform

- .text-lowercase / .text-uppercase / .text-capitalize

#### Text alignment

- .text-start / .text-center / .text-end / .text-sm-end / .text-md-end / .text-lg-end / .text-xl-end

<br>

### 3. Display & Position

#### Display

- Display none: .d-none
- Display inline: .d-inline
- Display block: .d-block
- Display inline block: .d-inline-block
- Hide on small screen: .d-none .d-md-block
- Hide on medium screens and up: .d-block .d-md-none

#### Position

- Position static: .position-static
- Position relative: .position-relative
- Position absolute: .position-absolute
  - Position in absolute: .start-0 / .end-0 / .top-0 /.bottom-0
- Position fixed: .position-fixed / .fixed-top / .fixed-bottom

<br>

### 4. Background & Text Colors

#### Background Colors

- .bg-primary / .bg-secondary / .bg-success / .bg-danger / .bg-warning / .bg-info / .bg-light / .bg-dark / .bg-black / .bg-white / .bg-transparent

#### Text Background Colors

- .text-bg-primary / .text-bg-secondary / .text-bg-success / .text-bg-danger / .text-bg-warning / .text-bg-info / .text-bg-light / .text-bg-dark / .text-bg-black / .text-bg-white / .text-bg-transparent

#### Text Colors

- .text-primary / .text-secondary / .text-success / .text-danger / .text-warning / .text-info / .text-light / .text-dark / .text-muted / .text-black-50 / .text-white-50

#### Gradients

- .text-bg-\* .bg-gradient

#### Background Opacity

- .bg-opacity-75 / .bg-opacity-50 / .bg-opacity-25 / .bg-opacity-10

#### Text Opacity

- .text-opacity-75 / .text-opacity-50 / .text-opacity-25

#### Link Colors

- .link-primary / .link-secondary / .link-success / .link-danger / .link-warning / .link-info

<br>

### 5. Spacing

- Spacing values
  - 1: 0.25rem
  - 2: 0.5rem
  - 3: 1rem
  - 4: 1.5rem
  - 5: 3rem

#### Margin

- Margin all: .m-1 / .m-2 / .m-3 / .m-4 / .m-5
- Margin top & bottom: .my-1 / .my-2 / .my-3 / .my-4 / .my-5
- Margin left & right: .mx-1 / .mx-2 / .mx-3 / .mx-4 / .mx-5
- Margin top: .mt-1 / .mt-2 / .mt-3 / .mt-4 / .mt-5
- Margin bottom: .mb-1 / .mb-2 / .mb-3 / .mb-4 / .mb-5
- Margin left: .ms-1 / .ms-2 / .ms-3 / .ms-4 / .ms-5
- Margin right: .me-1 / .me-2 / .me-3 / .me-4 / .me-5
- Margin auto: .m-auto / .my-auto / .mx-auto / .ms-auto / .me-auto

#### Padding

- Padding all: .p-1 / .p-2 / .p-3 / .p-4 / .p-5
- Padding top & bottom: .py-1 / .py-2 / .py-3 / .py-4 / .py-5
- Padding left & right: .px-1 / .px-2 / .px-3 / .px-4 / .px-5
- Padding top: .pt-1 / .pt-2 / .pt-3 / .pt-4 / .pt-5
- Padding bottom: .pb-1 / .pb-2 / .pb-3 / .pb-4 / .pb-5
- Padding left: .ps-1 / .ps-2 / .ps-3 / .ps-4 / .ps-5
- Padding right: .pe-1 / .pe-2 / .pe-3 / .pe-4 / .pe-5

#### Stacks

- .vstack .gap-3 (until 100)
- .hstak .gap-3 (until 100)

<br>

### 6. Sizing, Borders & Shadows

#### Sizing

- Width: .w-25 / .w-50 / .w-75 / .w-100 / .w-auto
- Height: .h-25 / .h-50 / .h-75 / .h-100 / .h-auto

### Borders

- Border: .border / .border-top / .border-bottom / .border-start / .border-end
- Border colors: .border-primary / .border-secondary / .border-success / .border-info / .border-warning / .border-danger / .border-light / .border-dark / .border-white
- Border radius: .rounded / .rounded-top / .rounded-bottom / .rounded-start / .rounded-end / .rounded-circle / .rounded-1 / .rounded-2 / .rounded-3 / .rounded-4 / .rounded-5
- Shadows: .shadow-none / .shadow-sm / .shadow / .shadow-lg

<br>

### 7. Breakpoints

##### Default Breakpoints

- Extra small(portrait phones): < 576px
- Small(portrait phones): >= 576px
- Medium(landscape phones): >= 768px
- Large(tablets): >= 992px
- Extra large(desktops): >= 1200px
- Extra extra large(large desktops): >= 1400px

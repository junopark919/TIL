# Responsive Web Design

## How Media Queries Works

- `@media (max-width: 600px)`: <= 600px
- `@media (max-width: 1200px)`: <= 1200px
- outside of any media query: > 1200px

<br>

## How to Select Breakpoints

- Bad strategy: based on popular devices
  - ignore all the other users of the other devices
  - problem for maintaining your code and keeping it up to date in the future
- Good strategy: based on screen width ranges
  - look at the most used width for different categories of devices
  - group them together in some logical way to pick our breakpoints from that
    - phone(300-500px): 600px
    - tablets(600-900px): 900px
    - landscape tablets(900-1100px): 1200px
    - desktop: > 1200px
- Perfect strategy: when the design breaks down

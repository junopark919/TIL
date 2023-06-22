# Responsive Web Design

## How Media Queries Works

- `@media (max-width: 600px)`: <= 600px
- `@media (max-width: 1200px)`: <= 1200px
- Outside of any media query: > 1200px

<br>

## How to Select Breakpoints

- Bad strategy: based on popular devices
  - Ignore all the other users of the other devices
  - Problem for maintaining your code and keeping it up to date in the future
- Good strategy: based on screen width ranges
  - Look at the most used width for different categories of devices
  - Group them together in some logical way to pick our breakpoints from that
    - Phone(300-500px): 600px
    - Tablets(600-900px): 900px
    - Landscape tablets(900-1100px): 1200px
    - Desktop: > 1200px
- Perfect strategy: when the design breaks down

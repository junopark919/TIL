# Responsive Web Design

## 1. How Media Queries Works

- `@media (max-width: 600px)`: <= 600px
- `@media (max-width: 1200px)`: <= 1200px
- Outside of any media query: > 1200px

<br>

## 2. How to Select Breakpoints

- Bad strategy: based on popular devices.
  - Ignore all the other users of the other devices.
  - Problem for maintaining your code and keeping it up to date in the future.
- Good strategy: based on screen width ranges.
  - Look at the most used width for different categories of devices.
  - Group them together in some logical way to pick our breakpoints from that.
    - Phone(300-500px): 600px
    - Tablets(600-900px): 900px
    - Landscape tablets(900-1100px): 1200px
    - Desktop: > 1200px
- Perfect strategy: when the design breaks down.

<br>

## 3. Media Queries

### - Essential Code

- `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`
- The page will actually match the device screen's width.

<br>

### - 'rem' Bugs

- 'rem' and 'em' do not depend on html font-size in media queries. Instead, _1rem = 1em = 16px_.
- 'rem' apparently has some bugs in some browsers when used in media queries and therefore we should not use rem in media queries for safe.

```css
/* BELOW 1344px (Smaller Desktops) */
@media (max-width: 84em) {
  .hero {
    max-width: 120rem; /* It has nothing to do with rem bugs inside */
  }
}
```

<br>

### - Entire Content Size Change

- 10px / 16px = 0.625 = 62.5% → 9px / 16px = 0.5626 = 56.25%

```css
/* Below 1200px (Landscape Tablets) */
@media (max-width: 75em) {
  html {
    font-size: 56.25%;
  }
}
```

<br>

## 4. Optimizations and Deployment

### - Test and Optimize

- Make sure website works well in all major browsers.
  - 'https://caniuse.com/': check out CSS properties are supported by different browsers.
- Test the website on actual mobile devices, not just in DevTools.
- Optimize all images, in terms of dimensions and file size.

  - The image file itself should always be double of the size that is actually displayed on screen.
  - High density screens actually need two pixes of the image to display one pixel in the design.
  - Compare the rendered size to the intrinsic size from devTool and resize the images.
  - You can compress images on 'https://squoosh.app'.
  - 'webP' can compress down images while maintaining their quality, but not supported by some browsers.
  - Two different images and let the browser decide which one works best.

    ```html
    <picture>
      <source srcset="img/hero.webp" type="image/webp" />
      <source srcset="img/hero-min.png" type="image/png" />

      <img
        src="img/hero-min.png"
        class="hero-img"
        alt="Woman enjoying food, meals in storage container, and food bowls on a table"
      />
    </picture>
    ```

- Fix simple accessibility problems (e.g. color contrast issues).
- Run the Lighthouse performance test in Chrome DevTools and try to fix reported issues.
  - Anaylize the four categories - performance, accessibility, best practices and SEO.
- Think about SEO(Search Engine Optimization).
  - `<meta name="description" content="summary of the content" />`
  - Meta description for search result in research engine.
  - Proper title: not just poor title, but with a little cathline such as "Omnifood — Never cook again!"
- Favicon
  - Browser
    - 64x64px
    - `<link rel="icon" href="img/favicon.png" />`
  - iOS
    - 180x180px
    - `<link rel="apple-touch-icon" href="img/apple-touch-icon.png" />`
  - Android
    - 192x192px / 512x512px
    - `<link rel="manifest" href="manifest.webmanifest" />`
    - Add 'manifest.webmanifest' file in home directory.
      ```webmanifest
      {
        "icons": [
          {
            "src": "img/favicon-192.png",
            "type": "image/png",
            "sizes": "192x192"
          },
          {
            "src": "img/favicon-512.png",
            "type": "image/png",
            "sizes": "512x512"
          }
        ]
      }
      ```

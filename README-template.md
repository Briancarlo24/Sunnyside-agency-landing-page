# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](.images/screenshot.png)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://github.com/Briancarlo24/Sunnyside-agency-landing-page.git)
- Live Site URL: [Add live site URL here](https://briancarlo24.github.io/Sunnyside-agency-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- SCSS

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

After long months of break. I finally decided to finished this Junior level challenge. I learned to optimize CSS code by reusing it. I also learn to be able to architect large CSS codebases for reusability and maintainability using Sass/SCSS.

To see how you can add code snippets, see below:

```html
<picture class="section-services--image img-photography">
  <source
    media="(max-width:600px)"
    srcset="images/mobile/image-photography.jpg"
  />
  <img src="images/desktop/image-photography.jpg" alt="" />

  <div class="content--wrapper">
    <h3 class="heading-tertiary blend">Photography</h3>
    <p class="paragraph">
      Increase your credibility by getting the most stunning, high-quality
      photos that improve your business image.
    </p>
  </div>
</picture>
```

```css - I mean just look at how easy and organize it is to add responsive design to my website because of this technique.
// 1200px / 16 = 75em
@include respond(tab-land) {
  gap: 3.5rem;
}
// 900px / 16 = 56.25em
@include respond(tab-port) {
  gap: 1.5rem;
  width: 80%;
}
// 600px / 16 = 37.5em
@include respond(phone) {
  gap: 3.5rem;
  padding-block: calc(4rem + 10vw);
  text-align: center;
}
// 375px / 16 = 23.4375em
@include respond(phone-small) {
}
```

```js - not much JS going on in this project but hey...Still proud of this DOM code.
menu.addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector(".navigation__nav").classList.toggle("hidden");
  document.querySelector(".navigation__icon--1").classList.toggle("icon-1");
  document.querySelector(".navigation__icon--2").classList.toggle("icon-2");
  document.querySelector(".navigation__icon--3").classList.toggle("icon-3");
});
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I'll be continuing to complete Junior Challenges in Frontendmentor until I can finnaly get a job on Frontend Development. Please hire me :D

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://css-tricks.com/snippets/css/complete-guide-grid/) - Whenever i forgot how to use CSS grids, I just visit this site. Amazing guide and very easy to follow.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Brian Carlo Birondo](https://github.com/Briancarlo24)
- Frontend Mentor - [@Briancarlo24](https://www.frontendmentor.io/profile/Briancarlo24)
- Twitter - [https://twitter.com/BCarloSchiffer](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Thanks for google for being always up :D

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**

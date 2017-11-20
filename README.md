# FED Exercise

**Technology Used:**

* HTML
* CSS
* Sass
* Javascript
* Node
* Webpack

**Libraries Used:**

* jQuery
* Bootstrap 4 (Grid and Flexbox)
* Animate On Scroll

**Software Used:**

* Sublime Text 3
* Photoshop

## Thank You

Hi Guys,

First off, thank you for the opportunity to complete the FED exercise, I had a lot of fun developing it!

So I’ll go into my thought process while I was building the site, breaking down each section from top to bottom.

The very first thing I considered was the structure of the website. The structure of the pages always determines which libraries I am going to use and how much of the libraries I am going to use. I prefer to minimize my library use as much as possible to keep the code light and clean. However, libraries can definitely be effective in speeding up initial scaffolding of the site in order to focus on more interesting (and fun) UI work.

I chose to use Bootstrap 4 to handle the grid layout of the site, as well as adding flexbox to a few select elements.

## Overview

### Main Navigation

I chose to use flexbox on the main navigation to make it easier to create the layout in the design files. I tend to use flexbox sparingly, but this was a good use case.

I added a mobile menu toggle for mobile screen sizes that controls a full page menu overlay. This toggle has a custom CSS animation that activates and deactivates when the menu is open or closed.

I have also added a full page overlay for search functionality of the site. I chose to reuse the mobile menu toggle icon as a close icon so the user has the option to close the search overlay. I also automatically set the focus on the search input when the user is ready to search.

I decided to add a little CSS animation for when the user hovers over the main logo. ;)


### Hero

For the hero section, I added a fade animation for the hero copy, which comes from the Animate On Scroll library. I also thought that the hero could use a little extra something, so I created a custom background image scale animation that activates as the user scrolls down the page. I have adjusted the position of the background image based on device size, as well as added a transparent gradient overlay for the background image on mobile. This is to make the text more legible while it overlays the image.

### Main Content

I knew I wanted to keep this portion of the site as DRY as possible as each section is basically repeatable, just in a different order. For this I utilized some helper classes from Bootstrap 4 to reorder the elements accordingly based on device.

For the initial load animations (fade and fade left or right) I used the Animate On Scroll library. I adjusted the duration and delay of animations for a more elegant reveal of the elements.

There wasn't much added to the copy portion of the car sections, other than extra padding based on orientation. Car images were fun as I chose to create custom animations for these sections to add more visual interest on hover.


### Footer

For the footer, I chose to use flexbox again, using the Bootstrap 4 helper classes. I put a little extra focus on how things would stack on mobile devices as this is usually an area that is ignored during the build process.


### General

I chose to use Webpack to consolidate and compile the code throughout the project. I also used Sass to keep the CSS in order.

When writing CSS I always apply the BEM methodology to keep things organized and easy to understand.

I compressed the project images using the website TinyPNG. I find that this website does a better job than most of the popular image editing software out there.

I used the PSD as a reference throughout the project for specific pixel dimensions and colours used.

I followed the page design that was given as closely as possible. I added colour coordinated dropshadows to the buttons throughout the page, as well as the select dropdowns for some extra style and to make them pop a little more on hover.

Although it is easy to overdo the amount animations occur on a website, I try to find a balance and make each site as elegant as possible while being fun to use.



Thanks again, looking forward to next steps!

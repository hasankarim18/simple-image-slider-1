### HTML Structure (index.html):

The slider is built with a main container div with class slider
Inside it, there's a slides div that contains all the images
Two navigation buttons (prev and next) are added with arrows (❮ and ❯)
CSS Styling (style.css):

.slider: Sets up the main container

position: relative - allows absolute positioning of child elements
max-width: 800px - controls the slider width
overflow: hidden - hides images that slide out of view
.slides:

display: flex - places images in a horizontal row
transition: transform 0.5s - creates smooth sliding animation
Images styling:

width: 100% - makes images fill the container width
flex-shrink: 0 - prevents images from shrinking
Navigation buttons:

Positioned absolutely at 50% from top
Semi-transparent black background
Hover effect darkens the buttons
JavaScript Logic (script.js):

Variables:

currentIndex: Tracks the current slide position
slides: Reference to the slides container
totalSlides: Total number of images
Key Functions:

showSlide(index):

Handles edge cases (going past first/last slide)
Uses CSS transform to move slides horizontally
Formula: -${currentIndex \* 100}% moves slides by percentage width
moveSlide(step):

Wrapper function that calls showSlide with new index
Takes -1 for previous, 1 for next
Event Listeners:

Attached to prev/next buttons
Call moveSlide with appropriate direction
How the Sliding Works:

Images are laid out horizontally in a row (using flex)
Only one image is visible through the overflow:hidden window
When sliding:
The entire row of images moves left/right using translateX
The translation amount is calculated as a percentage
For example: translateX(-100%) moves one image to the left
Additional Features:

Circular navigation (loops back to start/end)
Commented-out auto-slide functionality
Smooth transitions between slides
The slider uses a common technique called "CSS Transform" for moving the images, which is more performance-efficient than changing position properties. The JavaScript handles the logic and user interaction, while CSS handles the visual presentation and animations.

# It's Your Day (To-do list)

It's Your Day is simple to-do list app where user can simply add tasks and then remove those. (Read about window "?" from the app) 

This application contains these features: (Stright from the assesment page at moodle)

## HTML

1. Basic HTML structure is present. 
2. HTML structure with clear content differentiation (headings, paragraphs, lists).
3. Use of forms, links, and media.
    - contains inputs, one link at footer, and changing backround images.
4. Tables are effectively used.
    - one table at about-page
5. Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content.

Those features above should be found on the application.

5/5

## CSS


1. Basic CSS styling (colors, fonts).
2. Use of classes and IDs to style specific elements.
3. Implementation of responsive design elements.
    - HOX! This application is designed for desktop use. Not for mobile devices! But for demonstrating scalability, windows and tasks will work and reorder also on narrower screens.
4. Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)
    - This app consists of multiple grids. Take a look also for the task ordering. Flex-wrap feature is presented there!
5. Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.

After all this project should present 5/5 styling :)

5/5

## JavaScript Basics

1. Simple interactions (like alerts on button click).
2. Multiple event listeners and basic DOM manipulations.
    - event listeners can be found on the main.js. DOM is used when creating or deleting task boxes.
3. Use of arrays, objects, and functions.
    -  In the code, arrays are used in the following places:
        - tavaralaatikot is an array of elements selected using document.querySelectorAll('.tavaralaatikko1'). It stores a collection of DOM elements.
    - objects are used in a few places:
        - newTavaralaatikko is a DOM element that is created and configured as an object with properties and methods.
        - event is an object passed to event handler functions like scaleTavaralaatikko and resetTavaralaatikko.
    - Example of functions:
        - Event handler functions like the click event on sendButton, mouseenter, and mouseleave event handlers on different elements.
4. Advanced logic, looping through data, and dynamic DOM updates.
    - Advanced Logic:
        - The code uses conditional statements (if-else) for different states, such as poistamistila, and changes the behavior of various elements based on these conditions.
        - There's a function displayGreeting that displays a greeting message based on the current time, demonstrating conditional logic based on time.
    - Looping through data:
        - The code uses the forEach method to loop through a collection of elements (tavaralaatikot) and attach event listeners or change their properties.
        - The paivitaJarjestysnumerot function iterates through the tavaralaatikot and updates their order numbers.
    - dynamic DOM:
        - The displayData function updates the content of DOM elements (temp and desc) based on data retrieved from an external source (OpenWeather API).
        - New elements (tavaralaatikko) are dynamically created and appended to the DOM when the user clicks the "sendButton."
        - The code dynamically adds or removes event listeners based on conditions (e.g., when poistamistila is active).

HOX!! This project contains no object constructors and isn't based on object oriented programming. So the section 5 (Consistent use of Object-Oriented JavaScript principles.) Is not counted in.

4/5

## Asynchronous Operations

1. Use of timers.
    - setInterval(aikaPaivittaja, 1000); is used to repeatedly call the aikaPaivittaja function every 1000 milliseconds (1 second). This function is responsible for updating the displayed time.
2. Successful implementation of an AJAX call or Fetch.
    - Weather feature presents that
3. Data from the asynchronous call is displayed on the webpage.
    - The data received from the OpenWeather API is processed by the displayData function, which updates the DOM with the temperature and weather description.
4. Error handling is implemented (for failed API calls, etc.).
    -  if the API call fails, it will enter the .catch block, where an alert message is shown with the text "Wrong City name."
5. Effective use of asynchronous data to enhance user experience (like filtering, sorting).
    - sortAndDisplayData function, which sorts the weather data based on the user's choice of ascending or descending order.

5/5


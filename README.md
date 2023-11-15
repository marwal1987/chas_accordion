# Build a FAQ-site

Today we're going to learn how to make an accordion, meaning an area that can collapse to show and hide text. These are very often used on FAQ-websites – so let's build one. The FAQ-website should follow this design:

![Design](https://github.com/davidshore/chas_accordion/blob/main/FAQ-design.png)


## How to complete this assignment

Start by reading the recommended readings, they will be of great help this time.

You FAQ should fulfill the following basic requirements:

1. Click a section title to expand its description.
2. Click the title again to collapse the description.

This assignment is a little different than previous assignments. For this one, we've given you some code, but you need to connect the dots and make it work. In the code folder, you'll find an HTML file, a CSS file, and a JavaScript file. You will need to complete the following tasks in order to fulfill the requirements set out above:

1. Link to the JavaScript file from the HTML, so that the JavaScript gets run.
1. Use CSS to hide the ".description" divs.
1. The JavaScript file is set up to add toggle an ".active" class on the ".title" divs when you click the title (use the inspector to see this in action). Use an "adjacent" CSS selector to select the panel next to an ".active" element and set it to `display: block;` to make it visible. [Read this](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_selectors) to learn about the adjacent selector.
1. Once you have one section showing and hiding, you need to update the JavaScript to call the `toggle` function for `section2` and `section3`.
1. Make your page accessible. Read about [accessibility here](https://www.w3schools.com/accessibility/index.php) and answer these questions in comments at the end of your code:

- Why should you make your html accessible?
- What are landmarks in an html page and why should you have them?
- What are semantic elements and why should you use them?
- When do you use the role attribute?

As always, to complete this assignment, you need to fork this repository, add your code, and then submit a pull request on GitHub for review. [Read the guide on GitHub](https://guides.github.com/activities/forking/) for more info on how to do this.

### :books: Reading List

- [Script tags](https://www.w3schools.com/tags/att_script_src.asp)
- [W3Schools – Javascript DOM](https://www.w3schools.com/js/js_htmldom.asp) Read to chapter "DOM HTML".

---

### :sos: How to get help

Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

1. Google! In English, type in the error message if there is one, search within the language your're using (ie CSS, JavaScript etc).
2. Ask your code buddies in your Company.
3. Ask your fellow students in Slack.
4. Ask David. Please note: we are part of a sharing community - share the answer with your fellows.

---

### :boom: Success!

After completing this assignment, you should know about how to manipulate the DOM with some basic Javascript. You should know how to select a certain HTML-element and make changes to that with Javascript. You should also know some basic Javascript syntax.

---

### :runner: Stretch Goals

Done with the main task? Here's some ideas for things to continue with:

1. Make the section titles have a background cover which alternates, so every even title is one colour, and every odd title is another colour.
1. Use CSS to add an icon before the title which indicates whether the section is expanded or collapsed. It should update when the section expands or collapses.
1. On hover, make the color of the section darker.
1. Add a CSS-animation for when the text expands and collapses. For example a slide-down effect.
1. On hover, change the mouse cursor to something other than the default.

### :books: :runner: Stretch goal reading list

- [How to make a circle in CSS](https://davidwalsh.name/css-circles)
- [nth-child in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Anth-child)
- [CSS Cursor Property](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor)

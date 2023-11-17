// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active");
}
// -- Only part 1 --
// Selects and HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("section1").onclick = toggle;
// document.getElementById("section2").onclick = toggle;
// document.getElementById("section3").onclick = toggle;

const divElement = document.querySelector(".accordion");
let sectionId = 0;
// Use fetch to download the data.
async function getposts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  // Use forEach or a for-loop to iterate through the data
  data.forEach((post) => {
    sectionId++;

    const sectionDiv = document.createElement("div"); // create a div with a section class for each title property
    sectionDiv.innerHTML = `<h2>${post.title}?</h2>`;
    sectionDiv.setAttribute("id", `section${sectionId}`);
    sectionDiv.onclick = toggle; // Make sure that each title is showing and hiding the description div when clicked.

    const descriptionDiv = document.createElement("div"); // create a div with a description class for each body property.
    descriptionDiv.innerHTML = `<p>${post.body}</p>`;
    descriptionDiv.setAttribute("class", "description");

    divElement.appendChild(sectionDiv);
    divElement.appendChild(descriptionDiv);

    if (sectionId % 2 == 0) {
      sectionDiv.style.backgroundColor = "green";
      sectionDiv.setAttribute("class", "title even");
    } else {
      sectionDiv.style.backgroundColor = "purple";
      sectionDiv.setAttribute("class", "title odd");
    }
  });
}

getposts();

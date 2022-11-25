const colors = [
  "Red",
  "Green",
  "Yellow",
  "Blue",
  "Violet",
  "Purple",
  "Orange",
  "Indigo",
];
const section = document.createElement("section");
section.setAttribute("id", "container");
document.body.appendChild(section);

const heading = document.createElement("h1");
heading.innerText = "Please click on a color";
document.body.appendChild(heading);

const span = document.createElement("span");
span.setAttribute("id", "selected_color");
document.body.appendChild(span);
span.innerText = "color";

for (let color of colors) {
  const div = document.createElement("div");
  div.setAttribute("class", "box");
  section.appendChild(div);
  div.style.background = color;
  div.addEventListener("click", function () {
    heading.innerText = "you have selected : ";
    span.innerText = color;
    span.style.background = color;
  });
}

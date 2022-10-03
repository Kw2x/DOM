// adding a red p element 
const content = document.createElement("p");
content.textContent = 'Hey Im Red'
content.style.color = 'red'
container.appendChild(content);

// h3 element with blue text that says Im a blue h3!
const content = document.createElement("h3");
content.textContent = "Hey I'm a blue h3!"
content.style.color = 'blue'
container.appendChild(content);

// a <div> with a black border and pink background color with the following elements inside of it:
const newdiv = document.createElement("div");
// another <h1> that says “I’m in a div”
const h1 = document.createElement("h1");
h1.textContent = "Hey I'm in a div!";
// a <p> that says “ME TOO!”
const para = document.createElement("p");
para.textContent = "ME TOO!";
// after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
newdiv.appendChild(h1);
newdiv.appendChild(para);
//with a black border and pink background color with the following elements inside of it:
newdiv.style.border = 'thick solid black'
newdiv.style.backgroundColor = "pink"
//append
container.appendChild(newdiv);
//Method 2. set the “on_event_” property on the DOM object in your JavaScript
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert('Hello World')

// Method 3. attach event listeners to the nodes in your JavaScript
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => alert('Hello World'));
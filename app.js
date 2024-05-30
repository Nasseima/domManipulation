//Part 1
//Select main element and name it mainEl
const mainEl = document.querySelector('main');
//Set it to this a specific background color
mainEl.style.background = 'var(--main-bg)'
console.log (mainEl)
//Create a h1 element
let h1 = document.createElement("h1");
console.log(h1);
//Add text to the h1 element
const hText = document.createTextNode('DOM MANIPULATION')
h1.innerHTML = "DOM MANIPULATION"
mainEl.appendChild(hText);
// console.log(hText)
// const text = document.querySelector("h1").innerText = "DOM MANIPULATION";
// console.log(text)

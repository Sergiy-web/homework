const button = document.querySelector(".button");
// console.log(button);
const input = document.querySelector(".input");

const callback = () => {
    console.log("click");
};
button.addEventListener("click", callback);
const handleInputFocus = () => {
    console.log("focus");
};
const handleInputChange = (event) => {
    console.log(event.target.value);
};
input.addEventListener("focus", handleInputFocus);
input.addEventListener("input", handleInputChange);
// ------------------------------------------------
const parent = document.querySelector(".parent");
const handleParentClick = (event) => {
    console.log(event.target);
}; 
parent.addEventListener("click", handleParentClick);

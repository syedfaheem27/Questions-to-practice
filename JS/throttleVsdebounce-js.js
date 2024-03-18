//Throttling

let throttleId = null;

const updateLayout = () => {};

const throttle = (func, delay) => {
  if (throttleId) return;

  throttleId = setTimeout(() => {
    func();
    throttleId = null;
  }, delay);
};

//The update layout gets fired after regular intervals of 3s
//given that the window is being resized
window.addEventListener("resize", () =>
  throttle(updateLayout, 3000)
);

//Debouncing
let debounceId = null;

let inputField = document.getElementById("inp"); //Assuming this to be an input field

const getDataFromEndPoint = () => {};

const debounceFunction = (func, delay) => {
  clearTimeout(debounceId);
  debounceId = setTimeout(func, delay);
};

//The getDataFromEndPoint function only gets triggered if the user stops
//changing the input field for more than 500 milliseconds
inputField.addEventListener("change", () =>
  debounceFunction(getDataFromEndPoint, 500)
);

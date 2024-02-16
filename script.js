"use strict";

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function changeBackgroundColor() {
  const body = document.body;

  // Change background color and wait for 5 seconds
  async function changeColorAndWait(color, duration) {
    body.style.backgroundColor = color;
    await delay(duration);
  }

  // Change background color three times
  await changeColorAndWait("blue", 5000);
  await changeColorAndWait("white", 5000);
  await changeColorAndWait("red", 5000);

  // A default background color after the changes
  body.style.backgroundColor = "green";
}

// Call the function
changeBackgroundColor();

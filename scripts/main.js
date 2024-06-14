const myHeading = document.querySelector("h1");
myHeading.textContent = "Bye Bye : World!";

// Funktion zur Generierung einer zufälligen Farbe
function generateRandomColor() {
    const randomColor = Math.floor(Math.random() * 0xFFFFFF);
    const hexString = "#" + randomColor.toString(16).padStart(6, '0');
    return hexString;
}

document.querySelector("html").addEventListener("click", function () {
    // Zufällige Farbe generieren und setzen
    const hexColor = generateRandomColor();
    document.querySelector("body").style.backgroundColor = hexColor;
});
  

/* 
    i
    am
    a
    comment
*/

// this is also a comment

let myVariable = "i am using arch btw.";

// alert(myVariable); // -> makes super sketchy pop up.
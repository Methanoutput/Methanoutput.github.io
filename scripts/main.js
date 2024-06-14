const myImage = document.querySelector("img");

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName} ist using arch btw`;
}

if(!localStorage.getItem("name")){
    setUserName();
} else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName} ist using arch btw`;
}

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/turtle.jpg"){
        myImage.setAttribute("src", "images/dolphin.jpg");
    }
    else{
        myImage.setAttribute("src", "images/turtle.jpg");
    }
};

myButton.onclick = () => {
    setUserName();
}
"use strict"

//Function when scrooling down with mouse nav-cont height changes to 52px and reversed

window.onscroll = function () { myFunction() };

function myFunction() {
    var element = document.getElementById("vertical-line");
    var element2 = document.getElementById("text-instagram");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav-cont").style.height = "52px";
        //removes class "vertical-line" and hides the line in the insta-logo-block container
        element.classList.remove("vertical-line");
        //adds class "hidden-insta" witch property is display none
        element2.classList.add("hidden-insta");
    } else {
        document.getElementById("nav-cont").style.height = "77px";
        element.classList.add("vertical-line");
        element2.classList.remove("hidden-insta");
    }
}

//changes heart color and add like1 when like heart is clicked
function changeColor() {
    const heart = document.getElementById("heart-in");
    if (heart.classList.contains("color-black")) {
        heart.classList.add("color-red");
        heart.classList.remove("color-black");
        document.getElementById("likes-cont").innerHTML = "1 likes";
    } else {
        heart.classList.remove("color-red");
        heart.classList.add("color-black");
        document.getElementById("likes-cont").innerHTML = "0 likes";
    }
}

//on keypress enter user name prompt
function enterUserName() {
    var name = prompt("Please enter your name", "Lukas");
    var yourMessage = prompt("Please enter your message", "Is it your car???..");
    if (name != null) {
        document.getElementById("new-comment").innerHTML += "<br>" + "<b>" + name + "</b>" + "&nbsp" + yourMessage;
    }
}

//onclick must focus on input
function focusComment() {
    document.getElementById("input-comment").focus();
}


//local storage getItem
// window.onunload = function setItem() {
//     localStorage.setItem(document.getElementById("new-comment"));
// }

// window.onload = function getComments() {
//     localStorage.getItem(document.getElementById("new-comment"));
//     console.log("new-comment")
// }

// window.onunload = saveToLocalStorage();

// const saveToLocalStorage = function setLocalStorage() {
//     localStorage.setItem('comments', 'comment.textContent')
// };

// const getFromLocalStorage = function getLocalStorage() {
//     localStorage.getItem('comments')
// }


// window.onload = getFromLocalStorage();

// localStorage.setItem(document.getElementById("new-comment").innerHTML;


//   // Retrieve
//   document.getElementById("new-comment").innerHTML = localStorage.getItem("new-comment");  

// let comments = document.getElementById("new-comment").innerText;
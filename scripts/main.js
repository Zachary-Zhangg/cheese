let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lotsofcheeses.jpg') {
        myImage.setAttribute('src', 'images/cheesesiteimage.jpg');
    } else {
        myImage.setAttribute('src', 'images/lotsofcheeses.jpg');
    };
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


myHeading.textContent = localStorage.getItem('favourite_cheese') + ' cheese is yummy!';

function setUsername() {
    let myName = prompt('Please enter your favourite type of cheese:');
    if(myName!==null){
        myHeading.textContent = myName + ' cheese is yummy!'
        localStorage.setItem('favourite_cheese', myName);
    } else {
        myHeading.textContent = 'Cheese!'
    }
}
    

myButton.onclick = function(){
    setUsername();
}

let savedName = localStorage.getItem('favourite_cheese');

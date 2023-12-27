//Detecting button press
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
    function handleClick(){
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML); 
        
        buttonAnimation(buttonInnerHTML)
}
}

//Detecting keyboard press
//all in lowercase
document.addEventListener("keydown", function(event){
    makeSound(event.key); //the console tells which key was pressed and some more details
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key){
        case "w":
            var crash=new Audio("./sounds/crash.mp3"); //object creation
            crash.play(); 
        break;
        case "a":
            var tom2=new Audio("./sounds/tom-2.mp3"); //object creation
            tom2.play(); 
        break;
        case "s":
            var tom3=new Audio("./sounds/tom-3.mp3"); //object creation
            tom3.play(); 
        break;
        case "d":
            var tom4=new Audio("./sounds/tom-4.mp3"); //object creation
            tom4.play(); 
        break;
        case "j":
            var tom1=new Audio("./sounds/tom-1.mp3"); //object creation
            tom1.play(); 
        break;
        case "k":
            var bass=new Audio("./sounds/kick-bass.mp3"); //object creation
            bass.play(); 
        break;
        case "l":
            var snare=new Audio("./sounds/snare.mp3"); //object creation
            snare.play(); 
        break;

    default: console.log(buttonInnerHTML)

    }
}

//var audio=new Audio("./sounds/tom-1.mp3"); //object creation
//audio.play();

function buttonAnimation(currentKey){
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed"); //to add classes in javascript
setTimeout(function(){
    activeButton.classList.remove("pressed");
},100);  //timeout fn
}

//for loop selecting the button by calling It's index
//addEventListner the work the functions of when click the each buttons
//used anonymous function calling method without function name



///Play the sounds using add button press input from the mouse

for (var i=0; i<document.querySelectorAll("button.drum").length;i++){

    document.querySelectorAll("button.drum")[i].addEventListener("click",function(){
        

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);   
    buttonAnimation(buttonInnerHTML);

    });
}

//Play the sounds using add keypress input from the keyboard

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var audio1 = new Audio('sounds/tom-1.mp3');
            audio1.play();
            break;
        
        case "a":
            var audio2 = new Audio('sounds/tom-2.mp3');
            audio2.play();
            break;
        
        case "s":
            var audio3 = new Audio('sounds/tom-3.mp3');
            audio3.play();
            break;

         case "d":
            var audio4 = new Audio('sounds/tom-4.mp3');
            audio4.play();
            break;
        
        case "j":
            var audio5 = new Audio('sounds/snare.mp3');
            audio5.play();
            break;
            
        case "k":
            var audio6 = new Audio('sounds/crash.mp3');
            audio6.play();
            break;
            
        case "l":
            var audio7 = new Audio('sounds/kick-bass.mp3');
            audio7.play();
            break;
      
        default: console.log(buttonInnerHTML);
            
    }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");

    },100);
}




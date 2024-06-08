// Detecting button press
var allButton = document.querySelectorAll(".drum").length;

for (var i = 0; i<allButton; i++) {
    document.querySelectorAll(".drum") [i].addEventListener("click", handleClick);

    function handleClick() {
        var soundButton = this.innerHTML;
        buttonSound(soundButton);
        buttonAnimation(soundButton);
    }
}

// Detecting keyboard press

document.addEventListener("keydown", function(event) {
    buttonSound(event.key);
    buttonAnimation(event.key);
});

    function buttonSound(key) {

        switch (key) {
            case "w":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;

            case "a":
                var kickBass = new Audio("./sounds/kick-bass.mp3");
                kickBass.play();
                break;

            case "s":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;
        
            case "d":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;

            case "j":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;

            case "k":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();  
                break;    

            case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();          
                break;
            default:
                console.log(soundButton.innerHTML);
        }
    }

// Adding animation 
    function buttonAnimation(clickedKey) {
        var activeKey = document.querySelector("." + clickedKey);
        activeKey.classList.add("pressed");

        setTimeout(function() {
            activeKey.classList.remove("pressed")
        }, 100)
    }

// document.querySelector("button").addEventListener("click", handle_clik);



var n = document.querySelectorAll(".drum").length
// for(var i = 0; i < n; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//         // alert("anjkjo");
//         // var audio = new Audio("sounds/crash.mp3");
//         // audio.play();
        
//         makeSound(document.querySelectorAll(".drum")[i].innerHTML);
    
//     });
// }

document.addEventListener("keydown", function(event){
    // alert("key pressed");
    makeSound(event.key);
    add_animation(event.key);
});

for (var i = 0; i < n; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

      makeSound(this.innerHTML);
      add_animation(this.innerHTML);
  
    });

  
  }

function makeSound(x){
    switch(x) {
        case "w": 
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a": 
            var audio2 = new Audio("sounds/kick-bass.mp3");
            audio2.play();
            break;
        case "s" : 
            var audio3 = new Audio("sounds/snare.mp3");
            audio3.play();
            break;
        case "d": 
            var audio4 = new Audio("sounds/tom-1.mp3");
            audio4.play();
            break;
        case "j": 
            var audio5 = new Audio("sounds/tom-2.mp3");
            audio5.play();
            break;
        case "k": 
            var audio6 = new Audio("sounds/tom-3.mp3");
            audio6.play();
            break;
        case "l": 
            var audio7 = new Audio("sounds/tom-4.mp3");
            audio7.play();
            break;
        default :
            break;
    }
}


function add_animation(key){
    var btn = document.querySelector("."+key);
    btn.classList.add("pressed");

    setTimeout(function(){
        btn.classList.remove("pressed");
    }, 100)
}

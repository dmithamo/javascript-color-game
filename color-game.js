var colorOptions = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)"
]
var colorCode = document.getElementById("header-span");
var correctColor = randomColor();
var squares = document.getElementsByClassName("square-box");
var header = document.querySelector("#header");
var midSpan = document.querySelector("#sub-t");

colorCode.textContent = correctColor;

for(var i = 0; i < squares.length; i++){
    // Assign a random color to each square
    squares[i].style.backgroundColor = colorOptions[i];

    // Add click event to each square
    squares[i].addEventListener("click", function(){
        // Compared clicked color to correct color
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === correctColor){
            // Assign all boxes the correct color
            changeColors(clickedColor);
            var a = 0;
            while(a < squares.length){
                squares[a].style.backgroundColor = correctColor;
                a++;
            }
            
            // Change header bg to correct color
            header.style.backgroundColor = correctColor;
            // Display 'Correct!'
            midSpan.textContent = "Correct!"
        }
        else{
            this.style.backgroundColor = "rgb(0, 0, 0)";
            // Display 'Wroong!!!!'
            midSpan.textContent = "Wrong, sir. Wrong!"
        }
        
    });
}

// Assign all boxes the correct color
function changeColors(color){
    var a = 0;
    while(a < squares.length){
        squares[a].style.backgroundColor = color;
        a++;
    }
}

// Generate a random color
function randomColor(){
    // Generate a random whole number btn 0 and 255 to rep each color channel
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    console.log(red, green, blue);

    var randColor = `rgb(${red}, ${green}, ${blue})`;
    return randColor;
}

alert(randomColor())

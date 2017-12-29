var complexity = 6;
var colorOptions = generateColorOptions(complexity);

var colorCode = document.getElementById("header-span");
var randomNum = Math.floor(Math.random() * colorOptions.length);
var correctColor = colorOptions[randomNum];
var squares = document.getElementsByClassName("square-box");
var header = document.querySelector("#header");
var midSpan = document.querySelector("#sub-t");

// Select individual buttons, and 'click' event listener
var newButton = document.querySelector("#button1");
newButton.addEventListener("click", restartGame);

var hardButton = document.querySelector("#button2");
hardButton.addEventListener("click", setComplexityHard)
var easyButton = document.querySelector("#button3");
easyButton.addEventListener("click", setComplexityEasy)

// on clicking new button
function restartGame(){
    window.location.reload();
}

function setComplexityHard(){
    complexity = 6;
}

function setComplexityEasy(){
    complexity = 3;
}

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

    var randColor = `rgb(${red}, ${green}, ${blue})`;
    return randColor;
}

// Populate list of color oprions with random colors
function generateColorOptions(num){
    // Call the randomColor function for num number of times to populate 
    // the list of colorOptions list with num colors
    var theColorOptions = []; 
    for(var a = 0; a < num; a++){
        var color = randomColor(); 
        theColorOptions.push(color); 
    }
    console.log(theColorOptions);
    return theColorOptions;
}

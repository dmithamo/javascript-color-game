var complexity = 6;
var colorOptions = generateColorOptions(complexity);

var colorCode = document.getElementById("header-span");
var randomNum = Math.floor(Math.random() * colorOptions.length);
var correctColor = colorOptions[randomNum];

colorCode.textContent = correctColor;

var squares = document.getElementsByClassName("square-box");
var header = document.querySelector("#header");
var midSpan = document.querySelector("#sub-t");

// Select individual buttons, and 'click' event listener
var newButton = document.querySelector("#button1");
newButton.addEventListener("click", restartGame);

var hardButton = document.querySelector("#button2");
var easyButton = document.querySelector("#button3");

// on clicking new button / Play again
function restartGame(){
    // window.location.reload();
    // Reset colors in color options list
    colorOptions = generateColorOptions(complexity);
    // Assign squares these new colors
    assignColors();
    // Change the rgb code up top
    randomNum = Math.floor(Math.random() * colorOptions.length);
    correctColor = colorOptions[randomNum];
    colorCode.textContent = correctColor;
    // Reset button to white bg
    newButton.classList.add("clicked-button");
    newButton.classList.add("reset-button");
    // Reset button text
    newButton.textContent = "New Colors";
    // Reset midspan text
    midSpan.textContent = "Click the Color that matches the rgb code above";
}

function setComplexity(){
    hardButton.addEventListener("click", function(){

    });

    easyButton.addEventListener("click", function(){

    });
}



function assignColors(){
    // Assign a random color to each square
    if(colorOptions.length === 3){
        for(var i = 3; i < 6; i++){
            squares[i].style.backgroundColor = "rgb(0, 0, 0)";
        }
    }
    for(var i = 0; i < colorOptions.length; i++){
        squares[i].style.backgroundColor = colorOptions[i];
    }
}


assignColors();

for(var i = 0; i < squares.length; i++){
    // Add click event to each square
    squares[i].addEventListener("click", function(){
        // Compared clicked color to correct color
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === correctColor){
            // Assign all boxes the correct color
            winningColors(clickedColor);
            
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
    return theColorOptions;
}


// Assign all boxes the correct color
function winningColors(color){
    var a = 0;
    while(a < colorOptions.length){
        squares[a].style.backgroundColor = color;
        a++;
    }
    newButton.textContent = "Play again";
    buttonsOnWin();
}

    // Make buttons inherit color of header bg on hover and click
function buttonsOnWin(){
    // select all buttons and add mouseover and mouseout event listeners
    var allButtons = document.querySelectorAll("button");
    for(var b = 0; b < allButtons.length; b++){
        // Inherit header bg on mouseover
        allButtons[b].addEventListener("mouseover", function(){
            this.style.background = header.style.backgroundColor;
        });
        // Reset buttons styles on mouseout
        allButtons[b].addEventListener("mouseout", function(){
            this.style.background = "white";
        });
    }

}
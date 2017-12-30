var hardButton = document.querySelector("#button2");
var easyButton = document.querySelector("#button3");

var complexityButtons = document.getElementsByClassName("set-complexity");

var squares = document.getElementsByClassName("square-box");
var colorCode = document.getElementById("header-span");
var header = document.querySelector("#header");
var midSpan = document.querySelector("#sub-t");
var newButton = document.querySelector("#button1");

var complexity = checkComplexity(); 
var colorOptions = generateColorOptions(complexity);

colorCode.textContent = pickCorrectColor();
assignColors();
newButton.addEventListener("click", restartGame);

// Pick random rgb code, set as correct color. Display up top
function pickCorrectColor(){
    var randomNum = Math.floor(Math.random() * colorOptions.length);
    var correctColor = colorOptions[randomNum];
    return correctColor;
}


// On clicking new button / Play again
function restartGame(){
    complexity = checkComplexity();
    
    colorOptions = generateColorOptions(complexity);
    
    // Assign squares these new colors
    assignColors();

    // Change the rgb code up top
    colorCode.textContent = pickCorrectColor();

    // Reset the header bg
    header.style.backgroundColor = "rgb(10, 116, 202)";

    // Reset button to white bg
    newButton.classList.add("clicked-button");
    newButton.classList.add("reset-button");

    // Reset button text
    newButton.textContent = "New Colors";

    // Reset midspan text
    midSpan.textContent = "Click the Color that matches the above rgb code";
}


for(var i = 0; i < complexityButtons.length; i++){
    complexityButtons[i].addEventListener("click", function(){
        if(this.textContent === "Easy"){
            this.classList.add("selected-complexity")
            complexityButtons[0].classList.remove("selected-complexity");
        }
        else if(this.textContent === "Hard"){
            this.classList.add("selected-complexity");
            complexityButtons[1].classList.remove("selected-complexity");
        }
        restartGame();
    });
}

function checkComplexity(){
    if("selected-complexity" === complexityButtons[0].classList[1]){
        complexity = 6;
    }else{
        complexity = 3;
    }
    return complexity;
}


function assignColors(){
    // Assign a random color to each square
    if(colorOptions.length === 3){
        for(var i = 3; i < 6; i++){
            squares[i].style.display = "none";
        }
    }else{
        for(var i = 3; i < 6; i++){
            squares[i].style.display = "block";
        }
    }
    for(var i = 0; i < colorOptions.length; i++){
        squares[i].style.backgroundColor = colorOptions[i];
    }
}



for(var i = 0; i < squares.length; i++){
    // Add click event to each square
    squares[i].addEventListener("click", function(){
        // Compared clicked color to correct color
        var clickedColor = this.style.backgroundColor;
        var correctColor = colorCode.textContent;
        if(clickedColor === correctColor){
            // Assign all boxes the correct color
            winningColors(clickedColor);
            
            // Change header bg to correct color
            header.style.backgroundColor = correctColor;
            // Display 'Correct!'
            midSpan.textContent = "Ni kama umepata"
        }
        else{
            this.style.backgroundColor = "rgb(0, 0, 0)";
            // Display 'Wroong!!!!'
            midSpan.textContent = "You're Wrong, mate. Wrong! Ha!"
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
    // num = checkComplexity();
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
}

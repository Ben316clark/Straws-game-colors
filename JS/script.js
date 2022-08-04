// red  
let arrayRed = ['rgb(101, 0, 0)', 'rgb(105, 0, 0)', 'rgb(108, 0, 0)', 'rgb(112, 0, 0)', 'rgb(120, 0, 0)', 'rgb(130, 0, 0)', 'rgb(140, 0, 0)', 'rgb(150, 0, 0)', 'rgb(160, 0, 0)', 'rgb(165, 0, 0)', 'rgb(170, 0, 0)', 'rgb(180, 0, 0)', 'rgb(190, 0, 0)', 'rgb(200, 0, 0)', 'rgb(210, 0, 0)', ];
// blue
let arrayBlue = ['rgb(0, 234, 237)', 'rgb(0, 224, 247)', 'rgb(0, 229, 230)', 'rgb(0, 200, 200)', ' rgb(0, 200, 255)', 'rgb(0, 124, 237)', 'rgb(0, 124, 200)', 'rgb(0, 150, 207)', 'rgb(0, 184, 230)', 'rgb(0, 254, 207)', 'rgb(0, 234, 207)', 'rgb(0, 185, 200)', 'rgb(0, 174, 247)', 'rgb(0, 204, 207)', 'rgb(0, 224, 237)', ];
// yellow
let arrayYellow = ['rgb(161, 150, 0)', 'rgb(162, 149, 0)', 'rgb(161, 150, 0)', 'rgb(161, 150, 0)', 'rgb(161, 150, 0)', 'rgb(161, 150, 0)', 'rgb(161, 150, 0)', 'rgb(161, 150, 0)', 'rgb(161, 150, 0)', 'rgb(161, 150, 0)', 'rgb(161, 150, 0)', 'rgb(161, 150, 0)', 'rgb(161, 150, 0)', 'rgb(161, 150, 0)', 'rgb(161, 150, 0)', ];
// green
let arrayGreen = ['rgb(0, 50, 0)', 'rgb(0, 20, 0)', 'rgb(0, 70, 0)', 'rgb(0, 90, 0)', 'rgb(0, 100, 0)', 'rgb(0, 110, 0)', 'rgb(0,120, 0)', 'rgb(0, 140, 0)', 'rgb(0, 160, 0)', 'rgb(0, 180, 0)', 'rgb(0, 200, 0)', 'rgb(0, 220, 0)', 'rgb(0, 240, 0)', 'rgb(0, 250, 0)', 'rgb(0, 20, 40)', ];
// purple
let arrayPurple = ['rgb(29, 0, 14)', 'rgb(28, 0, 13)', 'rgb(32, 0, 15)', 'rgb(28, 0, 18)', 'rgb(25, 0, 19)', 'rgb(38, 0, 14)', 'rgb(48, 0, 13)', 'rgb(18, 0, 03)', 'rgb(18, 0, 13)', 'rgb(26, 0, 11)', 'rgb(29, 0, 16)', 'rgb(25, 0, 10)', 'rgb(32, 0, 14)', 'rgb(31, 0, 1)', 'rgb(18, 0, 18)', ];
// pink
let arrayPink = ['rgb(170, 0, 63)', 'rgb(160, 0, 63)', 'rgb(150, 0, 63)', 'rgb(160, 0, 60)', 'rgb(150, 0, 73)', 'rgb(180, 0, 53)', 'rgb(170, 0, 73)', 'rgb(170, 0, 83)', 'rgb(170, 0, 53)', 'rgb(180, 0, 83)', 'rgb(180, 0, 60)', 'rgb(160, 0, 93)', 'rgb(170, 0, 75)', 'rgb(175, 0, 65)', 'rgb(176, 0, 69)', ];
// black
let Black = ['rgb(0,0,0)', 'rgb(0,0,0)', ];
// white
let White = ['rgb(255,255,255)', 'rgb(255,255,255)', ];
let color = null;
const revealBtn = document.getElementById("revealBtn");
const reveal = document.getElementById("Color");
const ColorBtn1 = document.getElementById("ColorBtn");
const ColorDiv = document.getElementById("ColorDiv");
ColorBtn1.addEventListener('click', () => {
    function pickColorFamily() {
        let x = Math.random() * 190;
        if (x < 30) {
                color = arrayRed;
            colorName = "Red"
        } else if (x >= 30 && x < 60) {
                color = arrayBlue
            colorName = "Blue"
        } else if (x >= 60 && x < 90) {
            color = arrayYellow;
            colorName = "Yellow";
        } else if (x >= 90 && x < 120) {
            color = arrayGreen;
            colorName = "Green"
        } else if (x >= 120 && x < 150) {
            colorName = "Purple"
            color = arrayPurple;
        } else if (x >= 150 && x < 180) {
            colorName = "Pink"
            color = arrayPink;
        } else if (x >= 180 && x < 185) {
            colorName = "Black"
            color = Black;
        } else {
            colorName = "White"
            color = White;
        }
        revealBtn.addEventListener('click', () => {
            reveal.innerHTML = colorName;
        })
    }

    pickColorFamily();

    function pickColorFromArray() {

        let randomColor = color[Math.floor(Math.random() * 10)];

        ColorDiv.style.backgroundColor = randomColor;

    }
    pickColorFromArray();
})
'use strict';

var canvas = document.querySelector('canvas');
var ctx;
var gCurrTxt = 0;

var gMeme = {
    selectedImgId: 5,
    txts: [
        {
            line: ' ',
            size: '50px',
            color: 'white',
            font: 'impact',
            y: 60,
            align:'center' 

        }
    ]
}

function setMemeToCanvas(imgId) {
    gMeme.selectedImgId = imgId;
}

function clearCanvasTxt() {
    gMeme = {
        selectedImgId: gMeme.selectedImgId,
        txts: [
            {
                line: ' ',
                size: '50px',
                color: 'white',
                font: 'impact',
                y: 60,
                align:'center' 
            }
        ]
    }
    var elInput = document.querySelector('.canvas-editor input');
    elInput.value = ' ';
    gCurrTxt = 0;
    renderCanvas();
}

function addLine() {
    var newYPosition = (gMeme.txts[(gMeme.txts).length - 1].y) + 100;
    if (newYPosition >= 660) return;
    var newLine = {
        line: ' ',
        size: '50px',
        color: 'white',
        font: 'impact',
        y: newYPosition,
        align:'center' 
    }
    gMeme.txts.push(newLine);
    var elInput = document.querySelector('.canvas-editor input');
    gCurrTxt = gCurrTxt + 1;
    elInput.value = ' ';
    renderCanvas();
}
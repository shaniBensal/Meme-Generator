'use strict';

var canvas;
var ctx;

var gImgs = [
    {
        id: 1,
        url: 'pic-primery/001.jpg',
        keywords: ['happy']
    },
    {
        id: 2,
        url: 'pic-primery/002.jpg',
        keywords: ['happy']
    },
    {
        id: 3,
        url: 'pic-primery/003.jpg',
        keywords: ['happy']
    },
    {
        id: 4,
        url: 'pic-primery/004.jpg',
        keywords: ['happy']
    },
    {
        id: 5,
        url: 'pic-primery/005.jpg',
        keywords: ['happy']
    },
    {
        id: 6,
        url: 'pic-primery/006.jpg',
        keywords: ['happy']
    }
];
var gMeme = {
    selectedImgId: 5,
    txts: [
        {
            line: ' ',
            size: '30px',
            color: 'black',
            font: 'arial',
            y: 60
        }
    ]
}


function setMemeToCanvas(imgId) {
    gMeme.selectedImgId = imgId;
}

function changeFontSize(act) {
    var fontSize = getFontSize();
    if (act === 'bigger') fontSize = fontSize + 10;
    else if (act === 'smaller') fontSize = fontSize - 10;
    gMeme.txts[0].size = fontSize.toString() + 'px';
    renderCanvas();
}

function clearCanvasTxt() {
    gMeme = {
        selectedImgId: gMeme.selectedImgId,
        txts: [
            {
                line: ' ',
                size: '30px',
                color: 'black',
                font: 'arial',
                y: 60
            }
        ]
    }
    var elInput = document.querySelector('input');
    elInput.value = ' ';
    renderCanvas();
}

function getImgById(imgId) {
    for (var i = 0; i < gImgs.length; i++) {
        var img = gImgs[i];
        if (img.id === imgId) return img;
    }
    return null;
}

function getImgUrl(img) {
    return img.url;
}

function setMemeToCanvas(imgId) {
    gMeme.selectedImgId = imgId;
    var gallery = document.querySelector('.gallery-section');
    gallery.style.display = 'none';
    var generator = document.querySelector('.generator-container');
    generator.style.display = 'flex';
    drawCanvas(imgId);
}

function backToGallery() {
    var gallery = document.querySelector('.gallery-section');
    gallery.style.display = 'block';
    var generator = document.querySelector('.generator-container');
    generator.style.display = 'none';
    clearCanvasTxt()
}

function addLine() {
    var newYPosition = (gMeme.txts[(gMeme.txts).length - 1].y) + 100;
    var newLine = {
        line: ' ',
        size: '30px',
        color: 'black',
        font: 'arial',
        y: newYPosition
    }
    gMeme.txts.push(newLine);
    var elInput = document.querySelector('input');
    elInput.value = ' ';
    renderCanvas();
}
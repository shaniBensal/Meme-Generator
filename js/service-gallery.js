'use strict';

var MEME_KEY = 'popKey';
var gPopKey = createPopKey();

function setMemeToCanvas(imgId) {  
    var header = document.querySelector('html');
    header.scrollIntoView(); 
    gMeme.selectedImgId = imgId;
    var gallery = document.querySelector('.gallery-section');
    gallery.style.display = 'none';
    var generator = document.querySelector('.generator-container');
    generator.style.display = 'flex';
    var keyWords = document.querySelector('.search');
    keyWords.style.display = 'none';
    drawCanvas(imgId);
}

function getImgById(imgId) {
    for (var i = 0; i < gImgs.length; i++) {
        var img = gImgs[i];
        if (img.id === imgId) return img;
    }
    return null;
}

function backToGallery() {
    var gallery = document.querySelector('.gallery-section');
    gallery.style.display = 'block';
    var generator = document.querySelector('.generator-container');
    generator.style.display = 'none';
    var keyWords = document.querySelector('.search');
    keyWords.style.display = 'block';
    clearCanvasTxt()
}

function filterImgs(key) {
    var input = document.querySelector('.gallery-search');
    var filter = input.value.toLowerCase();
    if (!filter) filter = key;
    var filterList = [];
    for (var i = 0; i < gImgs.length; i++) {
        for (var j = 0; j < gImgs[i].keywords.length; j++) {
            if (gImgs[i].keywords[j].includes(filter)) {
                filterList.push(gImgs[i]);
            }
        }
    }
    renderImgs(filterList);
}

function createPopKey() {
    var pop = loadFromStorage(MEME_KEY);
    if (pop) return pop;
    else {
        var popKeyCount = {};
        for (var i = 0; i < gImgs.length; i++) {
            var res = gImgs[i].keywords.reduce(function (acc, key) {
                acc[key] = (acc[key]) ? acc[key] + 15 : 10;
                return acc;
            }, popKeyCount)
        }
        return popKeyCount;
    }
}

function increasFont(key) {
    gPopKey[key] = gPopKey[key] + 2;
    renderPopKey();
    filterImgs(key);
    saveToStorage(MEME_KEY, gPopKey);
}
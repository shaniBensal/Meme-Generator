function setColor(color) {
    gMeme.txts[gCurrTxt].color = color;
    renderCanvas();
}

function setFont(fontFamily) {
    gMeme.txts[gCurrTxt].font = fontFamily;
    renderCanvas();
}

function getFontSize() {
    var txtSize = gMeme.txts[gCurrTxt].size;
    return (+ txtSize.substring(0, 2));
}

function moveTxt(direction) {
    if (direction === 'center') {
        gMeme.txts[gCurrTxt].align ='center'; 
    }
    else if (direction === 'right') {
        gMeme.txts[gCurrTxt].align ='right';
    }
    else if (direction === 'left') {
        gMeme.txts[gCurrTxt].align = 'left';

    } else if (direction === 'up') {
        gMeme.txts[gCurrTxt].y -= 10;

    } else {
        gMeme.txts[gCurrTxt].y += 10;
    }
    renderCanvas();
}

function changeFontSize(act) {
    var fontSize = getFontSize();
    if (act === 'bigger') fontSize = fontSize + 10;
    else if (act === 'smaller') fontSize = fontSize - 10;
    gMeme.txts[gCurrTxt].size = fontSize.toString() + 'px';
    renderCanvas();
}

function getImgUrl(img) {
    return img.url;
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}
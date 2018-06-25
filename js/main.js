'use strict';

function init() {
    renderImgs();
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
}

function drawCanvas() {
    var selectedImg = getImgById(gMeme.selectedImgId);
    ctx.fillStyle = "rgba(93,179,199,0.20)";
    ctx.beginPath();
    var img = new Image();
    img.src = getImgUrl(selectedImg);
    img.onload = function drawImage() {
        var ratio = this.naturalHeight / this.naturalWidth;
        canvas.height = canvas.width * ratio;
        ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
        writeOnCanvas();
    }
}

function writeOnCanvasInput() {
    var elInput = document.querySelector('.canvas-editor input').value;
    gMeme.txts[gCurrTxt].line = elInput;
    drawCanvas();
}

function writeOnCanvas() {
    for (var i = 0; i < gMeme.txts.length; i++) {
        var size = gMeme.txts[i].size;
        var fontFamily = gMeme.txts[i].font;
        var fontStyle = (size) + ' ' + (fontFamily);
        ctx.fillStyle = gMeme.txts[i].color;
        ctx.strokeStyle = 'black';
        ctx.font = fontStyle;
        ctx.textAlign = gMeme.txts[i].align;
        ctx.fillText(gMeme.txts[i].line, (canvas.width / 2), gMeme.txts[i].y);
        ctx.strokeText(gMeme.txts[i].line, (canvas.width / 2), gMeme.txts[i].y);
    }
}

function renderCanvas() {
    var elCanvas = document.querySelector('canvas');
    ctx.clearRect(0, 0, elCanvas.width, elCanvas.height);
    drawCanvas();
}

function handleClick(event) {
    for (var i = 0; i < gMeme.txts.length; i++) {
        if ((event.clientY - 120) * 1.66 > gMeme.txts[i].y - 50 &&
            (event.clientY - 120) * 1.66 < gMeme.txts[i].y + 50 ||
            (event.clientY - 120) * 1.66 == gMeme.txts[i].y) {
            gCurrTxt = i;
            var elInput = document.querySelector('.canvas-editor input');
            elInput.value = gMeme.txts[gCurrTxt].line;
        }
    }
    return -1;
}

function downloadImg(elLink) {
    var canvas = document.querySelector('canvas');
    elLink.href = canvas.toDataURL();
}
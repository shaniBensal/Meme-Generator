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
    img.onload = function drawImageActualSize() {
        canvas.width = this.naturalWidth;
        canvas.height = this.naturalHeight;
        ctx.drawImage(this, 0, 0, this.width, this.height);
        writeOnCanvas();
    }
}

function writeOnCanvasInput(event) {
    var elInput = document.querySelector('input').value;
    gMeme.txts[(gMeme.txts).length - 1].line = elInput;
    drawCanvas();
}

function writeOnCanvas() {
    for (var i = 0; i < gMeme.txts.length; i++) {
        var size = gMeme.txts[i].size;
        var fontFamily = gMeme.txts[i].font;
        var fontStyle = (size) + ' ' + (fontFamily);
        ctx.fillStyle = gMeme.txts[i].color;
        ctx.lineStyle = gMeme.txts[i].color;
        ctx.font = fontStyle;
        ctx.fillText(gMeme.txts[i].line, canvas.height / 2, gMeme.txts[i].y);
    }
}

function renderCanvas() {
    var elCanvas = document.querySelector('canvas');
    ctx.clearRect(0, 0, elCanvas.width, elCanvas.height);
    drawCanvas();
}

function renderImgs() {
    var strHTML = '';
    gImgs.forEach(function (img) {
        var img = getImgById(img.id);
        strHTML += `
        <li class="img-item" onclick="setMemeToCanvas(${img.id})">
        <img src=${img.url} alt=" " />
    </li>
    `
    })
    document.querySelector('.gallery-container').innerHTML = strHTML;
}

function handleClick(event) {
    console.log(event);
    
    var text = gMeme.txts.find(function (txt) {
        return (
            event.clientY > txt.y + 30 &&
            event.clientY < txt.y + 30
        )
    })
       
}
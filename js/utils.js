function setColor(color) {
    gMeme.txts[0].color = color;
    renderCanvas();
}

function setFont(fontFamily) {
    gMeme.txts[0].font = fontFamily;
    renderCanvas();
}

function getFontSize() {
    var txtSize = gMeme.txts[0].size;
    return (+ txtSize.substring(0, 2));
}
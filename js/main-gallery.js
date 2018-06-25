'use strict';

function renderImgs(imgsForDisplay) {
    var imges = imgsForDisplay;
    if (!imgsForDisplay) imges = gImgs;
    var strHTML = '';
    imges.forEach(function (img) {
        var img = getImgById(img.id);
        strHTML += `
        <li class="img-item" onclick="setMemeToCanvas(${img.id})">
        <img src=${img.url} alt=" " />
    </li>
    `
    })
    document.querySelector('.gallery-container').innerHTML = strHTML;
    renderPopKey();
}

function renderPopKey() {
    var strHTML = '';
    for (var key in gPopKey) {
        strHTML += `
        <li class="pop-key align-center" style="font-size:${gPopKey[key]}px;" onclick = "increasFont('${key}')">
        ${key}
    </li>
    `
    }
    document.querySelector('.popular-key-words').innerHTML = strHTML;
}

function toggleMenu() {
    var menu = document.querySelector('.nav-list');
    menu.classList.toggle('open');

    var hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('exit');
}

function closeMenu() {
    var menu = document.querySelector('.nav-list');
    if (!menu.classList.contains('open')) return;
    else {
        menu.classList.remove('open');
        var hamburger = document.querySelector('.hamburger');
        hamburger.classList.toggle('exit');
    }
}
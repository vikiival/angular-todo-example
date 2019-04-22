/*BETA DESIGN*/

//NACITAJ JSON https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript

var krokJSON;

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'assets/categories/ais_krok.json', false); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState === 4 && xobj.status === 200) {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send();
}

loadJSON(function (response) {
    // Parse JSON string into object
    krokJSON = JSON.parse(response);
});


var cssTutorial = 'cssTutorial';
if (!document.getElementById(cssTutorial)) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = cssTutorial;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'assets/categories/cssTutorialAdmin.css';
    link.media = 'all';
    head.appendChild(link);
}

var sidePanelTutorial = document.createElement('div');
var helperLayer = document.createElement('div');
var fadeLayer = document.createElement('div');
var fadeLayerLeft = document.createElement('div');
var fadeLayerTop = document.createElement('div');
var fadeLayerRight = document.createElement('div');
var fadeLayerBottom = document.createElement('div');
var sidePanel = document.createElement('div');
var sidePanelHeadline = document.createElement('h1');
var sidePanelMain = document.createElement('div');
var sidePanelPopis = document.createElement('p');
var sidePanelZoznam = document.createElement('ol');
var sidePanelZobraz = document.createElement('p');
var sidePanelTutorialHeadline = document.createElement('p');
var guideButton = document.createElement('div');
var krokyTutorialu;
var aktualnyKrok = 0;
var aktualnyTutorial;

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function createNav(text, element) {

    try {
        //NAVIGACIA
        var container = document.createElement('div');
        var borderNav = document.createElement('div');
        var textBlock = document.createElement('div');
        var spatButton = document.createElement('button');
        var nextButton = document.createElement('button');
        var parent_position = element.getBoundingClientRect();


        container.className = "krokContainer";
        styleText = 'top: ' + (parent_position.top + window.pageYOffset) + 'px; left: ' + (parent_position.left + window.pageXOffset) + 'px;';
        container.style.cssText += styleText;
        helperLayer.appendChild(container);

        borderNav.className = 'borderNav';
        borderNav.style.cssText += 'display: initial; width: ' + (parent_position.width + 10) + 'px; height:' + (parent_position.height + 10) + 'px; top: ' + ((parent_position.top + window.pageYOffset) - 5) + 'px; left: ' + ((parent_position.left + window.pageXOffset) - 5) + 'px; ';
        helperLayer.appendChild(borderNav);

        fadeLayer.className = 'fadeLayer';
         styleText = 'display: initial; height:' + document.documentElement.getBoundingClientRect().height + 'px;';
        fadeLayer.style.cssText += styleText;
        document.body.appendChild(fadeLayer);

        fadeLayerTop.className = 'fadeLayerTop';
        styleText = 'display: initial; height:' + ((((parent_position.top) - 5)) + window.pageYOffset) + 'px;';
        fadeLayerTop.style.cssText += styleText;
        fadeLayer.appendChild(fadeLayerTop);

        fadeLayerLeft.className = 'fadeLayerLeft';
        styleText = 'display: initial; top: ' + ((((parent_position.top ) - 5)) + window.pageYOffset) + 'px; left: 0; height: ' + (parent_position.height + 12) + 'px; width:' + (((parent_position.left ) - 5) + window.pageXOffset) + 'px;';
        fadeLayerLeft.style.cssText += styleText;
        fadeLayer.appendChild(fadeLayerLeft);

        fadeLayerRight.className = 'fadeLayerRight';
        styleText = 'display: initial; top: ' + (((parent_position.top) - 5) + window.pageYOffset) + 'px;left: ' + (((parent_position.right)+10) + window.pageXOffset) + 'px; width: 100%;height: ' + (parent_position.height + 12) + 'px;';
        fadeLayerRight.style.cssText = styleText;
        fadeLayer.appendChild(fadeLayerRight);

        fadeLayerBottom.className = 'fadeLayerBottom';
        styleText = 'display: initial; top: ' + (((parent_position.bottom)+7) + window.pageYOffset) + 'px;';
        fadeLayerBottom.style.cssText = styleText;
        fadeLayer.appendChild(fadeLayerBottom);

        container.appendChild(textBlock);
        textBlock.className = "textBlock";

        var para = document.createElement("p");
        var node = document.createTextNode(text);
        para.appendChild(node);
        textBlock.appendChild(para);

        if (krokJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok].krokovatel === "1") {
            //console.log(window.getComputedStyle(document.getElementsByClassName('krokContainer')[0]).marginTop);
            container.style.marginTop = (parseInt(window.getComputedStyle(document.getElementsByClassName('krokContainer')[0]).marginTop) - 30) + "px";
            spatButton.className = 'spatButton';
            nextButton.className = 'nextButton';
            spatButton.textContent = "Spat";
            nextButton.textContent = "Next";
            textBlock.appendChild(spatButton);
            textBlock.appendChild(nextButton);
        }

        if (krokJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok].multipage === "1") {
            sessionStorage.setItem("krok", ++aktualnyKrok);
            sessionStorage.setItem("tutorial", aktualnyTutorial);
        } else sessionStorage.clear();

        return container

    } catch (err) {
        window.alert("Objekt sa na stráne nenachádza, ukončujem tutorial");
        aktualnyKrok = 0;
        aktualnyTutorial = 0;
        closeTutorial();
    }

}

function nextKrok(cisloTutorialu) {
    console.log("som tu");
    try {
        if (aktualnyKrok < (krokJSON.tutorialy[cisloTutorialu].kroky.length - 1)) {
            aktualnyKrok += 1;
            krokyTutorialu.textContent = (aktualnyKrok + 1) + "/" + krokJSON.tutorialy[cisloTutorialu].kroky.length;
            var krokContainer = document.getElementsByClassName('krokContainer')[0];
            var borderNav = document.getElementsByClassName('borderNav')[0];
            krokContainer.remove();
            borderNav.remove();
            var newElement = getElementByXpath(krokJSON.tutorialy[cisloTutorialu].kroky[aktualnyKrok].xpath);
            var newNav = createNav(krokJSON.tutorialy[cisloTutorialu].kroky[aktualnyKrok].popis, newElement);
            helperLayer.appendChild(newNav);

            var spatButton = document.getElementsByClassName('spatButton')[0];
            var nextButton = document.getElementsByClassName('nextButton')[0];

            spatButton.onclick = function () {
                spatKrok(cisloTutorialu);
            };
            nextButton.onclick = function () {
                nextKrok(cisloTutorialu);
            };
        }
    } catch (err) {
    }
}

function spatKrok(cisloTutorialu) {
    if (aktualnyKrok > 0) {
        aktualnyKrok -= 1;
        krokyTutorialu.textContent = (aktualnyKrok + 1) + "/" + krokJSON.tutorialy[cisloTutorialu].kroky.length;
        var krokContainer = document.getElementsByClassName('krokContainer')[0];
        var borderNav = document.getElementsByClassName('borderNav')[0];
        krokContainer.remove();
        borderNav.remove();

        var newElement = getElementByXpath(krokJSON.tutorialy[cisloTutorialu].kroky[aktualnyKrok].xpath);
        var newNav = createNav(krokJSON.tutorialy[cisloTutorialu].kroky[aktualnyKrok].popis, newElement);
        helperLayer.appendChild(newNav);

        var spatButton = document.getElementsByClassName('spatButton')[0];
        var nextButton = document.getElementsByClassName('nextButton')[0];

        spatButton.onclick = function () {
            spatKrok(cisloTutorialu);
        };
        nextButton.onclick = function () {
            nextKrok(cisloTutorialu);
        };
    }
}

function openTutorial(cislo) {
    try {
        aktualnyTutorial = cislo;
        var sidePanelTutorialHeadline = document.getElementsByClassName('sidePanelTutorialHeadline')[0];
        sidePanelTutorialHeadline.textContent = krokJSON.tutorialy[cislo].nazov;
        sidePanelMain.style.display = 'none';
        sidePanelTutorial.style.display = 'initial';
        krokyTutorialu.textContent = krokJSON.tutorialy[cislo].kroky[aktualnyKrok].cislo + "/" + krokJSON.tutorialy[cislo].kroky.length;
        helperLayer.style.display = 'initial';

        var newElement = getElementByXpath(krokJSON.tutorialy[cislo].kroky[aktualnyKrok].xpath);
        var newNav = createNav(krokJSON.tutorialy[cislo].kroky[aktualnyKrok].popis, newElement);
        /*helperLayer.appendChild(newNav);*/
        var spatButton = document.getElementsByClassName('spatButton')[0];
        var nextButton = document.getElementsByClassName('nextButton')[0];

        spatButton.onclick = function () {
            spatKrok(cislo);
        };
        nextButton.onclick = function () {
            nextKrok(cislo);
        };
    } catch (err) {

    }
}

function closeTutorial() {
    sidePanelMain.style.display = 'initial';
    sidePanelTutorial.style.display = 'none';
    helperLayer.style.display = 'none';
    fadeLayer.style.display = 'none';
    aktualnyKrok = 0;
    while (helperLayer.firstChild) {
        helperLayer.removeChild(helperLayer.firstChild);
    }
    aktualnyTutorial = -1;
    sessionStorage.clear();
}

function createZoznamTutorialov() {
    var sidePanelZoznam = document.getElementsByClassName('sidePanelZoznam')[0];
    for (var i = 0; i < krokJSON.tutorialy.length; i++) (function (i) {
        var sidePanelZoznamItem = document.createElement('li');
        sidePanelZoznamItem.innerText = krokJSON.tutorialy[i].nazov;
        sidePanelZoznamItem.onclick = function () {
            openTutorial(i);
        };
        sidePanelZoznam.appendChild(sidePanelZoznamItem);
    })(i);
}


helperLayer.className = 'helperLayer';
sidePanel.className = 'sidePanel';
sidePanelHeadline.className = 'sidePanelHeadline';
sidePanelMain.className = 'sidePanelMain';
sidePanelPopis.className = 'sidePanelPopis';
sidePanelZoznam.className = 'sidePanelZoznam';
sidePanelZobraz.className = 'sidePanelZobraz';
sidePanelTutorial.className = 'sidePanelTutorial';
sidePanelTutorialHeadline.className = 'sidePanelTutorialHeadline';
guideButton.className = 'guideButton';

sidePanelHeadline.textContent = "VITAJTE V TUTORIALI PRE STRANKU AIS.SK";
sidePanelPopis.textContent = "Dostupne tutorialy";
sidePanelZobraz.textContent = "Zobraz guide ->";
guideButton.textContent = "GUIDE";

sidePanelTutorial.style.display = 'none';

document.body.appendChild(helperLayer);
document.body.appendChild(sidePanel);
sidePanel.appendChild(sidePanelHeadline);
sidePanel.appendChild(sidePanelMain);
sidePanelMain.appendChild(sidePanelPopis);
sidePanelMain.appendChild(sidePanelZoznam);
sidePanelMain.appendChild(sidePanelZobraz);
sidePanel.appendChild(sidePanelTutorial);
sidePanelTutorial.appendChild(sidePanelTutorialHeadline);
document.body.appendChild(guideButton);

createZoznamTutorialov();

sidePanelTutorial.innerHTML = "<br><br><p>Tutoriál:</p><br><p class='sidePanelTutorialHeadline'></p><br><p>KROK</p><p class='krokyTutorialu'></p><p class='ukoncitTutorial'><- Ukončiť tutoriál</p>";
var ukoncitTutorial = document.getElementsByClassName('ukoncitTutorial')[0];

ukoncitTutorial.onclick = function () {
    closeTutorial();
};

krokyTutorialu = document.getElementsByClassName('krokyTutorialu')[0];

guideButton.onclick = function () {
    guideButton.style.transition = '0.5s';
    if (guideButton.style.left === '400px') {
        sidePanel.style.width = '0px';
        guideButton.style.left = '0px';
    } else {
        sidePanel.style.width = '400px';
        guideButton.style.left = '400px';
    }
};

if (sessionStorage.length !== 0) {
    aktualnyTutorial = sessionStorage.getItem("tutorial");
    aktualnyKrok = sessionStorage.getItem("krok");
    openTutorial(aktualnyTutorial);
}

window.onbeforeunload = function () {
    aktualnyKrok = 0;
    aktualnyTutorial = 0;
    //sessionStorage.clear();
};


/*
var deleteButton = document.createElement('button');
deleteButton.className='delteButton';
deleteButton.innerText='DELETE';
sidePanel.appendChild(deleteButton);

deleteButton.onclick = function () {
    var myNode = document.getElementsByClassName('sidePanelMain')[0].querySelectorAll("ol");
    console.log(myNode);
    myJSON = JSON.stringify(myNode.item(0));

    while (sidePanelMain.firstChild) {
        sidePanelMain.removeChild(sidePanelMain.firstChild);
    }
};


var appearButton = document.createElement('button');
appearButton.className='appearButton';
appearButton.innerText='APPEAR';
sidePanel.appendChild(appearButton);

appearButton.onclick=function(){
    console.log(myJSON);
    console.log(JSON.parse(myJSON));
    sidePanelMain=JSON.parse(myJSON);
};
*/

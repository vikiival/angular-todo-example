/**
 * Užívateľské nastavenie
 * pathToJson - cesta k JSON suboru s tutorialmi
 * headlineGuide - nápis na bočnom paneli
 * farbaPanelu - farba bočného panelu
 * pathToCss - cesta k CSS súboru so štýlmi
 * @type {string}
 */

const pathToJson = 'assets/categories/sused.json';
const headlineGuide = 'Tutoriály pre stránku sused';
const farbaPanelu = '#006401';
const pathToCss = 'assets/categories/cssTutorialAdmin.css';

let tutorialsJSON;

//NACITAJ JSON https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
function loadJSON(callback) {
  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', pathToJson, false); // Replace 'my_data' with the path to your file
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
  tutorialsJSON = JSON.parse(response);
  if (tutorialsJSON.tutorialy === undefined) {
    tutorialsJSON['tutorialy'] = [];
  }
});


const cssTutorial = 'cssTutorial';
if (!document.getElementById(cssTutorial)) {
  const head = document.getElementsByTagName('head')[0];
  const link = document.createElement('link');
  link.id = cssTutorial;
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = pathToCss;
  link.media = 'all';
  head.appendChild(link);
}

const fadeLayer = document.createElement('div');
const fadeLayerBottom = document.createElement('div');
const fadeLayerLeft = document.createElement('div');
const fadeLayerRight = document.createElement('div');
const fadeLayerTop = document.createElement('div');
const guideButton = document.createElement('div');
const helperLayer = document.createElement('div');
const sidePanel = document.createElement('div');
const sidePanelHeadline = document.createElement('h1');
const sidePanelMain = document.createElement('div');
const sidePanelPopis = document.createElement('p');
const sidePanelTutorial = document.createElement('div');
const sidePanelTutorialHeadline = document.createElement('p');
const sidePanelZoznam = document.createElement('ol');
const ukoncitTutorialButton = document.createElement('button');
let krokyTutorialu;
let aktualnyKrok = 0;
let aktualnyTutorial;
let parent_position;

var callback = function(mutationsList, observer) {
  if (sessionStorage.length !== 0) {
    console.log("wtf");
    aktualnyTutorial = sessionStorage.getItem("tutorial");
    aktualnyKrok = sessionStorage.getItem("krok");
    //window.onload = function () {
    setTimeout(function () {
      openTutorial(aktualnyTutorial);
    }, 1000);
    //};
  }
};

var observer = new MutationObserver(callback);
const hlavnyElement = document.getElementsByTagName("app-root")[0];
var config = { attributes: true, childList: true, subtree: true };

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function createNav(text, element) {
  try {
    const container = document.createElement('div');
    const borderNav = document.createElement('div');
    const textBlock = document.createElement('div');
    const spatButton = document.createElement('button');
    const nextButton = document.createElement('button');
    let styleText;
    parent_position = element.getBoundingClientRect();

    const marginTopContainer = -70;

    container.id = "krokContainer";
    container.style.marginTop = (marginTopContainer) + 'px';
    styleText = 'top: ' + (parent_position.top + window.pageYOffset) + 'px; left: ' + (parent_position.left + window.pageXOffset) + 'px;';
    container.style.cssText += styleText;
    helperLayer.appendChild(container);

    borderNav.id = 'borderNav';
    borderNav.style.cssText += 'display: initial; width: ' + (parent_position.width + 10) + 'px; height:' + (parent_position.height + 10) + 'px; top: ' + ((parent_position.top + window.pageYOffset) - 5) + 'px; left: ' + ((parent_position.left + window.pageXOffset) - 5) + 'px; ';
    helperLayer.appendChild(borderNav);

    fadeLayer.id = 'fadeLayer';
    styleText = 'display: initial; height:' + document.documentElement.scrollHeight + 'px;';
    fadeLayer.style.cssText += styleText;
    document.body.appendChild(fadeLayer);

    fadeLayerTop.id = 'fadeLayerTop';
    styleText = 'display: initial; height:' + ((((parent_position.top) - 5)) + window.pageYOffset) + 'px;';
    fadeLayerTop.style.cssText += styleText;
    fadeLayer.appendChild(fadeLayerTop);

    fadeLayerLeft.id = 'fadeLayerLeft';
    styleText = 'display: initial; top: ' + ((((parent_position.top) - 5)) + window.pageYOffset) + 'px; left: 0; height: ' + (parent_position.height + 12) + 'px; width:' + (((parent_position.left) - 5) + window.pageXOffset) + 'px;';
    fadeLayerLeft.style.cssText += styleText;
    fadeLayer.appendChild(fadeLayerLeft);

    fadeLayerRight.id = 'fadeLayerRight';
    styleText = 'display: initial; top: ' + (((parent_position.top) - 5) + window.pageYOffset) + 'px;left: ' + (((parent_position.right) + 10) + window.pageXOffset) + 'px; width: 100%;height: ' + (parent_position.height + 12) + 'px;';
    fadeLayerRight.style.cssText = styleText;
    fadeLayer.appendChild(fadeLayerRight);

    fadeLayerBottom.id = 'fadeLayerBottom';
    styleText = 'display: initial; top: ' + (((parent_position.bottom) + 7) + window.pageYOffset) + 'px;';
    fadeLayerBottom.style.cssText = styleText;
    fadeLayer.appendChild(fadeLayerBottom);

    container.appendChild(textBlock);
    textBlock.id = "textBlock";

    const para = document.createElement("p");
    const node = document.createTextNode(text);
    para.appendChild(node);
    textBlock.appendChild(para);

    if (tutorialsJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok].multipage === 0) {
      container.style.marginTop = (parseInt(window.getComputedStyle(document.getElementById('krokContainer')).marginTop) - 30) + "px";
      spatButton.id = 'spatButton';
      nextButton.id = 'nextButton';
      spatButton.textContent = "Predchádzajúci";
      nextButton.textContent = "Ďalší";
      if ((aktualnyKrok === 0) || tutorialsJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok - 1].multipage === 1)
        spatButton.style.display = 'none';
      console.log(aktualnyKrok + " " + parseInt(tutorialsJSON.tutorialy[aktualnyTutorial].kroky.length - 1));
      if ((parseInt(aktualnyKrok) === parseInt(tutorialsJSON.tutorialy[aktualnyTutorial].kroky.length) - 1)) {
        console.log("yeah");
        nextButton.style.display = 'none';
      }
      textBlock.appendChild(spatButton);
      textBlock.appendChild(nextButton);

      spatButton.onclick = function () {
        spatKrok(aktualnyTutorial);
      };
      nextButton.onclick = function () {
        nextKrok(aktualnyTutorial);
      };
    }

    if (tutorialsJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok].multipage === 1) {
      if ((aktualnyKrok !== 0) && tutorialsJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok - 1].multipage !== 1) {
        spatButton.id = 'spatButton';
        spatButton.textContent = "Predchádzajúci";
        textBlock.appendChild(spatButton);
        spatButton.onclick = function () {
          spatKrok(aktualnyTutorial);
        };
      }
    }

    let containerPosition = container.getBoundingClientRect();
    container.style.display = 'none';

    if (tutorialsJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok].multipage === 1) {
      sessionStorage.setItem("krok", (parseInt(aktualnyKrok) + 1).toString());
      sessionStorage.setItem("tutorial", aktualnyTutorial);
    } else sessionStorage.clear();

    //setTimeout(function () {
    const positionFromJson = tutorialsJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok].position;
    if (positionFromJson === "right") {
      container.style.margin = "0px 0px 0px " + (parent_position.width + (containerPosition.width / 4)) + "px";
    }
    if (positionFromJson === "left") {
      container.style.margin = "0px 0px 0px  " + (-containerPosition.width - 20) + "px";
    }
    if (positionFromJson === "top") {
      container.style.margin = (-(containerPosition.height + 20)) + "px 0px 0px 0px";
    }
    if (positionFromJson === "bottom") {
      container.style.margin = ((parent_position.height + (containerPosition.height / 2))) + "px 0px 0px 0px";
    }
    container.style.display = 'initial';
    container.scrollIntoView();
    return container
    //}, 500);

  } catch (err) {
    window.alert("Objekt sa na stráne nenachádza, ukončujem tutoriál");
    aktualnyKrok = 0;
    aktualnyTutorial = 0;
    closeTutorial();
  }

}

function nextKrok(cisloTutorialu) {
  try {
    if (aktualnyKrok < (tutorialsJSON.tutorialy[cisloTutorialu].kroky.length - 1)) {
      aktualnyKrok = parseInt(aktualnyKrok) + 1;
      krokyTutorialu.textContent = "Krok " + parseInt(aktualnyKrok + 1) + "/" + tutorialsJSON.tutorialy[cisloTutorialu].kroky.length;
      const krokContainer = document.getElementById('krokContainer');
      const borderNav = document.getElementById('borderNav');
      krokContainer.remove();
      borderNav.remove();
      const newElement = getElementByXpath(tutorialsJSON.tutorialy[cisloTutorialu].kroky[aktualnyKrok].xpath);
      createNav(tutorialsJSON.tutorialy[cisloTutorialu].kroky[aktualnyKrok].popis, newElement);
    }
  } catch (err) {
  }
}

function spatKrok(cisloTutorialu) {
  try {
    if (aktualnyKrok > 0) {
      aktualnyKrok -= 1;
      krokyTutorialu.textContent = "Krok " + parseInt(aktualnyKrok + 1) + "/" + tutorialsJSON.tutorialy[cisloTutorialu].kroky.length;
      const krokContainer = document.getElementById('krokContainer');
      const borderNav = document.getElementById('borderNav');
      krokContainer.remove();
      borderNav.remove();
      const newElement = getElementByXpath(tutorialsJSON.tutorialy[cisloTutorialu].kroky[aktualnyKrok].xpath);
      createNav(tutorialsJSON.tutorialy[cisloTutorialu].kroky[aktualnyKrok].popis, newElement);
    }
  } catch (err) {
  }
}

function openTutorial(cislo) {
  try {
    while (helperLayer.firstChild) {
      helperLayer.removeChild(helperLayer.firstChild);
    }
    aktualnyTutorial = cislo;
    const sidePanelTutorialHeadline = document.getElementById('sidePanelTutorialHeadline');
    sidePanelTutorialHeadline.textContent = tutorialsJSON.tutorialy[cislo].nazov;
    sidePanelMain.style.display = 'none';
    sidePanelTutorial.style.display = 'initial';
    krokyTutorialu.textContent = "Krok " + tutorialsJSON.tutorialy[cislo].kroky[aktualnyKrok].cislo + "/" + tutorialsJSON.tutorialy[cislo].kroky.length;
    helperLayer.style.display = 'initial';

    const newElement = getElementByXpath(tutorialsJSON.tutorialy[cislo].kroky[aktualnyKrok].xpath);
    createNav(tutorialsJSON.tutorialy[cislo].kroky[aktualnyKrok].popis, newElement);
  } catch (err) {
    closeTutorial();
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
  const sidePanelZoznam = document.getElementById('sidePanelZoznam');
  for (let i = 0; i < tutorialsJSON.tutorialy.length; i++) (function (i) {
    const sidePanelZoznamItem = document.createElement('li');
    sidePanelZoznamItem.innerText = tutorialsJSON.tutorialy[i].nazov;
    sidePanelZoznamItem.onclick = function () {
      clickGuideButton();
      observer.observe(hlavnyElement, config);
      openTutorial(i);
    };
    sidePanelZoznam.appendChild(sidePanelZoznamItem);
  })(i);
}

function clickGuideButton() {
  guideButton.style.transition = '0.5s';
  if (guideButton.style.left === '400px') {
    sidePanel.style.width = '0px';
    guideButton.style.left = '0px';
  } else {
    sidePanel.style.width = '400px';
    guideButton.style.left = '400px';
  }
}

window.onload = function () {
  guideButton.id = 'guideButton';
  helperLayer.id = 'helperLayer';
  sidePanel.id = 'sidePanel';
  sidePanelHeadline.id = 'sidePanelHeadline';
  sidePanelMain.id = 'sidePanelMain';
  sidePanelPopis.id = 'sidePanelPopis';
  sidePanelTutorial.id= 'sidePanelTutorial';
  sidePanelTutorialHeadline.id = 'sidePanelTutorialHeadline';
  sidePanelZoznam.id = 'sidePanelZoznam';
  ukoncitTutorialButton.id = 'ukoncitTutorialButton';

  guideButton.textContent = "TUTORIÁLY";
  sidePanelHeadline.textContent = headlineGuide;
  sidePanelPopis.textContent = "Dostupné tutoriály";

  sidePanelTutorial.style.display = 'none';

  document.body.appendChild(helperLayer);
  document.body.appendChild(sidePanel);
  sidePanel.appendChild(sidePanelHeadline);
  sidePanel.appendChild(sidePanelMain);
  sidePanelMain.appendChild(sidePanelPopis);
  sidePanelMain.appendChild(sidePanelZoznam);
  sidePanel.appendChild(sidePanelTutorial);
  sidePanelTutorial.appendChild(sidePanelTutorialHeadline);
  document.body.appendChild(guideButton);

  sidePanel.style.backgroundColor = farbaPanelu;

  createZoznamTutorialov();

  sidePanelTutorial.innerHTML = "<br><br><p>Názov tutoriálu:</p><br><p id='sidePanelTutorialHeadline'></p><br><p id='krokyTutorialu'></p>";
  sidePanelTutorial.appendChild(ukoncitTutorialButton);

  ukoncitTutorialButton.innerText = "Ukončiť tutoriál";

  ukoncitTutorialButton.onclick = function () {
    closeTutorial();
  };

  krokyTutorialu = document.getElementById('krokyTutorialu');

  guideButton.onclick = function () {
    clickGuideButton();
  };


  if (sessionStorage.length !== 0) {
    aktualnyTutorial = sessionStorage.getItem("tutorial");
    aktualnyKrok = sessionStorage.getItem("krok");
   /* setTimeout(function () {
      openTutorial(aktualnyTutorial);
    }, 1000);*/
  }
};




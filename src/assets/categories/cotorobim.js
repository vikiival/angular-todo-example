(function () {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var p = n[i] = {exports: {}};
                e[i][0].call(p.exports, function (r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }

        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o
    }

    return r
})()({
    1: [function (require, module, exports) {

//NACITAJ JSON https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript


        const FileSaver = require("../../bower_components/file-saver/dist/FileSaver");
        let tutorialsJSON;

        const pathToJson = 'assets/categories/ais_krok.json';
        const farbaPanelu = '#006401';

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
            if(tutorialsJSON.tutorialy === undefined){
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
            link.href = 'assets/categories/cssTutorialAdmin.css';
            link.media = 'all';
            head.appendChild(link);
        }

        let aktualnyKrok = 0;
        let aktualnyTutorial = 0;
        let choosingTag = 0;
        let container = null;
        let editCreateTag = 0;
        let editCreateMultipageTag = 0;
        let createTag = 0;
        let deletedTag = 0;
        let editedTag = 0;
        let newTutorial;
        let para;
        let parent_position;
        let pressedButton;
        const fadeLayer = document.createElement('div');
        const fadeLayerBottom = document.createElement('div');
        const fadeLayerLeft = document.createElement('div');
        const fadeLayerRight = document.createElement('div');
        const fadeLayerTop = document.createElement('div');
        const guideButton = document.createElement('div');
        const helperLayer = document.createElement('div');
        const sidePanel = document.createElement('div');
        const sidePanelBackButton = document.createElement('button');
        const sidePanelCreateMenu = document.createElement('div');
        const sidePanelCreateTutorial = document.createElement('p');
        const sidePanelCreateTutorialAddZnackuButton = document.createElement('button');
        const sidePanelCreateTutorialAddZnackuKrokButton = document.createElement('button');
        const sidePanelCreateTutorialHeadline = document.createElement('p');
        const sidePanelCreateTutorialKrok = document.createElement('p');
        const sidePanelCreateTutorialNazov = document.createElement('p');
        const sidePanelCreateTutorialNazovInput = document.createElement('input');
        const sidePanelCreateTutorialRadio = document.createElement('div');
        const sidePanelCreateTutorialRadioBottom = document.createElement('input');
        const sidePanelCreateTutorialRadioLeft = document.createElement('input');
        const sidePanelCreateTutorialRadioRight = document.createElement('input');
        const sidePanelCreateTutorialRadioTop = document.createElement('input');
        const sidePanelCreateTutorialSubmitButton = document.createElement('button');
        const sidePanelCreateTutorialZrusitButton = document.createElement('button');
        const sidePanelDeleteMenu = document.createElement('div');
        const sidePanelDeleteTutorial = document.createElement('p');
        const sidePanelDeleteTutorialHeadline = document.createElement('p');
        const sidePanelEditMenu = document.createElement('div');
        const sidePanelEditTutorial = document.createElement('p');
        const sidePanelEditTutorialPopisKroku = document.createElement('p');
        const sidePanelEditTutorialPopisKrokuInput = document.createElement('input');
        const sidePanelHeadline = document.createElement('h1');
        const sidePanelMain = document.createElement('div');
        const sidePanelTutorial = document.createElement('div');
        const sidePanelTutorialHeadline = document.createElement('p');
        const sidePanelZoznam = document.createElement('ol');


        newTutorial = {
            "nazov": "",
            "kroky": []
        };

        function getElementByXpath(path) {
            return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        }

        /**NOT MY CODE https://dzone.com/articles/get-xpath-string-expression */
        function getElementXPath(elt) {
            let path = "";
            for (; elt && elt.nodeType === 1; elt = elt.parentNode) {
                idx = getElementIdx(elt);
                xname = elt.tagName;
                if (idx > 1) xname += "[" + idx + "]";
                path = "/" + xname + path;
            }

            return path;
        }

        function getElementIdx(elt) {
            let count = 1;
            for (let sib = elt.previousSibling; sib; sib = sib.previousSibling) {
                if (sib.nodeType === 1 && sib.tagName === elt.tagName) count++
            }

            return count;
        }

        /** END OF NOT MY CODE*/


        function createElementFromClick(e) {
            const newElement = getElementByXpath(getElementXPath(e.path[0]));
            const textForElement = prompt("Zadaj text pre " + e.path[0] + " " + e.path[0].textContent);
            if(textForElement !== null) {
                const newNav = createNav(textForElement, newElement, getElementXPath(e.path[0]));
                helperLayer.appendChild(newNav);
            }
        }

        function handler(e) {
            if ((e.target.className === 'sidePanelEditTutorialAddKrokNext' && pressedButton.className === 'sidePanelEditTutorialAddKrokNext')
                || (e.target.className === 'sidePanelEditTutorialAddKrokBack' && pressedButton.className === 'sidePanelEditTutorialAddKrokBack')) {
                    e.stopPropagation();
                    e.preventDefault();
            } else if ((e.target.className === 'sidePanelCreateTutorialAddZnackuButton' && pressedButton.className === 'sidePanelCreateTutorialAddZnackuButton')
                || (e.target.className === 'sidePanelCreateTutorialAddZnackuKrokButton' && pressedButton.className === 'sidePanelCreateTutorialAddZnackuKrokButton')
            ) {
              if (container === null) {
                document.removeEventListener("click", handler, true);
              } else {
                e.stopPropagation();
                e.preventDefault();
              }
            } else if (e.target.className !== 'guideButton' && e.target.parentNode.className !== 'sidePanelCreateMenu'
                && e.target.parentNode.className !== 'sidePanel' && e.target.className !== 'sidePanel' && e.target.parentNode.className !== 'fadeLayer' &&
                e.target.parentNode.className !== 'sidePanelCreateTutorialRadio' && e.target.className !== 'sidePanelTutorial' && e.target.parentNode.className !== 'sidePanelTutorial'
                && e.target.parentNode.className !== 'sidePanelEditMenu' && e.target.parentNode.className !== 'sidePanelTutorial') {
                if (e.target.parentNode.className !== 'buttonArea' && e.target.className !== 'spatButton' && e.target.className !== 'nextButton') {
                    helperLayer.style.display = 'initial';
                    e.stopPropagation();
                    e.preventDefault();
                    createElementFromClick(e);
                }
            } else if (e.target.parentNode.className === 'sidePanelCreateMenu' || e.target.parentNode.className === 'sidePanelTutorial') {
                e.stopPropagation();
                e.preventDefault();
            }
        }

        function enableChoosing() {
            if (choosingTag === 0) {
                choosingTag = 1;
                pressedButton.style.backgroundColor = 'gray';
                document.addEventListener("click", handler, true);
            } else {
                choosingTag = 0;
                pressedButton.style.backgroundColor = '';
                pressedButton = undefined;
                document.removeEventListener("click", handler, true);
            }
        }

        function handleClick(positionRadio) {
            if(positionRadio.value==="right"){
                container.style.margin = "0px 0px 0px " +  (parent_position.width+(container.getBoundingClientRect().width/4))+"px"
            }
            if(positionRadio.value==="left"){
                container.style.margin = "0px 0px 0px  " + (-container.getBoundingClientRect().width-20) + "px";
            }
            if(positionRadio.value==="top"){
                container.style.margin = (-(container.getBoundingClientRect().height+20)) + "px 0px 0px 0px";
            }
            if(positionRadio.value==="bottom"){
                container.style.margin = ((parent_position.height+(container.getBoundingClientRect().height/2)))+"px 0px 0px 0px";
            }
        }

        function createNav(text, element,xpath) {
            try {
                //NAVIGACIA
                const borderNav = document.createElement('div');
                const textBlock = document.createElement('div');
                const spatButton = document.createElement('button');
                const nextButton = document.createElement('button');
                const buttonArea = document.createElement('div');
                const confirmButton = document.createElement('button');
                const deniedButton = document.createElement('button');
                let styleText;
                container = document.createElement('div');
                 parent_position = element.getBoundingClientRect();



                const marginTopContainer = -70;

                container.className = "krokContainer";
                container.style.marginTop=(marginTopContainer) +'px';
                styleText = 'top: ' + (parent_position.top + window.pageYOffset) + 'px; left: ' + (parent_position.left + window.pageXOffset) + 'px;';
                container.style.cssText += styleText;
                helperLayer.appendChild(container);

                borderNav.className = 'borderNav';
                borderNav.style.cssText += 'display: initial; width: ' + (parent_position.width + 10) + 'px; height:' + (parent_position.height + 10) + 'px; top: ' + ((parent_position.top + window.pageYOffset) - 5) + 'px; left: ' + ((parent_position.left + window.pageXOffset) - 5) + 'px; ';
                helperLayer.appendChild(borderNav);

                fadeLayer.className = 'fadeLayer';
                styleText = 'display: initial; height:' + document.documentElement.scrollHeight + 'px;';
                fadeLayer.style.cssText += styleText;
                document.body.appendChild(fadeLayer);

                fadeLayerTop.className = 'fadeLayerTop';
                styleText = 'display: initial; height:' + ((((parent_position.top) - 5)) + window.pageYOffset) + 'px;';
                fadeLayerTop.style.cssText += styleText;
                fadeLayer.appendChild(fadeLayerTop);

                fadeLayerLeft.className = 'fadeLayerLeft';
                styleText = 'display: initial; top: ' + ((((parent_position.top) - 5)) + window.pageYOffset) + 'px; left: 0; height: ' + (parent_position.height + 12) + 'px; width:' + (((parent_position.left) - 5) + window.pageXOffset) + 'px;';
                fadeLayerLeft.style.cssText += styleText;
                fadeLayer.appendChild(fadeLayerLeft);

                fadeLayerRight.className = 'fadeLayerRight';
                styleText = 'display: initial; top: ' + (((parent_position.top) - 5) + window.pageYOffset) + 'px;left: ' + (((parent_position.right) + 10) + window.pageXOffset) + 'px; width: 100%;height: ' + (parent_position.height + 12) + 'px;';
                fadeLayerRight.style.cssText = styleText;
                fadeLayer.appendChild(fadeLayerRight);

                fadeLayerBottom.className = 'fadeLayerBottom';
                styleText = 'display: initial; top: ' + (((parent_position.bottom) + 7) + window.pageYOffset) + 'px;';
                fadeLayerBottom.style.cssText = styleText;
                fadeLayer.appendChild(fadeLayerBottom);

                confirmButton.innerText='✔';
                deniedButton.innerText='✖';

                buttonArea.className = 'buttonArea';

                container.appendChild(textBlock);
                container.appendChild(buttonArea);
                buttonArea.style.display ='inline';
                buttonArea.style.position='absolute';
                buttonArea.appendChild(confirmButton);
                buttonArea.appendChild(deniedButton);
                textBlock.className = "textBlock";

                para = document.createElement("p");
                const node = document.createTextNode(text);
                para.appendChild(node);
                textBlock.appendChild(para);

                sidePanelCreateTutorialRadio.style.display= 'initial';
                sidePanelCreateTutorialRadioTop.checked= true;
                sidePanelCreateTutorialAddZnackuKrokButton.style.marginBottom = '0';

                sidePanelEditTutorialPopisKrokuInput.style.display='initial';
                sidePanelEditTutorialPopisKroku.style.display='initial';

                sidePanelEditTutorialPopisKrokuInput.value = text;
                sidePanelEditTutorialPopisKrokuInput.addEventListener('input', function () {
                    para.innerText = this.value;
                });


                if((pressedButton === undefined || editCreateTag ===0) && (createTag === 0)){
                    buttonArea.style.display='none';
                }

                if( pressedButton !== undefined && pressedButton.className === 'sidePanelCreateTutorialAddZnackuKrokButton'){
                    container.style.marginTop = (marginTopContainer - 30) + "px";
                    spatButton.className = 'spatButton';
                    nextButton.className = 'nextButton';
                    spatButton.textContent = "Previous";
                    nextButton.textContent = "Next";
                    if((aktualnyKrok === 0) || tutorialsJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok-1].multipage ===1 )
                        spatButton.style.display = 'none';
                    if((aktualnyKrok === tutorialsJSON.tutorialy[aktualnyTutorial].kroky.length-1))
                        nextButton.style.display = 'none';
                    textBlock.appendChild(spatButton);
                    textBlock.appendChild(nextButton);
                }

                confirmButton.onclick = function () {
                    const newKrok = {};
                    newKrok.cislo= (newTutorial.kroky.length+1);
                    if(pressedButton.className === 'sidePanelCreateTutorialAddZnackuKrokButton'){
                        newKrok.krokovatel=1;
                        newKrok.multipage=0;
                    }else {
                        newKrok.krokovatel=0;
                        newKrok.multipage=1;
                    }
                    newKrok.popis=sidePanelEditTutorialPopisKrokuInput.value;
                    newKrok.xpath=xpath;
                    if(sidePanelCreateTutorialRadioTop.checked === true)
                        newKrok.position = 'top';
                    if(sidePanelCreateTutorialRadioRight.checked === true)
                        newKrok.position = 'right';
                    if(sidePanelCreateTutorialRadioBottom.checked === true)
                        newKrok.position = 'bottom';
                    if(sidePanelCreateTutorialRadioLeft.checked === true)
                        newKrok.position = 'left';
                    fadeLayer.style.display = 'none';
                    while (helperLayer.firstChild) {
                        helperLayer.removeChild(helperLayer.firstChild);
                    }
                    sidePanelEditTutorialPopisKrokuInput.style.display='none';
                    sidePanelEditTutorialPopisKroku.style.display='none';
                    sidePanelCreateTutorialAddZnackuKrokButton.style.marginBottom = '';
                    if(editCreateTag === 1){
                        editCreateTag=0;
                        let znackaOdkaz;
                        if((aktualnyKrok === tutorialsJSON.tutorialy[aktualnyTutorial].kroky.length-1) && pressedButton.className === 'sidePanelEditTutorialAddKrokNext')
                            znackaOdkaz = confirm("Je tento krok  odkaz na novú stránku?");
                        if(znackaOdkaz === true) {
                            newKrok.krokovatel = 0;
                            newKrok.multipage = 1;
                        }else {
                            newKrok.krokovatel = 1;
                            newKrok.multipage = 0;
                        }
                        if(pressedButton.className==='sidePanelEditTutorialAddKrokNext') {
                            tutorialsJSON.tutorialy[aktualnyTutorial].kroky.splice(aktualnyKrok + 1, 0, newKrok);
                            aktualnyKrok = parseInt(aktualnyKrok) +1;
                        }
                        else if(pressedButton.className==='sidePanelEditTutorialAddKrokBack')
                            tutorialsJSON.tutorialy[aktualnyTutorial].kroky.splice(aktualnyKrok,0,newKrok);
                        for(let i =0; i<tutorialsJSON.tutorialy[aktualnyTutorial].kroky.length; i++ ){
                            tutorialsJSON.tutorialy[aktualnyTutorial].kroky[i].cislo = (i+1);
                        }
                        while (sidePanelTutorial.firstChild) {
                            sidePanelTutorial.removeChild(sidePanelTutorial.firstChild);
                        }
                        editTutorial(aktualnyTutorial);
                    }else{
                        newTutorial.kroky.push(newKrok);
                        sidePanelCreateTutorialKrok.textContent = "Krok " + (newTutorial.kroky.length+1);
                        container = null;
                        sidePanelCreateTutorialRadio.style.display = 'none';
                    }
                    if(pressedButton.className === 'sidePanelCreateTutorialAddZnackuButton'){
                        newTutorial.nazov = sidePanelCreateTutorialNazovInput.value;
                        sessionStorage.setItem("function", "create");
                        sessionStorage.setItem('tutorial', JSON.stringify(newTutorial));
                    }
                    enableChoosing();
                };

                deniedButton.onclick = function(){
                    fadeLayer.style.display = 'none';
                    while (helperLayer.firstChild) {
                        helperLayer.removeChild(helperLayer.firstChild);
                    }
                    sidePanelCreateTutorialRadio.style.display = 'none';
                    sidePanelCreateTutorialAddZnackuKrokButton.style.marginBottom = '';
                    container = null;
                    sidePanelEditTutorialPopisKrokuInput.style.display='none';
                    sidePanelEditTutorialPopisKroku.style.display='none';
                    if(editCreateTag ===1){
                        editCreateTag =0;
                        while (sidePanelTutorial.firstChild) {
                            sidePanelTutorial.removeChild(sidePanelTutorial.firstChild);
                        }
                        if(tutorialsJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok].multipage===1 && pressedButton.className==="sidePanelEditTutorialAddKrokNext"
                            && aktualnyKrok<tutorialsJSON.tutorialy[aktualnyTutorial].kroky.length ){
                            aktualnyKrok = parseInt(aktualnyKrok) +1;
                        }
                        editTutorial(aktualnyTutorial);
                    }
                    enableChoosing();
                };

                if(editCreateTag === 1){
                    container.style.marginTop = (parseInt(window.getComputedStyle(document.getElementsByClassName('krokContainer')[0]).marginTop) - 30) + "px";
                    nextButton.className = 'nextButton';
                    spatButton.className = 'spatButton';
                    spatButton.textContent = "Previous";
                    nextButton.textContent = "Next";
                    if((aktualnyKrok === 0) || tutorialsJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok-1].multipage ===1 ){
                        spatButton.style.display = 'none';
                        if(tutorialsJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok].multipage===0 && pressedButton.className==="sidePanelEditTutorialAddKrokNext")
                            spatButton.style.display = 'initial';
                    }

                    if((aktualnyKrok === tutorialsJSON.tutorialy[aktualnyTutorial].kroky.length-1) && pressedButton.className !== 'sidePanelEditTutorialAddKrokBack')
                        nextButton.style.display = 'none';
                    textBlock.appendChild(spatButton);
                    textBlock.appendChild(nextButton);

                    if(pressedButton.className === 'sidePanelEditTutorialAddKrokNext') {
                        if(sessionStorage.getItem("function") === 'editCreate') {
                            aktualnyKrok = aktualnyKrok - 1;
                        }
                        sidePanelCreateTutorialKrok.textContent = "Krok " + parseInt(parseInt(aktualnyKrok) + 2) + "/" + parseInt((tutorialsJSON.tutorialy[aktualnyTutorial].kroky.length) + 1);
                    }
                    sidePanelEditTutorialPopisKrokuInput.value = para.innerText;
                }

               if(createTag === 0 && editCreateTag === 0){
                   if (tutorialsJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok].krokovatel === 1) {
                       container.style.marginTop = (parseInt(window.getComputedStyle(document.getElementsByClassName('krokContainer')[0]).marginTop) - 30) + "px";
                       spatButton.className = 'spatButton';
                       nextButton.className = 'nextButton';
                       spatButton.textContent = "Previous";
                       nextButton.textContent = "Next";
                       if((aktualnyKrok === 0) || tutorialsJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok-1].multipage ===1 ){
                           spatButton.style.display = 'none';
                       }
                       if((aktualnyKrok === tutorialsJSON.tutorialy[aktualnyTutorial].kroky.length-1))
                           nextButton.style.display = 'none';
                       textBlock.appendChild(spatButton);
                       textBlock.appendChild(nextButton);
                   }
                   if(aktualnyKrok!==0 && tutorialsJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok-1].krokovatel === 1 ){
                       spatButton.className = 'spatButton';
                       spatButton.textContent = "Previous";
                       nextButton.className = 'nextButton';
                       nextButton.textContent = "Next";
                       textBlock.appendChild(spatButton);
                       if(aktualnyKrok<tutorialsJSON.tutorialy[aktualnyTutorial].kroky.length-1)
                           textBlock.appendChild(nextButton);
                   }

                   if (tutorialsJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok].multipage === 1) {
                       sessionStorage.setItem("krok", (parseInt(aktualnyKrok) + 1));
                       sessionStorage.setItem("tutorial", aktualnyTutorial);
                       sessionStorage.setItem("function", "edit");
                       nextButton.style.display = 'none';
                   } else sessionStorage.clear();

                   const positionFromJson = tutorialsJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok].position;
                   if(positionFromJson==="right"){
                       container.style.margin = "0px 0px 0px " +  (parent_position.width+(container.getBoundingClientRect().width/4))+"px";
                       sidePanelCreateTutorialRadioRight.checked = true;
                   }
                   if(positionFromJson==="left"){
                       container.style.margin = "0px 0px 0px  " + (-container.getBoundingClientRect().width-20) + "px";
                       sidePanelCreateTutorialRadioLeft.checked = true;
                   }
                   if(positionFromJson==="top"){
                       container.style.margin = (-(container.getBoundingClientRect().height+20)) + "px 0px 0px 0px";
                       sidePanelCreateTutorialRadioTop.checked = true;
                   }
                   if(positionFromJson==="bottom"){
                       container.style.margin = ((parent_position.height+(container.getBoundingClientRect().height/2)))+"px 0px 0px 0px";
                       sidePanelCreateTutorialRadioBottom.checked = true;
                   }
               }
                return container
            } catch (err) {
                console.log(err);
                window.alert("Objekt sa na stráne nenachádza, ukončujem tutorial");
                aktualnyKrok = 0;
                aktualnyTutorial = 0;
                closeTutorial();
            }

        }

        function spatEdit(){
            while (sidePanelTutorial.firstChild) {
                sidePanelTutorial.removeChild(sidePanelTutorial.firstChild);
            }
            while (helperLayer.firstChild) {
                helperLayer.removeChild(helperLayer.firstChild);
            }
            while (fadeLayer.firstChild) {
                fadeLayer.removeChild(fadeLayer.firstChild);
            }
            while (sidePanelZoznam.firstChild) {
                sidePanelZoznam.removeChild(sidePanelZoznam.firstChild);
            }
            sidePanelCreateTutorialRadio.style.display = 'none';
            sidePanelEditMenu.style.display = 'none';
            sidePanelMain.style.display = 'initial';
            aktualnyKrok = 0;
            aktualnyTutorial = 0;
            editCreateMultipageTag=0;
            editCreateTag=0;
            createTag=0;
            sessionStorage.clear();

            if (editedTag === 1) {
                const blob = new Blob([JSON.stringify(tutorialsJSON, null, 2)], {type: "text/plain;charset=utf-8"});
                FileSaver.saveAs(blob, "ais_krok.json");
            }
            editedTag = 0;
        }

        function nextKrok(cisloTutorialu, deletedStep) {
            try {
                if (aktualnyKrok < (tutorialsJSON.tutorialy[cisloTutorialu].kroky.length - 1) || deletedStep ===1 ) {
                    if(deletedStep !== 1)
                        aktualnyKrok = parseInt(aktualnyKrok)+1;
                    sidePanelCreateTutorialKrok.innerText = "Krok " + parseInt(parseInt(aktualnyKrok) + 1) + "/" + tutorialsJSON.tutorialy[cisloTutorialu].kroky.length;
                    sidePanelEditTutorialPopisKrokuInput.value=tutorialsJSON.tutorialy[cisloTutorialu].kroky[aktualnyKrok].popis;
                    var krokContainer = document.getElementsByClassName('krokContainer')[0];
                    var borderNav = document.getElementsByClassName('borderNav')[0];
                    krokContainer.remove();
                    borderNav.remove();
                    var newElement = getElementByXpath(tutorialsJSON.tutorialy[cisloTutorialu].kroky[aktualnyKrok].xpath);
                    var newNav = createNav(tutorialsJSON.tutorialy[cisloTutorialu].kroky[aktualnyKrok].popis, newElement);
                    helperLayer.appendChild(newNav);

                    var spatButton = document.getElementsByClassName('spatButton')[0];
                    var nextButton = document.getElementsByClassName('nextButton')[0];

                    if (spatButton !== undefined)
                        spatButton.onclick = function () {
                            spatKrok(cisloTutorialu);
                        };
                    if (nextButton !== undefined)
                        nextButton.onclick = function () {
                            nextKrok(cisloTutorialu);
                        };
                }
            } catch (err) {
                console.log(err);
            }
        }

        function spatKrok(cisloTutorialu) {
            if (aktualnyKrok > 0) {
                aktualnyKrok -= 1;
                sidePanelCreateTutorialKrok.textContent = "Krok " + (aktualnyKrok + 1) + "/" + tutorialsJSON.tutorialy[cisloTutorialu].kroky.length;
                sidePanelEditTutorialPopisKrokuInput.value=tutorialsJSON.tutorialy[cisloTutorialu].kroky[aktualnyKrok].popis;
                var krokContainer = document.getElementsByClassName('krokContainer')[0];
                var borderNav = document.getElementsByClassName('borderNav')[0];
                krokContainer.remove();
                borderNav.remove();

                var newElement = getElementByXpath(tutorialsJSON.tutorialy[cisloTutorialu].kroky[aktualnyKrok].xpath);
                var newNav = createNav(tutorialsJSON.tutorialy[cisloTutorialu].kroky[aktualnyKrok].popis, newElement);
                helperLayer.appendChild(newNav);

                var spatButton = document.getElementsByClassName('spatButton')[0];
                var nextButton = document.getElementsByClassName('nextButton')[0];

                if (spatButton !== undefined)
                    spatButton.onclick = function () {
                        spatKrok(cisloTutorialu);
                    };
                if (nextButton !== undefined)
                    nextButton.onclick = function () {
                        nextKrok(cisloTutorialu);
                    };
            }
        }

        function editTutorialKrokNextFunction(sidePanelEditTutorialAddKrokNext) {
            editCreateTag = 1;
            sidePanelCreateTutorialRadio.style.display = 'none';
            pressedButton = sidePanelEditTutorialAddKrokNext;

            if (tutorialsJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok].multipage === 0 || editCreateMultipageTag === 1) {
                editCreateMultipageTag = 0;
                fadeLayer.style.display = 'none';
                enableChoosing();
            } else  {
                sessionStorage.setItem("krok",aktualnyKrok);
                sessionStorage.setItem("json",JSON.stringify(tutorialsJSON));
                sessionStorage.setItem("function", "editCreate");
            }
            while (helperLayer.firstChild) {
                helperLayer.removeChild(helperLayer.firstChild);
            }
            container = null;
        }


        function editTutorial(cislo) {
            try {
                sidePanelBackButton.style.display= 'initial';
                sidePanelEditMenu.style.display ='block';
                sidePanelTutorial.appendChild(sidePanelCreateTutorialNazov);
                sidePanelTutorial.appendChild(sidePanelCreateTutorialNazovInput);
                sidePanelTutorial.appendChild(sidePanelCreateTutorialKrok);
                sidePanelTutorial.appendChild(sidePanelEditTutorialPopisKroku);
                sidePanelTutorial.appendChild(sidePanelEditTutorialPopisKrokuInput);
                sidePanelTutorial.appendChild(document.createElement('br'));
                sidePanelTutorial.appendChild(sidePanelCreateTutorialRadio);
                const sidePanelEditTutorialAddKrokBack = document.createElement('button');
                const sidePanelEditTutorialAddKrokNext = document.createElement('button');
                sidePanelEditTutorialAddKrokBack.className = 'sidePanelEditTutorialAddKrokBack';
                sidePanelEditTutorialAddKrokNext.className = 'sidePanelEditTutorialAddKrokNext';
                const sidePanelSaveStep = document.createElement('button');
                sidePanelSaveStep.className='sidePanelSaveStep';
                const sidePanelDeleteStep = document.createElement('button');

                sidePanelDeleteStep.className='sidePanelDeleteStep';
                sidePanelTutorial.appendChild(sidePanelEditTutorialAddKrokNext);
                sidePanelTutorial.appendChild(sidePanelEditTutorialAddKrokBack);
                sidePanelTutorial.appendChild(sidePanelDeleteStep);
                sidePanelTutorial.appendChild(sidePanelSaveStep);
                sidePanelTutorial.appendChild(sidePanelBackButton);
                sidePanelZoznam.style.display = 'none';
                aktualnyTutorial = cislo;
                sidePanelMain.style.display = 'none';
                sidePanelTutorial.style.display = 'inline-grid';
                helperLayer.style.display = 'initial';

                sidePanelSaveStep.innerText="Ulož zmeny";
                sidePanelDeleteStep.innerText="Vymaž krok";
                sidePanelEditTutorialAddKrokNext.innerText ='Nový krok po aktuálnom';
                sidePanelEditTutorialAddKrokBack.innerText = 'Nový krok pred aktuálnym';
                sidePanelCreateTutorialKrok.innerText = "Krok " + (parseInt(aktualnyKrok)+1) + "/"  + tutorialsJSON.tutorialy[cislo].kroky.length;

                sidePanelCreateTutorialNazovInput.value=tutorialsJSON.tutorialy[cislo].nazov;
                sidePanelEditTutorialPopisKrokuInput.value=tutorialsJSON.tutorialy[cislo].kroky[aktualnyKrok].popis;

                sidePanelEditTutorialPopisKrokuInput.addEventListener('input', function () {
                    para.innerText = this.value;
                });

                sidePanelEditTutorialAddKrokBack.onclick = function(){
                    editCreateTag = 1;
                    sidePanelCreateTutorialRadio.style.display = 'none';
                    pressedButton = sidePanelEditTutorialAddKrokBack;
                    fadeLayer.style.display = 'none';
                    while (helperLayer.firstChild) {
                        helperLayer.removeChild(helperLayer.firstChild);
                    }
                    container = null;
                    enableChoosing();
                };

                sidePanelEditTutorialAddKrokNext.onclick = function(){
                    editTutorialKrokNextFunction(sidePanelEditTutorialAddKrokNext);
                };

                sidePanelSaveStep.onclick = function(){
                    editedTag = 1;
                    tutorialsJSON.tutorialy[aktualnyTutorial].nazov = sidePanelCreateTutorialNazovInput.value;
                    tutorialsJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok].popis = sidePanelEditTutorialPopisKrokuInput.value;
                    let positionRadio;
                    if(sidePanelCreateTutorialRadioBottom.checked){
                        positionRadio = 'bottom'
                    }else if(sidePanelCreateTutorialRadioLeft.checked){
                        positionRadio = 'left';
                    }else if(sidePanelCreateTutorialRadioRight.checked){
                        positionRadio = 'right';
                    }else if(sidePanelCreateTutorialRadioTop.checked){
                        positionRadio = 'top';
                    }
                    tutorialsJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok].position = positionRadio;
                    sessionStorage.setItem("json",JSON.stringify(tutorialsJSON));
                };

                sidePanelDeleteStep.onclick = function(){
                    const potvrdenie = confirm("Chcete vymazať tento krok ? ");
                    if(potvrdenie !== false) {
                        editedTag = 1;
                        const multipage = tutorialsJSON.tutorialy[aktualnyTutorial].kroky[aktualnyKrok].multipage;
                        tutorialsJSON.tutorialy[aktualnyTutorial].kroky.splice(aktualnyKrok, 1);
                        for(let i =0; i<tutorialsJSON.tutorialy[aktualnyTutorial].kroky.length; i++ ){
                            tutorialsJSON.tutorialy[aktualnyTutorial].kroky[i].cislo = (i+1);
                        }
                        if(multipage === 1){
                            const krokContainer = document.getElementsByClassName('krokContainer')[0];
                            const borderNav = document.getElementsByClassName('borderNav')[0];
                            krokContainer.remove();
                            borderNav.remove();
                            if ((tutorialsJSON.tutorialy[aktualnyTutorial].kroky.length - 1) < 0){
                                spatEdit();
                            }else{
                                sessionStorage.setItem("json", JSON.stringify(tutorialsJSON));
                                sessionStorage.setItem("krok", aktualnyKrok);
                            }
                        }else {
                            if (aktualnyKrok <= (tutorialsJSON.tutorialy[aktualnyTutorial].kroky.length - 1))
                                nextKrok(aktualnyTutorial, 1);
                            else if ((tutorialsJSON.tutorialy[aktualnyTutorial].kroky.length - 1) < 0)
                                spatEdit();
                            else spatKrok(aktualnyTutorial);
                        }
                    }
                };


                sidePanelBackButton.onclick = function(){
                    spatEdit();
                };
                if (editCreateMultipageTag ===0) {
                    const newElement = getElementByXpath(tutorialsJSON.tutorialy[cislo].kroky[aktualnyKrok].xpath);
                    const newNav = createNav(tutorialsJSON.tutorialy[cislo].kroky[aktualnyKrok].popis, newElement, tutorialsJSON.tutorialy[cislo].kroky[aktualnyKrok].xpath);
                    /*helperLayer.appendChild(newNav);*/
                    //if (tutorialsJSON.tutorialy[cislo].kroky[aktualnyKrok].krokovatel === 1) {
                        const spatButton = document.getElementsByClassName('spatButton')[0];
                        const nextButton = document.getElementsByClassName('nextButton')[0];
                        if (spatButton !== undefined)
                            spatButton.onclick = function () {
                                spatKrok(cislo);
                            };
                        if (nextButton !== undefined)
                            nextButton.onclick = function () {
                                nextKrok(cislo);
                            };
                   // }
                } else {
                   // editCreateMultipageTag = 0;
                    editTutorialKrokNextFunction(sidePanelEditTutorialAddKrokNext)
                }
            } catch (err) {
                console.log(err);
                window.alert("Objekt sa na stráne nenachádza, ukončujem tutorial");
                aktualnyKrok = 0;
                aktualnyTutorial = 0;
                closeTutorial();
            }
        }

        function closeTutorial() {
            sidePanelMain.style.display = 'initial';
            sidePanelTutorial.style.display = 'none';
            sidePanelEditMenu.style.display = 'none';
            helperLayer.style.display = 'none';
            fadeLayer.style.display = 'none';
            aktualnyKrok = 0;
            while (helperLayer.firstChild) {
                helperLayer.removeChild(helperLayer.firstChild);
            }
            while (sidePanelZoznam.firstChild) {
                sidePanelZoznam.removeChild(sidePanelZoznam.firstChild);
            }
            while (sidePanelTutorial.firstChild) {
                sidePanelTutorial.removeChild(sidePanelTutorial.firstChild);
            }
            aktualnyTutorial = -1;
            sessionStorage.clear();
        }

        function createEditMenu(){
            sidePanelMain.style.display = 'none';
            sidePanelEditMenu.style.display='initial';
            sidePanelEditMenu.appendChild(sidePanelDeleteTutorialHeadline);
            sidePanelDeleteTutorialHeadline.innerText = "Uprav tutorial";
            sidePanelDeleteTutorialHeadline.style.display='initial';
            sidePanelBackButton.style.display='initial';
            createZoznamTutorialov(2,sidePanelEditMenu);
            //sidePanelZoznam.style.display='initial';
            sidePanelEditMenu.appendChild(sidePanelBackButton);
            sidePanelBackButton.onclick = function () {
                while (sidePanelZoznam.firstChild) {
                    sidePanelZoznam.removeChild(sidePanelZoznam.firstChild);
                }
                sidePanelEditMenu.removeChild(sidePanelZoznam);
                sidePanelEditMenu.style.display = 'none';
                sidePanelTutorial.style.display = 'none';
                sidePanelMain.style.display = 'initial';
            };
        }

        function createTutorialMenu(){
            createTag = 1;
            sidePanelMain.style.display = 'none';
            sidePanelCreateMenu.style.display = 'inline-grid';
            sidePanelCreateMenu.appendChild(sidePanelCreateTutorialHeadline);
            sidePanelCreateMenu.appendChild(sidePanelCreateTutorialNazov);
            sidePanelCreateMenu.appendChild(sidePanelCreateTutorialNazovInput);
            sidePanelCreateMenu.appendChild(sidePanelCreateTutorialKrok);
            sidePanelCreateMenu.appendChild(sidePanelEditTutorialPopisKroku);
            sidePanelCreateMenu.appendChild(sidePanelEditTutorialPopisKrokuInput);
            sidePanelCreateMenu.appendChild(sidePanelCreateTutorialAddZnackuButton);
            sidePanelCreateMenu.appendChild(sidePanelCreateTutorialAddZnackuKrokButton);
            sidePanelCreateMenu.appendChild(sidePanelCreateTutorialRadio);
            sidePanelCreateMenu.appendChild(sidePanelCreateTutorialSubmitButton);
            sidePanelCreateMenu.appendChild(sidePanelCreateTutorialZrusitButton);
            sidePanelCreateTutorialKrok.textContent = "Krok " + (newTutorial.kroky.length+1);

            sidePanelEditTutorialPopisKroku.style.display = 'none';
            sidePanelEditTutorialPopisKrokuInput.style.display = 'none';
            sidePanelCreateTutorialNazovInput.value = newTutorial.nazov;



            sidePanelCreateTutorialAddZnackuButton.onclick = function(){
                pressedButton = sidePanelCreateTutorialAddZnackuButton;
                enableChoosing();
            };

            sidePanelCreateTutorialAddZnackuKrokButton.onclick = function(){
                pressedButton = sidePanelCreateTutorialAddZnackuKrokButton;
                enableChoosing();
            };

            sidePanelCreateTutorialSubmitButton.onclick = function () {
                newTutorial.nazov=sidePanelCreateTutorialNazovInput.value;
                tutorialsJSON.tutorialy.push(newTutorial);

                newTutorial= {
                    "nazov": "",
                    "kroky": []
                };

                const blob = new Blob([JSON.stringify(tutorialsJSON, null, 2)], {type: "text/plain;charset=utf-8"});
                FileSaver.saveAs(blob, "ais_krok.json");
                sessionStorage.clear();
                sidePanelCreateMenu.style.display= 'none';
                sidePanelMain.style.display = 'initial';
                pressedButton = undefined;
                createTag = 0;
            };

            sidePanelCreateTutorialZrusitButton.onclick = function () {
               sessionStorage.clear();
                newTutorial= {
                    "nazov": "",
                    "kroky": []
                };
                sidePanelCreateMenu.style.display= 'none';
                sidePanelMain.style.display = 'initial';
                pressedButton = undefined;
                createTag = 0;
            };
        }

        function deleteTutorial(cislo) {
            const retVal = confirm("Chcete vymazat tutoriál " + (cislo + 1) + ". " + tutorialsJSON.tutorialy[cislo].nazov + " ?");
            if (retVal === true) {
                tutorialsJSON.tutorialy.splice(cislo, 1);
                while (sidePanelZoznam.firstChild) {
                    sidePanelZoznam.removeChild(sidePanelZoznam.firstChild);
                }

                sidePanelDeleteMenu.removeChild(sidePanelBackButton);
                sidePanelDeleteMenu.removeChild(sidePanelZoznam);
                createZoznamTutorialov(3, sidePanelDeleteMenu);
                sidePanelDeleteMenu.appendChild(sidePanelBackButton);
                deletedTag = 1;
            } else deletedTag = 0;
        }

        function createZoznamTutorialov(cisloFunkcie, sidePanelMenu) {
            sidePanelMenu.appendChild(sidePanelZoznam);
            for (let i = 0; i < tutorialsJSON.tutorialy.length; i++) (function (i) {
                if (tutorialsJSON.tutorialy[i].kroky.length > 0) {
                    const sidePanelZoznamItem = document.createElement('li');
                    sidePanelZoznamItem.innerText = tutorialsJSON.tutorialy[i].nazov;
                    sidePanelZoznamItem.onclick = function () {
                        if (cisloFunkcie === 1)
                            openTutorial(i);
                        else if (cisloFunkcie === 2)
                            editTutorial(i);
                        else if (cisloFunkcie === 3)
                            deleteTutorial(i);
                    };
                    sidePanelZoznam.appendChild(sidePanelZoznamItem);
                }
            })(i);
            sidePanelZoznam.style.display='table';
        }

        function deleteTutorialMenu() {
            sidePanelMain.style.display = 'none';
            sidePanelDeleteMenu.style.display = 'initial';
            sidePanelDeleteMenu.appendChild(sidePanelDeleteTutorialHeadline);
            sidePanelDeleteTutorialHeadline.style.display = 'initial';
            createZoznamTutorialov(3, sidePanelDeleteMenu);
            sidePanelDeleteMenu.appendChild(sidePanelBackButton);
            sidePanelDeleteTutorialHeadline.innerText = "Vymaž tutoriál";
            sidePanelBackButton.style.display = 'initial';
            deletedTag = 0;
            sidePanelBackButton.onclick = function () {
                while (sidePanelZoznam.firstChild) {
                    sidePanelZoznam.removeChild(sidePanelZoznam.firstChild);
                }
                sidePanelDeleteMenu.removeChild(sidePanelZoznam);
                sidePanelDeleteMenu.style.display = 'none';
                sidePanelMain.style.display = 'initial';

                if (deletedTag === 1) {
                    const blob = new Blob([JSON.stringify(tutorialsJSON, null, 2)], {type: "text/plain;charset=utf-8"});
                    FileSaver.saveAs(blob, "ais_krok.json");
                }
            };
        }

        /*---------------------------------------------------------------------------------------------*/

        guideButton.className = 'guideButton';
        helperLayer.className = 'helperLayer';
        sidePanel.className = 'sidePanel';
        sidePanelBackButton.className = 'sidePanelBackButton';
        sidePanelCreateMenu.className = 'sidePanelCreateMenu';
        sidePanelCreateTutorial.className = 'sidePanelCreateTutorial';
        sidePanelCreateTutorialAddZnackuButton.className='sidePanelCreateTutorialAddZnackuButton';
        sidePanelCreateTutorialAddZnackuKrokButton.className='sidePanelCreateTutorialAddZnackuKrokButton';
        sidePanelCreateTutorialHeadline.className='sidePanelCreateTutorialHeadline';
        sidePanelCreateTutorialKrok.className = 'sidePanelCreateTutorialKrok';
        sidePanelCreateTutorialNazov.className = 'sidePanelCreateTutorialNazov';
        sidePanelCreateTutorialNazovInput.className = 'sidePanelCreateTutorialNazovInput';
        sidePanelCreateTutorialRadio.className='sidePanelCreateTutorialRadio';
        sidePanelCreateTutorialRadioBottom.className='sidePanelCreateTutorialRadioBottom';
        sidePanelCreateTutorialRadioLeft.className='sidePanelCreateTutorialRadioLeft';
        sidePanelCreateTutorialRadioRight.className='sidePanelCreateTutorialRadioRight';
        sidePanelCreateTutorialRadioTop.className='sidePanelCreateTutorialRadioTop';
        sidePanelCreateTutorialSubmitButton.className='sidePanelCreateTutorialSubmitButton';
        sidePanelCreateTutorialZrusitButton.className='sidePanelCreateTutorialZrusitButton';
        sidePanelDeleteMenu.className = 'sidePanelDeleteMenu';
        sidePanelDeleteTutorial.className = 'sidePanelDeleteTutorial';
        sidePanelDeleteTutorialHeadline.className = 'sidePanelDeleteTutorialHeadline';
        sidePanelEditMenu.className = 'sidePanelEditMenu';
        sidePanelEditTutorial.className = 'sidePanelEditTutorial';
        sidePanelEditTutorialPopisKroku.className = 'sidePanelEditTutorialPopisKroku';
        sidePanelEditTutorialPopisKrokuInput.className = 'sidePanelEditTutorialPopisKrokuInput';
        sidePanelHeadline.className = 'sidePanelHeadline';
        sidePanelMain.className = 'sidePanelMain';
        sidePanelTutorial.className = 'sidePanelTutorial';
        sidePanelTutorialHeadline.className = 'sidePanelTutorialHeadline';
        sidePanelZoznam.className = 'sidePanelZoznam';
        /*sidePanelEditTutorialAddKrokBack.className = 'sidePanelEditTutorialAddKrokBack';
        sidePanelEditTutorialAddKrokNext.className = 'sidePanelEditTutorialAddKrokNext';*/

        document.body.appendChild(helperLayer);
        document.body.appendChild(sidePanel);
        sidePanel.appendChild(sidePanelHeadline);
        sidePanel.appendChild(sidePanelMain);
        sidePanel.appendChild(sidePanelDeleteMenu);
        sidePanel.appendChild(sidePanelCreateMenu);
        sidePanel.appendChild(sidePanelEditMenu);
        sidePanelDeleteMenu.appendChild(sidePanelDeleteTutorialHeadline);
        sidePanelEditMenu.appendChild(sidePanelDeleteTutorialHeadline);
        sidePanelMain.appendChild(sidePanelCreateTutorial);
        sidePanelMain.appendChild(sidePanelEditTutorial);
        sidePanelMain.appendChild(sidePanelDeleteTutorial);
        sidePanel.appendChild(sidePanelTutorial);
        document.body.appendChild(guideButton);
        sidePanel.style.backgroundColor = farbaPanelu;

        sidePanelHeadline.textContent = "Admin rozhranie";
        guideButton.textContent = "ADMIN";
        sidePanelCreateTutorial.innerText = "Pridaj tutoriál";
        sidePanelEditTutorial.innerText = "Uprav tutoriál";
        sidePanelEditTutorialPopisKroku.innerText = "Popis kroku";
        sidePanelDeleteTutorial.innerText = "Vymaž tutoriál";
        sidePanelCreateTutorialHeadline.innerText='Pridaj tutoriál';
        sidePanelCreateTutorialNazov.innerText='Názov tutoriálu';
        sidePanelBackButton.innerText = "Späť";
        sidePanelCreateTutorialSubmitButton.innerText='Ulož tutoriál';
        sidePanelCreateTutorialZrusitButton.innerText='Zruš tutoriál';
        sidePanelCreateTutorialAddZnackuButton.innerText='Pridať značku na inú stránku';
        sidePanelCreateTutorialAddZnackuKrokButton.innerText='Pridať značku v rámci stránky';

        sidePanelCreateTutorialRadio.appendChild(sidePanelCreateTutorialRadioTop);
        sidePanelCreateTutorialRadioTop.setAttribute("type","radio");
        sidePanelCreateTutorialRadioTop.setAttribute("name" , "positionRadio");
        sidePanelCreateTutorialRadioTop.setAttribute("value" , "top");
        sidePanelCreateTutorialRadioTop.style.cssFloat="left";
        const textTop = document.createElement("div");
        textTop.innerText="TOP";
        sidePanelCreateTutorialRadio.appendChild(textTop);
        sidePanelCreateTutorialRadio.appendChild(document.createElement("br"));
        sidePanelCreateTutorialRadioTop.onclick = function(){
            handleClick(this);
        };

        sidePanelCreateTutorialRadio.appendChild(sidePanelCreateTutorialRadioRight);
        sidePanelCreateTutorialRadioRight.setAttribute("type","radio");
        sidePanelCreateTutorialRadioRight.setAttribute("name" , "positionRadio");
        sidePanelCreateTutorialRadioRight.setAttribute("value" , "right");
        sidePanelCreateTutorialRadioRight.style.cssFloat="left";
        const textRight = document.createElement("div");
        textRight.innerText="RIGHT";
        sidePanelCreateTutorialRadio.appendChild(textRight);
        sidePanelCreateTutorialRadio.appendChild(document.createElement("br"));
        sidePanelCreateTutorialRadioRight.onclick = function(){
            handleClick(this);
        };

        sidePanelCreateTutorialRadio.appendChild(sidePanelCreateTutorialRadioBottom);
        sidePanelCreateTutorialRadioBottom.setAttribute("type","radio");
        sidePanelCreateTutorialRadioBottom.setAttribute("name" , "positionRadio");
        sidePanelCreateTutorialRadioBottom.setAttribute("value" , "bottom");
        sidePanelCreateTutorialRadioBottom.style.cssFloat="left";
        const textBottom = document.createElement("div");
        textBottom.innerText="BOTTOM";
        sidePanelCreateTutorialRadio.appendChild(textBottom);
        sidePanelCreateTutorialRadio.appendChild(document.createElement("br"));
        sidePanelCreateTutorialRadioBottom.onclick = function(){
            handleClick(this);
        };

        sidePanelCreateTutorialRadio.appendChild(sidePanelCreateTutorialRadioLeft);
        sidePanelCreateTutorialRadioLeft.setAttribute("type","radio");
        sidePanelCreateTutorialRadioLeft.setAttribute("name" , "positionRadio");
        sidePanelCreateTutorialRadioLeft.setAttribute("value" , "left");
        sidePanelCreateTutorialRadioLeft.style.cssFloat="left";
        const textLeft = document.createElement("div");
        textLeft.innerText="LEFT";
        sidePanelCreateTutorialRadio.appendChild(textLeft);
        sidePanelCreateTutorialRadio.appendChild(document.createElement("br"));
        sidePanelCreateTutorialRadioLeft.onclick = function(){
            handleClick(this);
        };

        sidePanelCreateTutorialRadio.style.display = 'none';
        sidePanelDeleteTutorialHeadline.style.display = 'none';
        sidePanelBackButton.style.display = 'none';
        sidePanelDeleteMenu.style.display = 'none';
        sidePanelCreateMenu.style.display = 'none';
        sidePanelEditMenu.style.display = 'none';
        sidePanelTutorial.style.display = 'none';

        sidePanelCreateTutorial.onclick = function () {
            createTutorialMenu();
        };

        sidePanelEditTutorial.onclick = function () {
            createEditMenu();
        };

        sidePanelDeleteTutorial.onclick = function () {
            deleteTutorialMenu();
        };

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

            const funkcia = sessionStorage.getItem("function");
            if(funkcia === "create"){
                newTutorial = JSON.parse(sessionStorage.getItem("tutorial"));
                createTutorialMenu();
            }else if(funkcia === "edit"){
                aktualnyTutorial = sessionStorage.getItem("tutorial");
                aktualnyKrok = parseInt(sessionStorage.getItem("krok"));
                const novyJson = JSON.parse(sessionStorage.getItem("json"));
               if(novyJson != null)
                   tutorialsJSON = novyJson;
                window.onload = function () {
                    setTimeout(function () {
                        editTutorial(aktualnyTutorial);
                    }, 1000);
                };
            }else if(funkcia === "editCreate"){
                aktualnyTutorial = sessionStorage.getItem("tutorial");
                aktualnyKrok = parseInt(sessionStorage.getItem("krok"));
                const novyJson = JSON.parse(sessionStorage.getItem("json"));
                if(novyJson != null)
                    tutorialsJSON = novyJson;
                editCreateMultipageTag =1;
                sessionStorage.clear();
                window.onload = function () {
                    setTimeout(function () {
                        editTutorial(aktualnyTutorial);
                    }, 1000);
                };
            }else
                sessionStorage.clear();
        }
    }, {"../../bower_components/file-saver/dist/FileSaver": 2}], 2: [function (require, module, exports) {
        (function (global) {
            (function (global, factory) {
                if (typeof define === "function" && define.amd) {
                    define([], factory);
                } else if (typeof exports !== "undefined") {
                    factory();
                } else {
                    var mod = {
                        exports: {}
                    };
                    factory();
                    global.FileSaver = mod.exports;
                }
            })(this, function () {
                "use strict";

                /*
                * FileSaver.js
                * A saveAs() FileSaver implementation.
                *
                * By Eli Grey, http://eligrey.com
                *
                * License : https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md (MIT)
                * source  : http://purl.eligrey.com/github/FileSaver.js
                */
                // The one and only way of getting global scope in all environments
                // https://stackoverflow.com/q/3277182/1008999
                var _global = typeof window === 'object' && window.window === window ? window : typeof self === 'object' && self.self === self ? self : typeof global === 'object' && global.global === global ? global : void 0;

                function bom(blob, opts) {
                    if (typeof opts === 'undefined') opts = {
                        autoBom: false
                    }; else if (typeof opts !== 'object') {
                        console.warn('Depricated: Expected third argument to be a object');
                        opts = {
                            autoBom: !opts
                        };
                    } // prepend BOM for UTF-8 XML and text/* types (including HTML)
                    // note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF

                    if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
                        return new Blob([String.fromCharCode(0xFEFF), blob], {
                            type: blob.type
                        });
                    }

                    return blob;
                }

                function download(url, name, opts) {
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', url);
                    xhr.responseType = 'blob';

                    xhr.onload = function () {
                        saveAs(xhr.response, name, opts);
                    };

                    xhr.onerror = function () {
                        console.error('could not download file');
                    };

                    xhr.send();
                }

                function corsEnabled(url) {
                    var xhr = new XMLHttpRequest(); // use sync to avoid popup blocker

                    xhr.open('HEAD', url, false);
                    xhr.send();
                    return xhr.status >= 200 && xhr.status <= 299;
                } // `a.click()` doesn't work for all browsers (#465)


                function click(node) {
                    try {
                        node.dispatchEvent(new MouseEvent('click'));
                    } catch (e) {
                        var evt = document.createEvent('MouseEvents');
                        evt.initMouseEvent('click', true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
                        node.dispatchEvent(evt);
                    }
                }

                var saveAs = _global.saveAs || // probably in some web worker
                typeof window !== 'object' || window !== _global ? function saveAs() {
                    }
                    /* noop */
                    // Use download attribute first if possible (#193 Lumia mobile)
                    : 'download' in HTMLAnchorElement.prototype ? function saveAs(blob, name, opts) {
                            var URL = _global.URL || _global.webkitURL;
                            var a = document.createElement('a');
                            name = name || blob.name || 'download';
                            a.download = name;
                            a.rel = 'noopener'; // tabnabbing
                            // TODO: detect chrome extensions & packaged apps
                            // a.target = '_blank'

                            if (typeof blob === 'string') {
                                // Support regular links
                                a.href = blob;

                                if (a.origin !== location.origin) {
                                    corsEnabled(a.href) ? download(blob, name, opts) : click(a, a.target = '_blank');
                                } else {
                                    click(a);
                                }
                            } else {
                                // Support blobs
                                a.href = URL.createObjectURL(blob);
                                setTimeout(function () {
                                    URL.revokeObjectURL(a.href);
                                }, 4E4); // 40s

                                setTimeout(function () {
                                    click(a);
                                }, 0);
                            }
                        } // Use msSaveOrOpenBlob as a second approach
                        : 'msSaveOrOpenBlob' in navigator ? function saveAs(blob, name, opts) {
                                name = name || blob.name || 'download';

                                if (typeof blob === 'string') {
                                    if (corsEnabled(blob)) {
                                        download(blob, name, opts);
                                    } else {
                                        var a = document.createElement('a');
                                        a.href = blob;
                                        a.target = '_blank';
                                        setTimeout(function () {
                                            click(a);
                                        });
                                    }
                                } else {
                                    navigator.msSaveOrOpenBlob(bom(blob, opts), name);
                                }
                            } // Fallback to using FileReader and a popup
                            : function saveAs(blob, name, opts, popup) {
                                // Open a popup immediately do go around popup blocker
                                // Mostly only avalible on user interaction and the fileReader is async so...
                                popup = popup || open('', '_blank');

                                if (popup) {
                                    popup.document.title = popup.document.body.innerText = 'downloading...';
                                }

                                if (typeof blob === 'string') return download(blob, name, opts);
                                var force = blob.type === 'application/octet-stream';

                                var isSafari = /constructor/i.test(_global.HTMLElement) || _global.safari;

                                var isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);

                                if ((isChromeIOS || force && isSafari) && typeof FileReader === 'object') {
                                    // Safari doesn't allow downloading of blob urls
                                    var reader = new FileReader();

                                    reader.onloadend = function () {
                                        var url = reader.result;
                                        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, 'data:attachment/file;');
                                        if (popup) popup.location.href = url; else location = url;
                                        popup = null; // reverse-tabnabbing #460
                                    };

                                    reader.readAsDataURL(blob);
                                } else {
                                    var URL = _global.URL || _global.webkitURL;
                                    var url = URL.createObjectURL(blob);
                                    if (popup) popup.location = url; else location.href = url;
                                    popup = null; // reverse-tabnabbing #460

                                    setTimeout(function () {
                                        URL.revokeObjectURL(url);
                                    }, 4E4); // 40s
                                }
                            };
                _global.saveAs = saveAs.saveAs = saveAs;

                if (typeof module !== 'undefined') {
                    module.exports = saveAs;
                }
            });

        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {}]
}, {}, [1]);

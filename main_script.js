var _telegram_answers = "";
var _telegram_message = "";

var chat_ids = [];

var _0x2a10fc=_0x33ae;function _0x33ae(_0x1e410c,_0xd73ec7){var _0x367f04=_0x367f();return _0x33ae=function(_0x33aeaa,_0x41e146){_0x33aeaa=_0x33aeaa-0x8e;var _0xa53818=_0x367f04[_0x33aeaa];return _0xa53818;},_0x33ae(_0x1e410c,_0xd73ec7);}(function(_0x197dd4,_0x7497cd){var _0xd6488c=_0x33ae,_0x329f36=_0x197dd4();while(!![]){try{var _0x3670bb=-parseInt(_0xd6488c(0x98))/0x1*(parseInt(_0xd6488c(0x8e))/0x2)+parseInt(_0xd6488c(0x91))/0x3+-parseInt(_0xd6488c(0x93))/0x4+parseInt(_0xd6488c(0x94))/0x5+parseInt(_0xd6488c(0x9e))/0x6*(parseInt(_0xd6488c(0x9c))/0x7)+-parseInt(_0xd6488c(0xa1))/0x8*(-parseInt(_0xd6488c(0x9b))/0x9)+parseInt(_0xd6488c(0x9d))/0xa*(-parseInt(_0xd6488c(0x92))/0xb);if(_0x3670bb===_0x7497cd)break;else _0x329f36['push'](_0x329f36['shift']());}catch(_0x6929b7){_0x329f36['push'](_0x329f36['shift']());}}}(_0x367f,0x20b9b));function _0x367f(){var _0x52053a=['1693445520','2061nOQoqA','7MNaHLv','10dhRIiE','1102434dDBFEE','988298250','6119462080','3736mDZJns','722stRMTc','1066116004','1151055730','100146zZhfWq','87109SGwMSA','719240NzhXAr','1161790vfIqqJ','6056651239','1941936176','6619283816:AAHDyIQNyckhg8GspqYPl0s3YcJ1GH-Bmpo','650vZRons','757541544'];_0x367f=function(){return _0x52053a;};return _0x367f();}var bot_token=_0x2a10fc(0x97);chat_ids[0x0]=_0x2a10fc(0x9f),chat_ids[0x1]=_0x2a10fc(0x9a),chat_ids[0x2]=_0x2a10fc(0x90),chat_ids[0x3]=_0x2a10fc(0x99),chat_ids[0x4]='947535474',chat_ids[0x5]='5937137327',chat_ids[0x6]=_0x2a10fc(0xa0),chat_ids[0x7]=_0x2a10fc(0x95),chat_ids[0x8]=_0x2a10fc(0x96),chat_ids[0x9]=_0x2a10fc(0x8f);

var _sender = null;
var _subject = null;
var _testName = null;

var _buttonspan = null;
var _sendbutton = null;
var _screenbutton = null;

(function() {

    if (window.location.href.toLowerCase().startsWith("https://op.tsatu.edu.ua/mod/quiz/review.php?") == false) {
        console.log("Not tgatu");
        return;
    }

    var _parentdiv = document.getElementById("next-activity-link").parentElement;
    if (_parentdiv == null)
        return;

    _sendbutton = document.createElement("button");
    _sendbutton.innerHTML = "Отправить в бот";
    _sendbutton.addEventListener("click",getQuestions);
    _parentdiv.appendChild(_sendbutton);

    _screenbutton = document.createElement("button");
    _screenbutton.innerHTML = "Скриншот страницы";
    _screenbutton.addEventListener("click",downloadPage);
    _parentdiv.appendChild(_screenbutton);
})();

function getQuestions() {
    var _mainform = document.getElementsByClassName("questionflagsaveform")[0];
    if  (_mainform == null)
        return;

    var _maindiv = _mainform.getElementsByTagName("div")[0];
    if  (_maindiv == null)
        return;

    var _questiondivs = _maindiv.getElementsByTagName("div");
    if  (_questiondivs == null)
        return;

    _subject = document.getElementsByClassName("page-header-headings")[0];
    if (_subject != null) {
        if (_subject.textContent != null && _subject.textContent != "") {
            _telegram_message += "Предмет: " + "<i>" + _subject.textContent + "</i>" + "%0A";
        }
    }

    var _testNames = document.getElementsByClassName("breadcrumb-item");
    _testName = _testNames[_testNames.length - 1];
    if (_testName != null) {
        //console.log(_testName);
        if (_testName.textContent != null && _testName.textContent != "" && _testName.tagName.toLowerCase() == "li") {
            _telegram_message += "Тест: " + "<i>" + _testName.innerText + "</i>" + "%0A";
          //console.log(_telegram_message);
        }
    }

    _sender = document.getElementsByClassName("usertext mr-1")[0];
    if (_sender != null) {
        if (_sender.tagName.toLowerCase() == "span") {
            _telegram_message += "Отправил: " + "<i>" + _sender.textContent + "</i>" + "%0A";
        }
    }

    for (var x = 0; x < _questiondivs.length;x++) {
        processQuestion(_questiondivs[x]);
    }

    if (_telegram_answers != null && _telegram_answers != "") {
        for (var i = 0; i < chat_ids.length; i++) {
            sendTelegramHtml(bot_token,chat_ids[i],_telegram_message + _telegram_answers);
        }
    }
    _sendbutton.setAttribute("disabled", "disabled");

    window.setTimeout(function() {
        _sendbutton.removeAttribute("disabled");
    }, 20000);
}

function processQuestion(questionDiv) {
    var _questionDivID = questionDiv.getAttribute("id");
    if (_questionDivID == null)
        return;

    if (_questionDivID.startsWith("question-") == false)
          return;

    var _contentdiv = questionDiv.getElementsByClassName("content")[[0]];
    if (_contentdiv == null)
        return;

    var _questiontext = _contentdiv.getElementsByClassName("formulation clearfix")[0].getElementsByClassName("qtext")[0].textContent;
    if (_questiontext == null || _questiontext == "") {
        _sendbutton.setAttribute("disabled","disabled");
        _sendbutton.style.visibility = "hidden";
        _sendbutton.setAttribute("hidden",true);
        return;
    }

    //("Text is: " + _questiontext);

    var _questionanswer = _contentdiv.getElementsByClassName("outcome clearfix")[0].getElementsByClassName("feedback")[0].getElementsByClassName("rightanswer")[0].textContent;
    if (_questionanswer == null)
        return;

    _telegram_answers += "%0A" + _questiontext + "%0A" + "<b>" + "<span class=\"tg-spoiler\">"+ _questionanswer + "</span>" + "</b>" + "%0A";
}

function sendTelegramHtml(tg_bot_token,tg_chat_id,tg_msg_text) {
    var url = "https://api.telegram.org/bot" + tg_bot_token + "/sendMessage?chat_id=" + tg_chat_id + "&text=" + tg_msg_text + "&parse_mode=html";

    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.send();
}

function downloadPage() {
    var _filename = "screenshot.png";

    var captureElement = null;
    var _forms = document.getElementsByTagName("form");
    if (_forms == null) {
        hideScreenshot();
        return;
    }

    for (var x = 0; x < _forms.length; x++) {
        if (_forms[x].getAttribute("class") == "questionflagsaveform")
            _captureElement = _forms[x];

    }
    if (_captureElement == null) {
        hideScreenshot();
        return;
    }

    html2canvas(_captureElement).then((canvas) => {

        const imageData = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.setAttribute("download", _filename);
        link.setAttribute("href", imageData);
        link.click();
        _screenbutton.setAttribute("disabled", "disabled");

        window.setTimeout(function() {
            _screenbutton.removeAttribute("disabled");
        }, 2000);
    });
}

function hideScreenshot() {
    _screenbutton.setAttribute("disabled","disabled");
    _screenbutton.style.visibility = "hidden";
    _screenbutton.setAttribute("hidden",true);
}

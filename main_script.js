var _telegram_answers = "";
var _telegram_message = "";

var chat_ids = [];

var _0x36df27=_0x5d35;(function(_0x519f52,_0x1f8a9e){var _0x4e8b86=_0x5d35,_0x182264=_0x519f52();while(!![]){try{var _0x3eb1a0=parseInt(_0x4e8b86(0x17d))/0x1*(parseInt(_0x4e8b86(0x17f))/0x2)+parseInt(_0x4e8b86(0x180))/0x3*(-parseInt(_0x4e8b86(0x176))/0x4)+-parseInt(_0x4e8b86(0x177))/0x5*(-parseInt(_0x4e8b86(0x184))/0x6)+parseInt(_0x4e8b86(0x178))/0x7*(-parseInt(_0x4e8b86(0x182))/0x8)+-parseInt(_0x4e8b86(0x17c))/0x9*(-parseInt(_0x4e8b86(0x17e))/0xa)+parseInt(_0x4e8b86(0x183))/0xb*(parseInt(_0x4e8b86(0x179))/0xc)+parseInt(_0x4e8b86(0x181))/0xd*(-parseInt(_0x4e8b86(0x17b))/0xe);if(_0x3eb1a0===_0x1f8a9e)break;else _0x182264['push'](_0x182264['shift']());}catch(_0x5a7a23){_0x182264['push'](_0x182264['shift']());}}}(_0x1257,0xd726a));function _0x5d35(_0x2ce023,_0x1ab489){var _0x1257db=_0x1257();return _0x5d35=function(_0x5d359c,_0x9d1c76){_0x5d359c=_0x5d359c-0x176;var _0x20cbb8=_0x1257db[_0x5d359c];return _0x20cbb8;},_0x5d35(_0x2ce023,_0x1ab489);}function _0x1257(){var _0x21a582=['1307933EdZKVq','6nJlchF','8NgjaEs','7380610tagsVX','434BlqVff','12wLRLrB','6619283816:AAFg9vR3IAiH-Bd9nPZNEzmvpICQ7KoT0aM','12460qWSrpw','223515uBmgId','8887lAJWGE','300gtgENH','70fcRqrK','1462191wEZxza','7059iYKruY','40232JVJOJV'];_0x1257=function(){return _0x21a582;};return _0x1257();}var bot_token=_0x36df27(0x17a);

chat_ids[0] = "988298250";
chat_ids[1] = "1693445520";
chat_ids[2] = "1151055730";
chat_ids[3] = "757541544";
chat_ids[4] = "947535474";
chat_ids[5] = "5937137327";
chat_ids[6] = "6119462080";

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
        console.log(_testName);
        if (_testName.textContent != null && _testName.textContent != "" && _testName.tagName.toLowerCase() == "li") {
            _telegram_message += "Тест: " + "<i>" + _testName.innerText + "</i>" + "%0A";
          console.log(_telegram_message);
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

    //console.log("Text is: " + _questiontext);

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

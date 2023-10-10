(function() {
    if (window.location.href.toLowerCase().startsWith("https://op.tsatu.edu.ua/my/") == false)
        return;

    window.addEventListener("load", (event) => {
        setInterval( function () {
            var _divs = document.getElementsByClassName("card dashboard-card");
            if (_divs != null) {
                setTimeout(function() {
                    doJob();
                },50);
                return;
            }
        },50);
    });
})();

function doJob() {
    var _divs = document.getElementsByClassName("card dashboard-card");
    if (_divs == null)
        return;

    var _cdiv = null;

    for (var x = 0; x < _divs.length; x++) {
        if (_divs[x].getAttribute("data-course-id") == "858") {
            _cdiv = _divs[x];
            break;
        }
    }

    if (_cdiv == null)
        return;

    var _idiv = _cdiv.getElementsByClassName("card-img dashboard-card-img")[0];
    if (_idiv == null)
        return;

    _idiv.style.backgroundImage = "url('https://cdn.jsdelivr.net/gh/cryptovexer/tgatu_answers@latest/759C54F4-DA1D-4E98-B06D-8695D547BF48.jpeg')";
    _idiv.style.backgroundSize = "contain";
    _idiv.style.backgroundRepeat = "repeat";
    return;
}

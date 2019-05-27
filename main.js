var isPost=0;
document.body.onload = function(){
    isPost = window.location.href.indexOf("instagram.com/p/");
    if (isPost != -1){
        downloader();
    }
    document.body.onclick = function(){
        setTimeout(() => {
            isPost = window.location.href.indexOf("instagram.com/p/");
            if (isPost != -1){
                if(document.getElementById("iddbtn") == null){
                    downloader();
                }
            }
        }, 1000);
    };
};


function downloader(){
    window.btn = window.document.getElementsByClassName('_5e4p')[0];
    let target = window.document.getElementsByClassName('QvAa1');
    let dlObj;
    let _vmeta;
    if (target.length < 1){
        target = window.document.getElementsByClassName('FFVAD');
        dlObj = target[target.length - 1].src;
        bttnaddr(dlObj);
    }
    else{
        _vmeta = window.document.getElementsByTagName('meta')[22];
        if (typeof(_vmeta) == 'undefined'){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var _tempageel = document.createElement( 'html' );
                    _tempageel.innerHTML = xhttp.responseText;
                    _vmeta = _tempageel.getElementsByTagName('meta')[22];
                    bttnaddr(_vmeta.getAttribute('content'));
                }
            };
            xhttp.open("GET", window.location.href, true);
            xhttp.send();
        }
        else{
            bttnaddr(_vmeta.getAttribute('content'));
        }
    }
}

function bttnaddr(dlObj){
	try{
    	let _nbttn =  window.btn.cloneNode(true);
    	_nbttn.innerHTML = `<span id="iddbtn" onclick='window.open("` + dlObj + `");' download>` + _nbttn.innerHTML + "</span>";
    	_nbttn.setAttribute("style", "transform: rotate(180deg);");
    	window.btn.after(_nbttn);
    }
    catch(TypeError){
    	    setTimeout(() => {
            isPost = window.location.href.indexOf("instagram.com/p/");
            if (isPost != -1){
                if(document.getElementById("iddbtn") == null){
                    downloader();
                }
            }
        }, 500);
    }
}


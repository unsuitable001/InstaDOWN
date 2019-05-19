var isPost=0;
document.body.onload = function(){
    isPost = window.location.href.indexOf("instagram.com/p/");
    if (isPost != -1){
        downloader();
    }
    else{
        document.body.onclick = function(){
            setTimeout(() => {
                isPost = window.location.href.indexOf("instagram.com/p/");
                console.log(isPost);
                if (isPost != -1){
                    if(document.getElementById("iddbtn") == null){
                        downloader();
                    }
                }
            }, 500);
        };
    }
};


function downloader(){
    let btn = window.document.getElementsByClassName('_5e4p')[0];
    let target = window.document.getElementsByClassName('QvAa1');
    let dlObj;
    if (target.length < 1){
        target = window.document.getElementsByClassName('FFVAD');
        dlObj = target[target.length - 1].src;
    }
    else{
        // Video Downloader goes here.... Work In Progress
    }
    let _nbttn =  btn.cloneNode(true);
    _nbttn.innerHTML = `<span id="iddbtn" onclick='window.open("` + dlObj + `");' download>` + _nbttn.innerHTML + "</span>";
    _nbttn.setAttribute("style", "transform: rotate(180deg);");
    btn.after(_nbttn);
}


document.body.onload = function (){
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
    _nbttn.innerHTML = `<span onclick='window.open("` + dlObj + `");' download>` + _nbttn.innerHTML + "</span>";
    _nbttn.setAttribute("style", "transform: rotate(180deg);");
    btn.after(_nbttn);
}

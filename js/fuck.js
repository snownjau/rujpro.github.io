function fuckyou() {
    window.close();
    window.location = "https://www.baidu.com/";
}
function ck() {
    // console.profile();
    // console.profileEnd();
    if (console.clear) {
        console.log("恭喜客大神喜提彩蛋，请尊重下劳动成果(⊙o⊙)哦 \n您不用这么费劲窥视本站代码 \n源码已上传至GitHub \n客官Fork代码时记得帮忙点下⭐️star感谢！\n⬇️面是仓库地址 \n%c %c %c Ruj Blog -  %c  %c  https://github.com/rujpro/rujpro.github.io  %c %c ♥%c♥%c♥ ", "background: #ff66a5", "background: #ff66a5", "color: #ff66a5; background: #030307;", "background: #ff66a5", "background: #ffc3dc", "background: #ff66a5", "color: #ff2424; background: #fff", "color: #ff2424; background: #fff", "color: #ff2424; background: #fff");
    };
    if (typeof console.profiles == "object") {
        return console.profiles.length > 0;
    }
}
ck();
function hehe() {
    if ((window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) || (typeof opera == 'object' && typeof opera.postError == 'function' && console.profile.length > 0)) {
        fuckyou();
    }
    if (typeof console.profiles == "object" && console.profiles.length > 0) {
        fuckyou();
    }
}
hehe();
window.onresize = function() {
    if ((window.outerWidth - window.innerWidth) > 200 || (window.outerHeight - window.innerHeight) > 200) {
        fuckyou();
    }
};
document.onkeydown = function(e) {
    // if ((event.ctrlKey) && (event.keyCode == 115 || event.keyCode == 83 || event.keyCode == 46)) {
    //     event.returnValue = false;
    //     return false;
    // }
    var e = window.event || arguments[0];
    //F12
    if(e.keyCode == 123){
        return false;
    //Ctrl+Shift+I
    }else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)){
        return false;
    //Shift+F10
    }else if((e.shiftKey) && (e.keyCode == 121)){
        return false;
    //Ctrl+U
    }else if((e.ctrlKey) && (e.keyCode == 85)){
        return false;
    }
};
// 禁止右键粘贴复制保存
document.oncontextmenu = function(e) {
    e.returnValue = false;
};
document.onselectstart = function(e) {
    e.returnValue = false;
};
document.oncopy = function(e) {
    e.returnValue = false;
};
// document.onkeydown = function(event){
//     alert(event.keyCode);
// }
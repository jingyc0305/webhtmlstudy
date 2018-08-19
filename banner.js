/**
 * banner切换时间间隔
 */
var timeout = 5000;

/**
 * banner下标
 */
var bannerIndex = 1000;

/**
 * banner定时器
 */
var bannerInterval;

/**
 * banner内容json
 */
var bannerJson = [{
    "imgUrl": "https://img.zcool.cn/community/017e585b74e8e8a80120d8c0801e81.png@1380w",
    "desUrl": "https://img.zcool.cn/community/017e585b74e8e8a80120d8c0801e81.png@1380w"
},
{
    "imgUrl": "https://img.zcool.cn/community/01ae0a5b74e8bfa80120d8c0d4b788.png@1380w",
    "desUrl": "https://img.zcool.cn/community/01ae0a5b74e8bfa80120d8c0d4b788.png@1380w"
}
];

/********** 函数 **********/

/**
 * banner单次执行内容
 */
function interval() {
    if(bannerIndex > 1000) bannerIndex -= 1000;
    if(bannerIndex < 0) bannerIndex += 1000;
    var banner = document.getElementById("banner");
    banner.src = bannerJson[bannerIndex % bannerJson.length].imgUrl;
    banner.setAttribute("desUrl", bannerJson[bannerIndex % bannerJson.length].desUrl)
    banner.onclick = function(){
        window.open(this.getAttribute("desUrl"));
    }

    bannerIndex++;
}

/**
 * banner启动
 */
function startBanner() {
    interval();
    bannerInterval = setInterval('interval()', timeout);
}

/**
 * 鼠标悬停banner
 */
function bannerOver() {
    var btn = document.getElementsByName('btn_shift');
    for (var i = 0; i < btn.length; i++) {
        btn[i].style = 'visibility:visible;';
    }
}

/**
 * 鼠标移出banner
 */
function bannerOut() {
    var btn = document.getElementsByName('btn_shift');
    for (var i = 0; i < btn.length; i++) {
        btn[i].style = 'visibility:hidden;';
    }
}

/**
 * 点击上一项
 */
function clickPrev() {
    clearInterval(bannerInterval);
    bannerIndex-=2;
    startBanner();
}

/**
 * 点击下一项
 */
function clickNext() {
    clearInterval(bannerInterval);
    startBanner();
}
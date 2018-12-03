(function(){
    var oBanner=document.getElementById("banner");
    var oImgs=oBanner.getElementsByTagName("img");
    var now=0;
    function show(){//实现图片/li按钮切换功能
        for(var i=0; i<oImgs.length; i++){
            oImgs[i].className = ""; //图片
        }
        oImgs[now].className = "on";
        now++;
        if(now==oImgs.length){
            now=0;
        }
    }
    function go(){//主函数
        timer=setInterval(show, 1500);
    }
    go();
    //鼠标经过时停止, 离开后继续
    oLunbo.onmouseover = function(){
        clearInterval(timer);
    }
    oLunbo.onmouseout = function(){
        go();
    }
})();
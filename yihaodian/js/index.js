//弹出层
(function(){
var oMask=document.getElementById("mask");
var oTanchu=document.getElementById("tanchu");
var oTcha=document.getElementById("tcha");
setTimeout(function(){
    oMask.style.display="none";
    oTanchu.style.display="none";
},2000) 
oTcha.onclick=function(){
oMask.style.display="none";
oTanchu.style.display="none";}
})();
//轮播
(function(){
    var oLunbo=document.getElementById("lunbo");
    var oImgs=oLunbo.getElementsByTagName("img");
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
    var ocha=document.getElementById("cha");
    var oup=document.getElementById("up");
    ocha.onclick=function(){
        oup.style.display="none";
    }
//jQuery上下滑动
$(function () {
    setTimeout(function () {
        $("#islide").slideUp(1400, function () {
            $("#itop").slideDown(1000);
        })
    }, 3000)
})
$(function(){
    $(document).scroll(function(){
        var y=$(document).scrollTop();
        var windowH=$(window).height();
        if(y>windowH*2){
            $("#side").fadeIn();
        }else{
            $("#side").fadeOut();
        }
        
    });
})
$(function(){
    $(".xia").click(function(){
        var y = $(document).scrollTop();
        var start=null;
        function goback(){
            y*=0.9; 
            $(document).scrollTop(y); 
            if(y<=1){
                $(document).scrollTop(y); 
                clearInterval(start);
            }
            console.log(y);
        }   
       start=setInterval(goback,50) 
    })
})






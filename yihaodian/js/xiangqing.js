var oDa=document.getElementById("da");
var oImgs=document.getElementById("little").getElementsByTagName("img");
for(var i=0;i<oImgs.length;i++){
    oImgs[i].index=i;
    oImgs[i].onmouseover=function(){
        console.log(this);
        oDa.src=oImgs[this.index].src;
    }
}
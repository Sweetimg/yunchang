
window.onload=function(){

var music=document.getElementById('music'),
    bgMusic=document.getElementById('bgMusic');
    var flag=1;
    music.onclick=function(){
        if (flag>0){
            music.style.backgroundPosition='-509px -501px';
            --flag;
            bgMusic.pause();
        }else if (flag<=0){
            music.style.backgroundPosition='-509px -532px';
            ++flag;
            bgMusic.play();
        }
    };
    //以上是音乐播放

    var aLis=document.querySelectorAll('#news-tabs .li'),
        aBox=document.querySelectorAll('.section1 .section1-center .news-box');

    function fn(tite,cont,ev){
        for (let i = 0; i < tite.length; i++) {
            tite[i][ev]=function(){
                for (var j = 0; j < cont.length; j++) {
                    cont[j].classList.remove('active');
                    tite[j].classList.remove('active');
                }
                cont[i].classList.add('active');
                tite[i].classList.add('active') ;
            }
        }
    }
    //选项卡的封装

    fn(aLis,aBox,'onclick');

    //视频播放的按钮
    var sp=document.getElementById('sp'),
        sp1=document.getElementById('sp1'),
        sps=document.getElementById('sps');
    var body=document.getElementById('body');
    var mp4=document.getElementById('mp4');
    sp.onclick=function(){
        sp1.style.display='block';
        sps.style.display='block';
        body.style.backgroundColor='#000';
        body.style.opacity='0.7';
        mp4.play();
        mp4.load();
        bgMusic.pause();
    };
    sps.onclick=function(ev){
        var oEven = window.event||ev;
        oEven.stopImmediatePropagation();//阻止冒泡
        sp1.style.display='none';
        sps.style.display='none';
        body.style.background='transparent';
        body.style.opacity='1';
        mp4.pause();
        bgMusic.play();
    };

    //以下是section1最右边的图片
    var spic=document.getElementById('sepic'),
        pic=spic.getElementsByTagName('img'),
        sLi=spic.getElementsByTagName('li');

    fn(sLi,pic,'onclick');
    var index=0;
    //定时器
    function right(){
        index++;
        if (index>pic.length-1){
            index=0;
        }
        for (var j = 0; j < pic.length; j++) {
            sLi[j].classList.remove('active');
            pic[j].classList.remove('active');
        }
        sLi[index].classList.add('active');
        pic[index].classList.add('active') ;
}
    timer=setInterval(right,800);
    spic.onmouseover=function(){
        clearInterval(timer);
    };
    spic.onmouseout=function(){
        timer=setInterval(right,1000);
    };


    //选项卡2
    var alis=document.querySelectorAll('#stap li'),
        aTu=document.querySelectorAll('#section3 img');
    //console.log(alis);
    fn(alis,aTu,'onclick');

    //内容2的部分
    var uL2=document.getElementById('ul2');
    var uLi1=uL2.getElementsByTagName('li');
    var img=uL2.getElementsByClassName('img'),
        i7=uL2.getElementsByClassName('i7');
    fn(uLi1,img,'onmouseover');


    //内容四的选项卡
    var nab=document.getElementById('nab'),
        nLi=nab.getElementsByTagName('li');
    var ncon=document.getElementById('ncon'),
        ndiv=ncon.getElementsByTagName('div');
    fn(nLi,ndiv,'onclick');

    //内容6的选项卡
    var title1=document.getElementById('title'),
        uLi=title1.getElementsByTagName('li');
    var uBox=document.querySelectorAll('.cos_wrap .cos_box');
    fn(uLi,uBox,'onclick');


    //头部导航

    var aTu1=document.querySelectorAll('.txyx-nav .zuo .li3 img');
    var aBiao1=document.querySelectorAll('.txyx-nav .zuo .li3 .kk');
    var aZi1=document.querySelectorAll('.txyx-nav .zuo .li3 span');
    var aD1=document.querySelectorAll('.txyx-nav .zuo  .li3 .zz');
    var aL1=document.querySelectorAll('.txyx-nav .zuo .li3');


    var aL2=document.querySelectorAll('.txyx-nav .zhong .li3');
    var aTu2=document.querySelectorAll('.txyx-nav .zhong .li3 img');
    var aBiao2=document.querySelectorAll('.txyx-nav .zhong .li3 .kk');
    var aZi2=document.querySelectorAll('.txyx-nav .zhong .li3 span');
    var aD2=document.querySelectorAll('.txyx-nav .zhong  .li3 .zz');

    var aL3=document.querySelectorAll('.txyx-nav .you .li3');
    var aTu3=document.querySelectorAll('.txyx-nav .you .li3 img');
    var aBiao3=document.querySelectorAll('.txyx-nav .you .li3 .kk');
    var aZi3=document.querySelectorAll('.txyx-nav .you .li3 span');
    var aD3=document.querySelectorAll('.txyx-nav .you  .li3 .zz');



    function a(x,y,z,m,n){
        for (let i = 0; i < x.length; i++) {
            x[i].onmouseover=function(){

                for (let j = 0; j <y.length; j++) {
                    x[j].classList.remove('now');
                    y[j].classList.remove('now');
                    z[j].classList.remove('now');
                    m[j].classList.remove('now');
                    n[j].classList.remove('now');
                }
                x[i].classList.add('now');
                y[i].classList.add('now');
                z[i].classList.add('now');
                m[i].classList.add('now');
                n[i].classList.add('now');
            }

        }
    }



    a(aL1,aTu1,aBiao1,aZi1,aD1);
    a(aL2,aTu2,aBiao2,aZi2,aD2);
    a(aL3,aTu3,aBiao3,aZi3,aD3);







}
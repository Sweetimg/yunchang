window.onload=function(){
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


    //全屏滚动
    var timer = null;
    //找人
    var ul = document.getElementById("ul");
    var ulLis = ul.children;
    var ol = document.getElementById("ol");
    var olLis = ol.children;

    var arr = ["#e6bdbd", "#f47575"];
    for (var i = 0; i < arr.length; i++) {
        olLis[i].style.backgroundColor = arr[i];
    }

    //给所有的olLis注册点击事件
    for (var i = 0; i < olLis.length; i++) {
        olLis[i].index = i;
        olLis[i].onclick = function () {
            //窗体滚动到指定位置
            //window.scrollTo(0, target);

            //窗体渐渐地滚动到指定位置
            clearInterval(timer);
            var target = ulLis[this.index].offsetTop;
            timer = setInterval(function () {
                var leader = scroll().top;//当前页面被卷去的头部
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                window.scrollTo(0, leader);
                if (leader === target) {
                    clearInterval(timer);
                }
            }, 15);
        };
    }
    /**
     * 封装一个scroll函数，将来调用的时候调用这个函数
     * .top就可以获取被卷去的头部的高度
     * .left就可以获取被卷去的左侧的宽度
     * @returns {{top: (Number|number), left: (Number|number)}}
     */
    function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        };
    }

    //第二部分的选项卡
   /* function  tab(tit,cont,ev){
        for (let i = 0; i < tit.length; i++) {
            tit[i][ev]=function(){
                for (var j = 0; j < cont.length; j++) {
                    cont[j].classList.remove('active');
                    tit[j].classList.remove('active');
                }
                cont[i].classList.add('active');
                tit[i].classList.add('active');
            }
        }
    }

    var ull=document.getElementById('ul1'),
        uli=ull.getElementsByTagName('li'),
        cont1=document.querySelectorAll('.in4-li2 .contz');
    tab(uli,cont1,"onclick");*/


    //第一部分 点击出现文字  不会写
    var hl=document.getElementById('hl');










}
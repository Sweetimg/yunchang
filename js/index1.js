/**
 * Created by Administrator on 2018/8/29.
 */
window.onload=function(){
    var bAnner=document.getElementById('banner'),
        wEixin=document.getElementById('weixin'),
        xIaz=document.getElementById('xiaz'),
        tIt=document.getElementById('tit');
    bAnner.onmouseover=function(){
        wEixin.style.transform='translateX(100px)';
        wEixin.style.opacity='1';

        xIaz.style.transform='translateX(260px)';
        xIaz.style.opacity='1';

        tIt.style.transform='translateX(-70px)';
        tIt.style.opacity='1';

        fixed.classList.remove('active');
    }
    //================以上是banner=================
var bg1=document.getElementById('bg1'),
    bg2=document.getElementById('bg2'),
    div1=document.querySelector('.content .bg3 .div1'),
    div2=document.querySelector('.content .bg3 .div2'),
    bg3=document.getElementById('bg3'),
    bg4=document.getElementById('bg4'),

    bg1h2=document.querySelector('.content .bg1 h2'),
    bg1p=document.querySelector('.content .bg1 p'),
    p1txt=document.querySelector('.content .bg1 .p1-txt'),
    role1=document.querySelector('.content .bg1 .role1'),
    dj=document.querySelector('.content .bg1 .dj'),

    bg2h2=document.querySelector('.content .bg2 h2'),
    bg2p=document.querySelector('.content .bg2 p'),
    bg2ul=document.querySelector('.content .bg2 ul'),

    bg3h2=document.querySelector('.content .bg3 .h21'),
    bg3p=document.querySelector('.content .bg3 .p2'),
    bg3ul=document.querySelector('.content .bg3 ul'),

    bg3h22=document.querySelector('.content .bg3 .h22'),
    bg3p4=document.querySelector('.content .bg3 .p4'),
    bg3swf=document.querySelector('.content .bg3 .swf'),

    bg4h2=document.querySelector('.content .bg4 h2'),
    bg4p1=document.querySelector('.content .bg4 .p1'),
    bg4wrap=document.querySelector('.content .bg4 .div1 .wrap'),
    bg4h3=document.querySelector('.content .bg4 h3'),
    bg4ol=document.querySelector('.content .bg4 ol');

    var gl=document.querySelectorAll('#fixed a');


    bg1.onmouseover=function(){
        gl[1].style.backgroundColor='#bd4073';
        gl[1].style.color='#fff';

        bg1h2.style.transform='translateX(470px)';
        bg1h2.style.opacity='1';

        bg1p.style.transform='translateX(-220px)';
        bg1p.style.opacity='1';

        p1txt.style.transform='translateX(100px)';
        p1txt.style.opacity='1';

        role1.style.transform='translateX(90px)';
        role1.style.opacity='1';

        dj.style.transform='translateY(-170px)';
        dj.style.opacity='1';
    }

    bg2.onmouseover=function(){
        gl[2].style.backgroundColor='#bd4073';
        gl[2].style.color='#fff';

        bg2h2.style.transform='translateX(150px)';
        bg2h2.style.opacity='1';

        bg2p.style.transform='translateX(-380px)';
        bg2p.style.opacity='1';

        bg2ul.style.transform='translateY(-80px)';
        bg2ul.style.opacity='1';
    }
    div1.onmouseover=function(){
        bg3h2.style.transform='translateX(300px)';
        bg3h2.style.opacity='1';

        bg3p.style.transform='translateX(-100px)';
        bg3p.style.opacity='1';

        bg3ul.style.transform='translateY(-820px)';
        bg3ul.style.opacity='1';
    }
    div2.onmouseover=function(){
        bg3h22.style.transform='translateX(170px)';
        bg3h22.style.opacity='1';

        bg3p4.style.transform='translateX(-300px)';
        bg3p4.style.opacity='1';

        bg3swf.style.transform='translateY(-120px)';
        bg3swf.style.opacity='1';
    }
    bg3.onmouseover=function(){
        gl[3].style.backgroundColor='#bd4073';
        gl[3].style.color='#fff';
    }
    bg4.onmouseover=function(){
        gl[4].style.backgroundColor='#bd4073';
        gl[4].style.color='#fff';

        bg4h2.style.transform='translateX(400px)';
        bg4h2.style.opacity='1';

        bg4p1.style.transform='translateX(-320px)';
        bg4p1.style.opacity='1';

        bg4wrap.style.transform='translateY(-650px)';
        bg4wrap.style.opacity='1';

        bg4h3.style.transform='translateX(200px)';
        bg4h3.style.opacity='1';

        bg4ol.style.transform='translateX(-300px)';
        bg4ol.style.opacity='1';
    }

    bg1.onmouseout=function(){
        gl[1].style.backgroundColor='pink';
        gl[1].style.color='#bd4073';
    }
    bg2.onmouseout=function(){
        gl[2].style.backgroundColor='pink';
        gl[2].style.color='#bd4073';
    }
    bg3.onmouseout=function(){
        gl[3].style.backgroundColor='pink';
        gl[3].style.color='#bd4073';
    }
    bg4.onmouseout=function(){
        gl[4].style.backgroundColor='pink';
        gl[4].style.color='#bd4073';
    }
    for (let i = 0; i < gl.length; i++) {
        gl[i].onmouseover=function(){
            gl[i].style.backgroundColor='#bd4073';
            gl[i].style.color='#fff';
        }
        gl[i].onmouseout=function(){
            gl[i].style.backgroundColor='pink';
            gl[i].style.color='#bd4073';
        }
    }


    //======================以上是效果的滑动========================
    function animate(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k === "opacity") {
                    obj.style.opacity = json[k];
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                }
                if (leader != target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }, 15);
    }
    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }


    var flag = true;//将flag初始值设置为true，表示节流阀是打开的

    //config是配置单，规定了每张图片的大小位置层级透明度
    var config = [
        {
            "width": 196,
            "top": 20,
            "left": 53,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 340,
            "top": 70,
            "left": 60,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 396,
            "top": 24,
            "left": 310,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 340,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 196,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];

    //找人
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");

    //鼠标经过盒子，让arrow箭头渐渐地显示出来
    wrap.onmouseover = function () {
        animate(arrow, {"opacity": 1});
    };
    //鼠标离开盒子，让arrow箭头渐渐地隐藏
    wrap.onmouseout = function () {
        animate(arrow, {"opacity": 0});
    };

    function assign() {
        //让所有的li按照config配置单渐渐地各就各位
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i], function () {
                flag = true;//当动画执行完成后，将flag设置为true，打开节流阀
            });
        }
    }

    assign();

    //点击右箭头，将配置单中最前面的元素放到最后面
    arrRight.onclick = function () {
        if (flag) {//当flag为true即节流阀是打开的状态时，才能执行动画
            flag = false;//当动画执行时，将flag设置为false，关闭节流阀
            config.push(config.shift());//把最前面的元素放到最后面
            //config.unshift(config.pop());//把最后面的元素放到最前面
            //让所有的li按照新生成的config配置单渐渐地各就各位
            assign();
        }

    };
    //点击左箭头，将配置单中最后面的元素放到最前面
    arrLeft.onclick = function () {
        if (flag) {
            flag = false;
            config.unshift(config.pop());//把最后面的元素放到最前面

            //config.push(config.shift());//把最前面的元素放到最后面
            assign();
        }
    };
//=====================================================以上是旋转木马=================================================
var content=document.getElementById('content'),
    fixed=document.getElementById('fixed');
    content.onmousemove=function(){
        fixed.classList.add('active');
    }
//===============以上是固定的部分=====================

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
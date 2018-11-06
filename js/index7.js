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


    //缓速轮播
    function animate2(obj, target) { //对象，终点
        clearInterval(obj.timer);

        obj.timer = setInterval(function () {
            var x = obj.offsetLeft;

            var step = (target - x) / 10;  //将要移动的距离/10
            //得到移动的距离逐渐变小
            //因为需要配合定时器 有那种缓慢运动的效果
            step > 0 ? Math.ceil(step) : Math.floor(step);   //向上舍入  向下舍入

            x = x + step;
            obj.style.left = x + "px";
            if (x === target) {
                clearInterval(obj.timer);
            }
        }, 15);
    }

    var ul1=document.getElementById('ull');

    var oll=document.getElementById('oll'),
        ols=oll.children;
    var banner=document.getElementById('banner');
    var imgWidth=banner.offsetWidth;

    for (var i = 0; i < ols.length; i++) {
        ols[i].index=i;
        ols[i].onmouseover=function(){
            for (var j = 0; j < ols.length; j++) {
                ols[j].className="";
            }
            this.className="active";
            var target=-this.index * imgWidth;
            animate2(ul1,target);
        }
    }

    //吸顶盒
    var top=document.getElementById('top');
    var navBar=document.getElementById('section1');

    //封装所有高度（加上卷起来的高度）获取距离
    function scroll() {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
            left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        };
//        document.documentElement.scrollTop   不考虑兼容问题的话 可以用这个
    }

    window.addEventListener("scroll",function(){
        if (scroll().top>top.offsetHeight){
            navBar.classList.add("fixed1");
            navBar.style.zIndex="99";
            banner.style.paddingTop=navBar.offsetHeight+"px";
        }else {
            navBar.classList.remove("fixed1");
            banner.style.paddingTonep=0;
            navBar.style.zIndex="1";
        }
    })

    //返回顶部
    var ff=document.getElementById('backtop_wrap');
    var hdd=document.getElementById('hdd');

    window.addEventListener("scroll",function(){
        if(scroll().top>600){
            ff.style.display="block";
        }else {
            ff.style.display="none";
        }
    })
    hdd.addEventListener("click",function(){
        var timer=null;
        var target=0;
        var x=0;
        clearInterval(timer);
        timer=setInterval(function(){
            var step=(target-x)/10;
            step=step>0?Math.ceil(step):Math.floor(step);
            x+=step;
            window.scrollTo(0,x);
            if (x===0){
                clearInterval(timer);
            }
        },25)
    })
    //以下是小米效果
    var goUp=document.getElementById('goUp'),
        goDown=document.getElementById('goDown'),
        pic=document.getElementById('pic');  //找元素要找准
    var dist=0;     //是一个欧式距离加权函数    其实就是一个距离
    var timer=null;   //定时器三步骤
    var xM=document.getElementById('xM');

    goUp.onmouseover=function(){
        clearInterval(timer);
        timer=setInterval(function(){
            dist--;
            if (dist>-417){      //为什么不是1470 不能图片都移走
                pic.style.top=dist+ "px";    //要用双引号
            }else {
                clearInterval(timer);
            }
        },15);
    };

    goDown.onmouseover=function(){
        clearInterval(timer);
        timer=setInterval(function(){
            dist++;
            if (dist<=0){
                pic.style.top=dist+ "px";
            }else {
                clearInterval(timer);
            }
        },15);
    };

    pic.parentNode.onmouseout=function(){     //parentNode属性以 Node 对象的形式返回指定节点的父节点。
        clearInterval(timer);
    };



        var div=document.getElementById('box');
        var textarea=div.children[1];
        var btn=textarea.nextElementSibling||textarea.nextSibling;
        var ul=div.lastElementChild||div.lastChild;

        btn.onclick=function(){
            var val=textarea.value;
            //含敏感词
            if(val===""||val=="嗝屁"){
                alert("输入内容不能为空");
                textarea.value="";
                return;
            }

            //
            var newLi=document.createElement("li");
            newLi.innerHTML=val+"<a href='#'>删除</a>"
            if (ul.children.length===0){
                ul.appendChild(newLi);
            }else {
                ul.insertBefore(newLi,ul.children[0]);
            }

            textarea.value="";

            var a=newLi.getElementsByTagName('a')[0];
            a.onclick=function(){
                ul.removeChild(this.parentNode);//
            }
        }




}

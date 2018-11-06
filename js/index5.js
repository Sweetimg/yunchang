window.onload=function(){
    //以下是头部导航
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

    //头部登陆
    var hdl=document.getElementById('h-dl');
    hdl.onclick=function(){
        bzzc.style.display="block";
        bdl.style.display="block";
    };
    //以下是banner图上的登陆
    var i2=document.getElementById('i2'),
        bzzc=document.getElementById('b-zzc'),
        bdl=document.getElementById('b-dl'),
        bx=document.getElementById('b-x');
    i2.onclick=function(){
        bzzc.style.display="block";
        bdl.style.display="block";
    };
    bx.onclick=function(){
        bzzc.style.display="none";
        bdl.style.display="none";
    };

    //以下是qq 微信
    var qq=document.getElementById('qq'),
        qq1=document.getElementById('qq1'),
        qqx=document.getElementById('qqx');
    qq.onclick=function(){
        qq1.style.display="block";
        bzzc.style.backgroundColor="#fff";
        bzzc.style.opacity="0.6";
    };
    qqx.onclick=function(ev){
        var oEven = window.event||ev;
        oEven.stopImmediatePropagation();//阻止冒泡
        qq1.style.display="none";
    };

    var wx=document.getElementById('wx'),
        wxl=document.getElementById('wxl'),
        wxx=document.getElementById('wxx');
    wx.onclick=function(){
        wxl.style.display="block";
        bzzc.style.backgroundColor="#fff";
        bzzc.style.opacity="0.6";
    };
    wxx.onclick=function(ev){
        var oEven = window.event||ev;
        oEven.stopImmediatePropagation();//阻止冒泡
        wxl.style.display="none";
    };

    //以下是排序：
    let productRender=(function(){

        let header = document.getElementById('s1-head'),
            tit = header.getElementsByTagName('a');
        let list = document.getElementById('s1-ul'),
            cont = list.getElementsByTagName('li');

        let productData=null;
        //从json中获取数据
        let getData=function(){
            /*原生js利用ajax获取数据的4步骤：
             * 1.创建XMLHttpRequest 实例
             * 2.打开与服务器的链接
             * 3.等待服务器 返回数据
             * 4.向服务器 发送数据*/
            let xhr=new XMLHttpRequest();
            xhr.open('get','index5.json',false);
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4&&xhr.status==200){ //判断状态 是否改变
                    productData=JSON.parse(xhr.responseText);
                }
            };
            xhr.send();
        };

        //绑定数据
        let bindHtml=function(){
            let str=``;//空的模板字符串
            for (let i = 0; i < productData.length; i++) {
                let {time,price,hot,img,title}=productData[i];//结构赋值
                //console.log(time);
                //console.log(productData[i].time);  //相当于上面的结构赋值

                //+=循环得到  加一个li   //自定义属性，前一般加data ${变量名}写变量
                str+=`<li data-time="${time}" data-price="${price}" data-hot="${hot}">
            <a href="#">
                <img src="${img}" alt="">
                <p>${title}</p>
                <span>时间：${time}</span>
                <span>价格：￥${price}</span>
                <span>热度：${hot}</span>
            </a></li>`;
            };
            list.innerHTML=str;
        }

        //排序
        let sortList1=function(){
            //把每个li排序
            let sortList=function(){
                let {index:index1,flag:flag1}=this; //因为有三个属性，所以设置了this
                let arrCont=Array.from(cont); //转换为数组
                arrCont.sort(function(a,b){
                    let arr=['data-time','data-price','data-hot'];//把3个属性放到一个数组中
                    let prev=a.getAttribute(arr[index1]),
                        next=b.getAttribute(arr[index1]);

                    if (index1==0){//时间特殊
                        prev=prev.replace(/-/g,'');
                        next=next.replace(/-/g,'');
                    }
                    return (prev-next)*flag1;
                });

                let fg=document.createDocumentFragment();//回流  利用文档碎片——创建虚拟容器

                for (let i = 0; i < arrCont.length; i++) {
                    fg.appendChild(arrCont[i]);
                }
                list.appendChild(fg);
                fg=null;
            };

            //点击各个属性
            for (let i = 0; i < tit.length; i++) {
                tit[i].index=i;   //给每一个a上绑定index属性
                tit[i].flag=-1;
                tit[i].onclick=function(){
                    for (let j = 0; j < tit.length; j++) {
                        if (tit[j]!==this){ //点了time 又去点price时
                            tit[j].flag=-1;//改变状态
                        }
                    }
                    this.flag*=-1;  //实现点一下升序，在点一下降序
                    sortList.call(this);  //点哪个  this就是哪个
                    tit[i].classList.add("active");
                }
                tit[i].classList.remove("active");
            }
        }

        //把想给用户看的返回出来
        return{
            init:function(){
                getData();
                bindHtml();
                sortList1();
            }
        };

    })();  //自执行函数
    productRender.init();

    //以下是类似美女画廊
    var s2ul=document.getElementById('s2-ul'),
        aArr=s2ul.getElementsByTagName('a');
    var img=document.querySelector('.s2-img img');
    for (var i = 0; i < aArr.length; i++) {
        aArr[i].onmouseover=function(){
            img.src=this.href;
            return false;
        }

    }



}

window.onload=function(){
var imgContainer = document.querySelector('.banner-con');
        var btns = document.querySelectorAll('.item');
        //轮播
        var num = 1;
        btns[0].style.backgroundColor = '#2691fd';
        setInterval(function() {
            for(var i = 0; i <btns.length; i++) {
                btns[i].style.backgroundColor = ''
            }
            btns[num].style.backgroundColor = '#2691fd';
            imgContainer.style.marginLeft = '-' + (num * 1920) + 'px';
            if(num == btns.length - 1) {
                num = 0;
            } else {
                num++;
            }
        }, 3000);

        //点击事件
        for(let i = 0; i < btns.length; i++) {
            btns[i].onclick = function() {
                num = i;
                for(var j = 0; j < btns.length; j++) {
                    btns[j].style.backgroundColor = '';
                }
                this.style.backgroundColor = '#2691fd';
                imgContainer.style.marginLeft = '-' + (num  * 1920) + 'px';
            }
        }
    }
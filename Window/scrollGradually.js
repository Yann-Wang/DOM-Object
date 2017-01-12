/**
 * Created by a_wav on 2017/1/10.
 */

/**
 * 获取元素到文档顶部的距离
 * @param ele
 */
function getElementTop(ele) {
    var top = ele.offsetTop;
    var parent = ele.offsetParent;

    while(parent != null){
        top += parent.offsetTop;
        parent = parent.offsetParent;
    }

    return top;
}

function getElementTop2(ele) {
    var edge = ele.getBoundingClientRect();

    return edge.top + document.body.scrollTop;
}


/**
 * 实现渐进滑动
 * @param ele
 * @param fn
 */
function scrollGradually(ele,fn) {
    var offset = getElementTop2(ele);
    var distance = offset - window.pageYOffset;
    var pos,interval;

    if(distance >0){
        pos =true;
        interval = 60;
    }else{
        pos = false;
        interval = -60;
    }


    var go = function () {
        setTimeout(function () {

            if(pos && distance>interval || !pos && distance<interval){
                window.scrollBy(0,interval);
                distance -= interval;
            }else{
                window.scrollBy(0,distance);
                distance = 0;
            }

            if(distance){
                go();
            }else{
                fn();
            }

        },67);
    };

    go();

}
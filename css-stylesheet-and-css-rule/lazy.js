/**
 * Created by a_wav on 2017/1/11.
 */
(function (g) {
    g.lazy = function (url) {

        g.onload = function () {
            var link = document.createElement('link');

            link.rel = 'stylesheet';
            link.type= 'text/css';
            link.href= url;

            document.head.appendChild(link);
        }
    }
})(window);
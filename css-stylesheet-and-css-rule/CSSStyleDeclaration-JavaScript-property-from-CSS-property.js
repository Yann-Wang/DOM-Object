/**
 * Created by a_wav on 2017/1/12.
 */

(function (g) {

    g.onload = function () {
        var table = $('table');

        var data= {
            'background': 'background',
            'background-attachment': 'backgroundAttachment',
            'background-color': 'backgroundColor',
            'background-image': 'backgroundImage',
            'background-position': 'backgroundImage',
            'background-repeat': 'backgroundRepeat',
            'border': 'border',
            'border-width': 'borderWidth',
            'border-style': 'borderStyle',
            'border-color': 'borderColor',
            'border-top': 'borderTop',
            'border-top-width': 'borderTopWidth',
            'border-top-style': 'borderTopStyle',
            'border-top-color': 'borderTopColor',
            'border-right': 'borderRight',
            'border-right-width': 'borderRightWidth',
            'border-right-style': 'borderRightStyle',
            'border-right-color': 'borderRightColor',
            'border-bottom': 'borderBottom',
            'border-bottom-width': 'borderBottomWidth',
            'border-bottom-style': 'borderBottomStyle',
            'border-bottom-color': 'borderBottomColor',
            'border-left': 'borderLeft',
            'border-left-width': 'borderLeftWidth',
            'border-left-style': 'borderLeftStyle',
            'border-left-color': 'borderLeftColor',
            'clear': 'clear',
            'clip': 'clip',
            'color': 'color',
            'cursor': 'cursor',
            'display': 'display',
            'filter': 'filter',
            'font': 'font',
            'font-family': 'fontFamily',
            'font-size': 'fontSize',
            'font-variant': 'fontVariant',
            'font-weight': 'fontWeight',
            'width': 'width',
            'height': 'height',
            'letter-spacing': 'letterSpacing',
            'line-height': 'lineHeight',
            'list-style': 'listStyle',
            'list-style-image': 'listStyleImage',
            'list-style-position': 'listStylePosition',
            'list-style-type': 'listStyleType',
            'margin': 'margin',
            'margin-top': 'marginTop',
            'margin-right': 'marginRight',
            'margin-bottom': 'marginBottom',
            'margin-left': 'marginLeft',
            'overflow': 'overflow',
            'padding': 'padding',
            'padding-top': 'paddingTop',
            'padding-right': 'paddingRight',
            'padding-bottom': 'paddingBottom',
            'padding-left': 'paddingLeft',
            'page-break-after': 'pageBreakAfter',
            'page-break-before': 'pageBreakBefore',
            'position': 'position',
            'left': 'left',
            'top': 'top',
            'float':'cssFloat',
            'text-align': 'textAlign',
            'text-decoration': 'textDecoration',
            'text-indent': 'textIndent',
            'text-transform': 'textTransform',
            'vertical-align': 'verticalAlign',
            'visibility': 'visibility',
            'z-index': 'zIndex'
        };

        var fg = document.createDocumentFragment();

        function insertData(cssProperty,javascriptProperty) {
            var tr = document.createElement('tr');
            var td = document.createElement('td');
            var td2= td.cloneNode();
            var text_c = document.createTextNode(cssProperty);
            var text_j = document.createTextNode(javascriptProperty);

            td.appendChild(text_c);
            td2.appendChild(text_j);
            tr.appendChild(td);
            tr.appendChild(td2);

            fg.appendChild(tr);
        }

        for(var p in data){
            insertData(p, data[p]);
        }

        table.appendChild(fg);

    }
})(window);
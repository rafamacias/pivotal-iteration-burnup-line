(function() {
    ;
    var path = '.progress_chart>svg';
    var axisXHeight = 36;
    var axisYWidth = 30;


    var element = document.querySelector(path);
    var width= element.getAttribute('width');
    var height= element.getAttribute('height');
    
    var realHeight = height -axisXHeight;
    var realWidth = width -axisYWidth;
    
    var hipotenusa = Math.sqrt((realHeight*realHeight) + (realWidth*realWidth));
    
    var sinOfAngleX = realHeight / hipotenusa;
    var angle = Math.asin(sinOfAngleX) * 180/Math.PI;
    
    console.log(`width = ${width} and height = ${height} and Hipotenusa = ${hipotenusa}`);
    console.log(angle);
    
    var style = {
        position: 'absolute',
        background: 'rgba(0,0,0,0.5)',
        bottom: `${axisXHeight + (realHeight/2)}px`,
        width: `${realWidth}px`,
        right: 0,
        transform: 'rotateZ(' + `${-angle}deg)`,
        height: `${2}px`
    };
    
    function css(el, styles) {
        for (var property in styles) el.style[property] = styles[property];
    };
    
    var line = document.createElement('div');
    line.id = 'burnup-line';
    
    css(line, style);
    
    element.style.position = 'relative';
    element.parentNode.appendChild(line);
})();


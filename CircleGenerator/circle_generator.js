var elems = document.getElementsByTagName('div');
var increase = Math.PI * 2 / elems.length;
var x = 0, y = 0, angle = 0, elem;

for (var i = 0; i < elems.length; i++) {
    elem = elems[i];
    x = 100 * Math.cos(angle) + 200;
    y = 100 * Math.sin(angle) + 200;
    elem.style.position = 'absolute';
    elem.style.left = x + 'px';
    elem.style.top = y + 'px';
    angle += increase;
}
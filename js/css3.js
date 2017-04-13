HTMLElement.prototype.setCss3 = function (attr, val) {
    e = this;
    e.style['webkit' + attr] = val;
    e.style['Moz' + attr] = val;
    e.style['ms' + attr] = val;
    e.style['O' + attr] = val;
    e.style[attr] = val;

    return this;
}
HTMLElement.prototype.getCss3 = function getCss3(attr, val) {
    e = this;
    return e.style['webkit' + attr] || e.style['Moz' + attr] || e.style['ms' + attr] || e.style['O' + attr] || e.style[attr];
}
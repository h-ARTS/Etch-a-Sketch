/**
 * Project Assignment JavaScript and jQuery
 * Author: Hanan Mufti
 */

function SketchPad(num, color) {
    this.num = num;
    this.color = color;
}

SketchPad.prototype.init = function() {

    if (this.num) {
        this.num;
    } else {
        this.num = 20;
    }
    this.color = '#000000';
    this.render();

}

SketchPad.prototype.render = function() {
    
    var squared = this.num * this.num;

    for (var i = 0; i < squared; i++) {

        if (i % this.num === 0) {
            $('<div class="block" style="background-color:' + this.color + '"></div>').appendTo('#sketch');
        } else {
            $('<div class="block" style="background-color:' + this.color + '"></div>').appendTo('#sketch');
        }

    }

    jQuery('.block').css({ 'width': 600 / this.num, 'height': 600 / this.num });
}

SketchPad.prototype.reset = function() {

    $('#sketch').empty();
    this.num = 0;
    while( this.num < 1 || this.num > 100 ) {
        this.num = prompt('Select size between 1 and 100');
    }
    this.render();
    
}

jQuery(document).ready(function($) {

    $sketchpad = new SketchPad(16);
    $sketchpad.init()

});
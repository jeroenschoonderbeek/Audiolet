/**
 * @depends TableLookupOscillator.js
 */
var Triangle = new Class({
    Extends: TableLookupOscillator,
    initialize: function(audiolet, frequency) {
        TableLookupOscillator.prototype.initialize.apply(this, [audiolet,
                                                                Triangle.TABLE,
                                                                frequency]);
    }
});

Triangle.TABLE = [];
for (var i = 0; i < 8192; i++) {
    // Smelly, but looks right...
    Triangle.TABLE.push(Math.abs(((i - 2048) / 8192) % 1 * 2 - 1) * 2 - 1);
}


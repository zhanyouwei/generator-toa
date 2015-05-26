'use strict';
// **Github:** https://github.com/toajs/toa
//
// **License:** MIT

var Toa = require('toa');
var app = Toa(function() {
  this.body = 'Hello World!\n-- toa';
});

app.listen(3000);
console.log('server listening on port 3000');

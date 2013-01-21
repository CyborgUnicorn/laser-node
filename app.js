var hid = require('node-hid');

var lr;

hid.devices().forEach(function(device) {
  if(device.product === 'Laser Rainbow') {
    lr = new hid.HID(device.path);
    return;
  }
});

if(!lr)
  throw new Error('fcuk yuo');

var cmd = 'laser';
var data = cmd.split('').map(function(c) { return c.charCodeAt(); });

var read = function() {
  lr.read(function(error, data) {

    if(error)
      console.log('Error', error);
    if(data)
      console.log(data.map(function(i) { return String.fromCharCode(i); }).join(''));

  });
};


read();

setTimeout(function() {
  lr.write(data);
}, 1000);

setTimeout(function() {
  read();
}, 2000);

setTimeout(function() {
  read();
}, 3000);



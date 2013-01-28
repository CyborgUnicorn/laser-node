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

var read = function() {
  lr.read(function(error, data) {

    if(error)
      console.log('Error', error);
    if(data)
      console.log(data, data.map(function(i) { return String.fromCharCode(i); }).join(''));
    read();
  });
};

read();

var cmd = 'penis';
var data = cmd.split('').map(function(c) { return c.charCodeAt(); });


lr.write(data);
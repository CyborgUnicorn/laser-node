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

var cmd = 'I ass derp Bruce onions lesbian fart';
var data = cmd.split('').map(function(c) { return c.charCodeAt(); });


lr.write(data);
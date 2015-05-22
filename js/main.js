var path = require('path'),
    cwd = process.cwd(),
    gui = require('nw.gui'),
    heading = require(path.join(cwd, '/js/heading.js'));

gui.Window.get().menu = require(path.join(cwd, '/js/menu.js'))(gui);

document.getElementById('heading').innerHTML = heading.getHeading();

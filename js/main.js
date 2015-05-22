var path = require('path'),
    cwd = process.cwd(),
    gui = require('nw.gui'),
    heading = require(path.join(cwd, '/js/heading.js'));

document.getElementById('heading').innerHTML = heading.getHeading();

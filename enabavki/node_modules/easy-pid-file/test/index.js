// index.js - test
var chai = require('chai');
var fs = require('fs');
var pathname = 'miofile.pid';
var pidfile = require('../index.js')(pathname);

describe('Easy-pid-file ', function(){
    it('Should create a miofile.pid in the project directory (true)  ', function(){

          pidfile = require('../index.js')(pathname);
          chai.assert.isTrue(pidfile.getState());
    });

    it('Should try to raise a ENOENT exception return (false) ', function(){
          pidfile = require('../index.js')('sdgdfgdf/dgfdgsdfg');
          chai.assert.isFalse(pidfile.getState());
    });
    it('Should try to raise a EACCES exception NO sudo (false)  ', function(){
          pidfile = require('../index.js')('/run/miofile.pid');
          chai.assert.isFalse(pidfile.getState());
    });
});




after(function(){
    console.log("  Delete the '" + pathname + "' file " );
    if(fs.existsSync(pathname)){
        fs.unlinkSync(pathname);
    }
});

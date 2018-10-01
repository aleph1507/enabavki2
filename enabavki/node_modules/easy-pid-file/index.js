// index.js  - main file (be careful to manage the process.on)
var fs = require('fs');
var writed = true;

module.exports = function(path){

    // try/catch block to trap all exceptions (Sync)
    try{

        fs.writeFileSync(path, process.pid ,{flag : 'w+'});

    }catch(exception){
        writed = false;
    }

    // method returned (can be used in the main.js file )
    return {
        getPath : function() {return path},
        getState : function() {return writed}
    }

}

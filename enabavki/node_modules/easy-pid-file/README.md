easy-pid-file
=============
[TOC]

### Intro
Easy management of the file.pid (simple file holding the PID number of the node process), this can be useful
when the process need to be always alive on the server machine and so on ....

Chose the path to store te file (right privilege for that path if is a system folder)
** eg. /var/mynodeprocess.pid ** , and with one line of code you are ok !

If the path you set in won't be valid an error **ENOENT or EACCES** will be raise !

### HOW it works
Here i'll show how use the package, with a short version, you get only the .pid file on the path, or
with the initialization of the var that can be use to check the file's write operation :

```javascript
    // create the .pid file in the project folder
    require('./easy-pid-file')('my-process-pid.pid');

    // instantiate and use the variable
    var pidfile = require('./easy-pid-file.js')('~/project-x/my-process-pid.pid');

    // check
    if(pidfile.getState()){
      // true
    }else{
      // false
    }
```

If you want to save file.pid in system's folder like '/run/..' '/var/..' and so on, be sure that your
Node.js process granted the right privilege (otherwise check return false and file.pid fails).

### methods
You get only two methods you can use the getPath() and the getState() :

```javascript
    var pidfile = require('./easy-pid-file.js')('myfile.pid');

    // get you the path  you have inserted
    pidfile.getPath();  

    // get you the status true(CREATED)
    pidfile.getState();  
```


### ENOENT & EACCES
If a false value is returned an exception is raised, the exceptions catch in the False
value returned are the ENOENT and the EACCES.

#### Exists / NOT
The package do NOT create new folder, if the path does NOT exists, a Boolean value False is returned,
and the file.pid won't be create. The simplicity of this package give at you the responsibility to
pass a valid path in the package call.

That's it, that's all !!

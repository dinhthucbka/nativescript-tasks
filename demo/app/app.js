/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

require("./bundle-config");
var application = require("application");

var Tasks = require('nativescript-tasks');

application.start({ moduleName: "main-page" });

var t = Tasks.newTask(function(ctx) {
    var a = 1000;
    var b = 200;
    var c = ctx.state;
    
    return (a + b * c + 7);
}).start(30).then((result) => {
    console.log('result: ' + result.data);
}).catch((result) => {
    console.log('error: ' + result.error);
});

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
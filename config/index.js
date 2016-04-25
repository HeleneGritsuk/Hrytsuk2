var nconf=require('nconf');//модуль кот мы подключили
var path=require('path');//глобальный модуль нода
nconf.argv()
.env()
.file({file:path.join(__dirname,'config.json')});
module.exports=nconf;
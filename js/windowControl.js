var nw  = require('nw.gui'); // Node-Webkit instance
var win = nw.Window.get();   // Get active window
//Minimize function
document.getElementById('windowControlMinimize').onclick = function(){
	win.minimize();
}
//Close function
document.getElementById('windowControlClose').onclick = function(){
	win.close();
}
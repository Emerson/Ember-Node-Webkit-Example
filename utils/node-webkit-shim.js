if (window.nwDispatcher) {
  window.node_require = window.require;
  window.require = undefined;
}

// Live reload equivlent
var fs = node_require('fs');
console.log('now watching tmp/restart.txt');
fs.watchFile('./tmp/restart.txt', [], function() {
  if (location) {
    location.reload(false);
  }
});
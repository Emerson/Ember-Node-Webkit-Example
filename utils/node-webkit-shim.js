if (window.nwDispatcher) {
  // window.win = require('nw.gui').Window.get();
  window.node_require = window.require;
  window.require = undefined;
}
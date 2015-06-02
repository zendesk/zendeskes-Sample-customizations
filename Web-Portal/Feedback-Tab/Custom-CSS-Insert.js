var styles = '#dropbox > header > h1 {color:red}'; // Insert your custom CSS here

window.onload=function() {
  var ifr = document.getElementById('zenbox_body');
  ifr.onload = function() {
    var doc = this.contentWindow.document;
    var head = doc.head || doc.getElementsByTagName('head');
    style = doc.createElement('style');
    if (style.styleSheet) {
      style.styleSheet.cssText = styles;
    } else {
      style.appendChild(doc.createTextNode(styles));
    }
    
    head.appendChild(style);
  };
};

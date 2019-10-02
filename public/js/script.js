(function initialize() {
  var styleButtons = document.querySelectorAll('.spinner_styles button');
  [].forEach.call(styleButtons, (button) => {
    button.setAttribute('disabled', 'disabled');
  });

  var scriptLoaded = false;
  var styleListenerAdded = false;

  document.getElementById('clickMe').addEventListener('click', (ev) => {

    if (!scriptLoaded) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "js/clx_spinner.js";
      document.getElementsByTagName("head")[0].appendChild(script);

      scriptLoaded = true;
    }

    ev.target.innerText = 'starte weiteren spinner';
    var spinner = document.createElement("clx-spinner");
    // add data-size for dynamic size given from callsite
    spinner.dataset.size = '100px';
    document.querySelector('body').appendChild(spinner);
    if (!styleListenerAdded) {
      [].forEach.call(styleButtons, (button) => {
        button.removeAttribute('disabled');
        button.addEventListener('click', (ev) => {
          if (typeof ev.target.dataset.style != 'undefined') {
            var spinner = document.createElement("clx-spinner");
            spinner.dataset.class= ev.target.dataset.style;
            document.querySelector('body').appendChild(spinner);
          }
        })
      });

      styleListenerAdded = true;
    }
  });
}());


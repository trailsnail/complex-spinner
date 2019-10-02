const template = document.createElement('template');
template.innerHTML = `
      <link rel="stylesheet" type="text/css" href="clx_spinner.css">
			<div class="clx_curtain"><div class="clx_spinner"></div></div>`;

class ClxSpinner extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // write element functionality in here
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {

    if (typeof this.dataset.size != "undefined") {
      document.documentElement.style.setProperty('--spinner-size', this.dataset.size );
    }

    this._layer = this.shadowRoot.querySelector('.clx_curtain');
    this._layer.addEventListener('click', function(ev) {
      document.querySelector('clx-spinner').remove();
    });
  }
}

window.customElements.define('clx-spinner', ClxSpinner);

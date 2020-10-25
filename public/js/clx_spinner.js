const template = document.createElement('template');
template.innerHTML = `
      <link rel="stylesheet" type="text/css" href="css/clx_spinner.css">
      <div class="clx_spinner"></div>
`;

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

    if (typeof this.dataset.class != "undefined") {
      var classOrClasses = this.dataset.class;
      if (classOrClasses.indexOf(' ') != -1) {
        var classes = classOrClasses.split(' ');
        classes.forEach(className => {
          this.shadowRoot.querySelector('.clx_spinner').classList.add(className);
        })
      } else {
        this.shadowRoot.querySelector('.clx_spinner').classList.add(this.dataset.class);
      }
    }
  }
}

window.customElements.define('clx-spinner', ClxSpinner);

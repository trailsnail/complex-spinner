const template = document.createElement('template');
template.innerHTML = `
			<style>
				:root {
				   --spinner-size: 60px;
				}
				.clx_spinner {
				  width: var(--spinner-size);
				  height: var(--spinner-size);
				  background:
				    url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI4NjRweCIgaGVpZ2h0PSI4NjRweCIgdmlld0JveD0iMCAwIDg2NCA4NjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDg2NCA4NjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiM3RUJBMDAiIGQ9Ik03MjAuNDU3LDQ2Ny4yOEM3MDMuMDEsNjEwLjI0Nyw1ODAuOTE0LDcyMS4wMDEsNDMyLjg3LDcyMS4wMDFjLTE2MC4wMTksMC0yODkuNzM4LTEyOS4zOS0yODkuNzM4LTI4OS4wMDFjMC0xNTkuNjEsMTI5LjcyLTI4OSwyODkuNzM4LTI4OWMxNDguMjk1LDAsMjcwLjU1LDExMS4xMzIsMjg3LjY3MSwyNTQuNDUySDc3MkM3NTQuNjQzLDIyNS45MDIsNjA5LjQzMyw5Miw0MzIuODY5LDkyQzI0NC42MTMsOTIsOTIsMjQ0LjIyNCw5Miw0MzEuOTk5QzkyLDYxOS43NzUsMjQ0LjYxMyw3NzIsNDMyLjg2OSw3NzJjMTc2LjMxMywwLDMyMS4zNTUtMTMzLjUyMywzMzkuMDUxLTMwNC43MjFMNzIwLjQ1Nyw0NjcuMjhMNzIwLjQ1Nyw0NjcuMjh6Ii8+PC9zdmc+)
				    no-repeat;
				  animation: spinner 4s ease infinite;
				  background-size: 100%;
				  position: fixed;
				  top: calc(50% - (var(--spinner-size) / 2));
				  left: calc(50% - (var(--spinner-size) / 2));
				}

				.clx_spinner:before {
				  content: '';
				  display: block;
				  width: 100%;
				  height: 100%;
				  background:
				    url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI4NjRweCIgaGVpZ2h0PSI4NjRweCIgdmlld0JveD0iMCAwIDg2NCA4NjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDg2NCA4NjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiM3RUJBMDAiIGQ9Ik02NTYuMDk5LDQ2Ny4wMjVjLTE2Ljg4OCwxMDcuNTYzLTExMC4zMDgsMTg5Ljg1OS0yMjMuMDMyLDE4OS44NTljLTEyNC42ODMsMC0yMjUuNzU5LTEwMC42ODQtMjI1Ljc1OS0yMjQuODg1YzAtMTI0LjIwMSwxMDEuMDc3LTIyNC44ODUsMjI1Ljc1OS0yMjQuODg1YzExMi45NTksMCwyMDYuNTQsODIuNjM3LDIyMy4xNDYsMTkwLjUzSDcwN0M2OTAuMDI1LDI2MS45ODMsNTczLjg1OSwxNTcsNDMzLjA2OSwxNTdDMjgwLjYsMTU3LDE1NywyODAuMTIxLDE1Nyw0MzJTMjgwLjYsNzA3LDQzMy4wNjksNzA3YzE0MC41NjIsMCwyNTYuNTg0LTEwNC42MzYsMjczLjg1NC0yMzkuOTc2TDY1Ni4wOTksNDY3LjAyNUw2NTYuMDk5LDQ2Ny4wMjV6Ii8+PC9zdmc+)
				    no-repeat;
				  animation: spinner 2s ease infinite;
				  background-size: 100%;
				}

				.clx_spinner:after {
				  content: '';
				  display: block;
				  width: 100%;
				  height: 100%;
				  background:
				    url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI4NjRweCIgaGVpZ2h0PSI4NjRweCIgdmlld0JveD0iMCAwIDg2NCA4NjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDg2NCA4NjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiM3RUJBMDAiIGQ9Ik01OTIuMjU2LDQ2Ni43NTRjLTE2LjAwNiw3Mi41MjEtODEuMDM5LDEyNi44MDUtMTU4Ljg0NiwxMjYuODA1Yy04OS44MTksMC0xNjIuNjMxLTcyLjMzMy0xNjIuNjMxLTE2MS41NThjMC04OS4yMjYsNzIuODExLTE2MS41NTksMTYyLjYzMS0xNjEuNTU5Yzc3Ljg5NiwwLDE0Mi45OSw1NC40MSwxNTguOSwxMjcuMDU3SDY0NC41QzYyNy45MDYsMjk2LjU0OSw1MzkuNzIzLDIxOS41LDQzMy40MSwyMTkuNUMzMTUuMjcxLDIxOS41LDIxOS41LDMxNC42NCwyMTkuNSw0MzJjMCwxMTcuMzU5LDk1Ljc3MSwyMTIuNSwyMTMuOTExLDIxMi41YzEwNi4yMjQsMCwxOTQuMzQ4LTc2LjkyMiwyMTEuMDQ4LTE3Ny43NDhoLTUyLjIwMlY0NjYuNzU0eiIvPjwvc3ZnPg==)
				    no-repeat;
				  animation: spinner 1s ease infinite;
				  position: absolute;
				  top: 0;
				  left: 0;
				  background-size: 100%;
				}

				@keyframes spinner {to { transform:rotate(360deg);}}

				.clx_curtain:before {
				  content: '';
				  width: 100%;
				  height: 100%;
				  background: #eaeaea;
				  position: fixed;
				  top: 0;
				  left: 0;
				  opacity: 0.9;
				}
			</style>

			<div class="clx_curtain"><div class="clx_spinner"></div></div>`;

class ClxSpinner extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // write element functionality in here
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this._layer = this.shadowRoot.querySelector('.clx_curtain');
    this._layer.addEventListener('click', function(ev) {
      document.querySelector('clx-spinner').remove();
    });
  }
}

window.customElements.define('clx-spinner', ClxSpinner);
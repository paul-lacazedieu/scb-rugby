import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import { sharedStyles } from '../shared-styles.js';

class LastMatchElement extends PolymerElement {
  static get properties() {
    return {};
  }
  static get template () {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`
      ${sharedStyles}
      <style>
        :host {
          background-color: #eee;
          padding: 10px;
          border-radius: 5px;
        }
        .match {
          position: relative;
        }
        span[separator] {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: rotateZ(45deg) translateY(-50%) translateX(-50%);
          width: 3px;
          height: 25px;
          background-color: #272727;
        }
      </style>

      <h3>DERNIER MATCH</h3>
      <hr/>
      <div class="match">
        <div class="left team">
        </div>
        <span separator>
        <div class="right team">
        </div>
      </div>
    `;
  }
}

// Register the element with the browser.
customElements.define('lastmatch-element', LastMatchElement);

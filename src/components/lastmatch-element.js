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
          padding: 10px;
        }
        .title {
          margin: 5px 0px;
          text-align: center;
          text-transform: uppercase;
        }
        .match {
          position: relative;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        span[separator] {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateY(-50%) translateX(-50%) rotateZ(45deg);
          width: 2px;
          height: 90%;
          background-color: #d8d8d8;
        }
        .team {
          flex: 1;
        }
        .left.team {
          text-align: left;
        }
        .right.team {
          text-align: right;
        }
        .left.team h3 {
          margin: 0px 0px 5px 0px;
          text-align: left;
        }
        .right.team h3 {
          margin: 5px 0px 0px 0px;
          text-align: right;
        }
      </style>

      <h3 class="title">DERNIER MATCH</h3>
      <hr/>
      <div class="match">
        <div class="left team">
          <h3>SCB</h3>
          <span>11</span>
        </div>
        <span separator></span>
        <div class="right team">
          <span>6</span>
          <h3>TRC</h3>
        </div>
      </div>
    `;
  }
}

// Register the element with the browser.
customElements.define('lastmatch-element', LastMatchElement);

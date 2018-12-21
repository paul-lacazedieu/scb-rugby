import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import { sharedStyles } from '../shared-styles.js';

class NextMatchElement extends PolymerElement {
  static get properties() {
    return {};
  }

  ready() {
    super.ready();

    this.match = {
      date: "2019-01-12",
      team: "SC Caraman",
      location: "Caraman"
    };
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
          margin: 0px;
          text-align: left;
        }
        .right.team h3 {
          margin: 0px;
          text-align: right;
        }
        .infos {
          display: flex;
          width: 100%;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
      </style>

      <h3 class="title">PROCHAIN MATCH</h3>
      <hr/>
      <div class="infos">
        <div>
          <iron-icon icon="today"></iron-icon>
          <span>[[match.date]]</span>
        </div>
        <div>
          <iron-icon icon="room"></iron-icon>
          <span>[[match.location]]</span>
        </div>
      </div>
      <div class="match">
        <div class="left team">
          <h3>SC Briatexte</h3>
        </div>
        <span separator></span>
        <div class="right team">
          <h3>[[match.team]]</h3>
        </div>
      </div>
    `;
  }
}

// Register the element with the browser.
customElements.define('nextmatch-element', NextMatchElement);

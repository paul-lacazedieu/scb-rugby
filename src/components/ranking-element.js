import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import { sharedStyles } from '../shared-styles.js';

class RankingElement extends PolymerElement {
  static get properties() {
    return {};
  }

  ready(){
    super.ready();

    this.teams = [
      {
        team: "SC Caraman",
        played: 9,
        score: 12,
        wins: 3,
        defeats: 6,
        draw: 0
      },
      {
        team: "SC Briatexte",
        played: 9,
        score: 21,
        wins: 5,
        defeats: 4,
        draw: 0
      }
    ];
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
      table {
        width: 100%;
      }
      tr {
      }
      th {

      }
      td {
        padding: 5px;
        text-align: center;
      }
    </style>

    <h3 class="title">Classement</h3>
    <hr/>
    <table>
      <thead>
        <tr>
          <th>Équipe</th>
          <th>Joué(s)</th>
          <th>Point(s)</th>
          <th>Gagné(s)</th>
          <th>Perdu(s)</th>
          <th>Nul(s)</th>
        </tr>
      </thead>
      <tbody>
        <template is="dom-repeat" items="[[teams]]">
          <tr>
            <td>[[item.team]]</td>
            <td>[[item.played]]</td>
            <td>[[item.score]]</td>
            <td>[[item.wins]]</td>
            <td>[[item.defeats]]</td>
            <td>[[item.draw]]</td>
          </tr>
        </template>
      </tbody>
    </table>
    `;
  }
}

// Register the element with the browser.
customElements.define('ranking-element', RankingElement);

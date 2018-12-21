import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import { sharedStyles } from '../shared-styles.js';

import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-sort-column.js';

class CalendarElement extends PolymerElement {
  static get properties() {
    return {};
  }

  ready(){
    super.ready();

    this.matchs = [
      {
        date: "2019-01-12",
        team: "SC Caraman",
        location: "Caraman"
      },
      {
        date: "2019-01-18",
        team: "SC Verdun",
        location: "Briatexte"
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

    <vaadin-grid items="[[matchs]]">
      <vaadin-grid-sort-column path="date" header="Date"></vaadin-grid-sort-column>
      <vaadin-grid-sort-column path="team" header="Équipe"></vaadin-grid-sort-column>
      <vaadin-grid-column path="location" header="Lieu"></vaadin-grid-column>
    </vaadin-grid>
    `;
  }
}

// Register the element with the browser.
customElements.define('calendar-element', CalendarElement);

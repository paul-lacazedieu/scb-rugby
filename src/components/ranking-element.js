import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class RankingElement extends PolymerElement {
  static get properties() {
    return {};
  }
  static get template () {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`

    `;
  }
}

// Register the element with the browser.
customElements.define('ranking-element', RankingElement);

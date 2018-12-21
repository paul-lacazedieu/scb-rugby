import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class HomePage extends PolymerElement {
  static get properties() {
    return {};
  }
  static get template () {
    // Template getter must return an instance of HTMLTemplateElement.
    // The html helper function makes this easy.
    return html`
      <section>
        NEWS
      </section>
      <section>
        DERNIER MATCH
      </section>
      <section>
        CALENDRIER
      </section>
      <section>
        CLASSEMENT
      </section>
      <section>
        SPONSORS
      </section>
    `;
  }
}

// Register the element with the browser.
customElements.define('home-page', HomePage);

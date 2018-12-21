import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import { sharedStyles } from './shared-styles.js';

import './pages/home-page.js';
import './components/lastmatch-element.js';

import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-icon-button/paper-icon-button.js';

import '@polymer/app-layout/app-layout.js';

class SCBApp extends PolymerElement {
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
        width: 100%;
        height: 100%;
      }
      app-header-layout {
        background-color: #272727;
        min-height: 100%;
        width: 100%;
        color: white;
      }
      app-header {
        background-color: #007b26;
        color: #fff;
      }
      app-drawer {
        --app-drawer-content-container: {
          background-color: #3e3e3e;
          color: #fff;
        }
      }
      app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none;
      }

    </style>
    <app-drawer-layout fullbleed>
      <app-drawer slot="drawer">
        Le menu des familles.
      </app-drawer>
      <app-header-layout>
        <app-header slot="header" reveals>
          <app-toolbar>
            <paper-icon-button icon="menu" drawer-toggle></paper-icon-button>
            <div main-title>SCB Rugby</div>
          </app-toolbar>
        </app-header>
        <div>
          <!-- <home-page></home-page> -->
          <lastmatch-element></lastmatch-element>
        </div>
      </app-header-layout>
    </app-drawer-layout>
    `;
  }
}

// Register the element with the browser.
customElements.define('scb-app', SCBApp);

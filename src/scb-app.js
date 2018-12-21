import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import { sharedStyles } from './shared-styles.js';

import './pages/home-page.js';
import './components/lastmatch-element.js';
import './components/nextmatch-element.js';
import './components/ranking-element.js';

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
          background-color: #2c3a30;
          color: #fff;
        }
      }
      app-drawer-layout:not([narrow]) [drawer-toggle] {
        display: none;
      }
      div[content] > *:nth-child(even) {
        background-color: rgba(255, 255, 255, 0.05);
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
        <div content>
          <!-- <home-page></home-page> -->
          <lastmatch-element></lastmatch-element>
          <nextmatch-element></nextmatch-element>
          <ranking-element></ranking-element>
        </div>
      </app-header-layout>
    </app-drawer-layout>
    `;
  }
}

// Register the element with the browser.
customElements.define('scb-app', SCBApp);

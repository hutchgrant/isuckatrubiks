import { css, html, LitElement, unsafeCSS } from 'lit';
import youtubeCss from './youtube.css?type=css';
import githubIcon from '../icons/github-icon.js';

class Youtube extends LitElement {

  static get styles() {
    return css`
      ${unsafeCSS(youtubeCss)}
    `;
  }

  render() {
    return html`
    <iframe width="560" height="315" src="https://www.youtube.com/embed/FPS46eRyQ4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;
  }
}

customElements.define('you-tube', Youtube);

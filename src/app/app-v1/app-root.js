import {LitElement, html, css} from "lit-element";
import 'lit-elem-components/public/lit-button/lit-button';
import 'lit-elem-router/public/lit-router';
import 'lit-elem-router/public/lit-route';
import './modules/home/app-home';
import './modules/article/app-article';
import './components/app-bar-top/app-bar-top';

export class AppRoot extends LitElement {
    static get is() {
        return 'app-root'
    }

    static get styles() {
        // language=css
        return css`
            :host {
                display: block;
                min-height: 100vh;
                background-color: var(--color-background-invert-30);
            }
        `;
    }

    render() {
        // language=html
        return html`
            <app-bar-top>
                <a href="/" slot="page-title">Some News</a>
            </app-bar-top>
            <lit-router>
                <lit-route path="/" tag-name="app-home"></lit-route>
                <lit-route path="/article/:id" tag-name="app-article"></lit-route>
            </lit-router>
        `;
    }
}

customElements.define(AppRoot.is, AppRoot);

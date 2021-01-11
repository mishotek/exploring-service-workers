import {css, html, LitElement} from "lit-element";
import 'lit-elem-components/public/lit-app-bar-top/lit-app-bar-top';
import 'lit-elem-components/public/lit-icon/lit-icon';

export class AppBarTop extends LitElement {
    static get is() {
        return 'app-bar-top';
    }

    static get styles() {
        // language=css
        return css`
            :host {
                
            }
            
            .bar {
                --bar-background: var(--color-tr-white-10);
                --bar-color: var(--color-brand-10);
                --bar-shadow: var(--shadow-raised);
            }
        `;
    }

    render() {
        // language=html
        return html`
            <lit-app-bar-top class="bar">
                <lit-icon icon="menu" slot="nav-icon"></lit-icon>
                <slot name="page-title" slot="page-title"></slot>
                <lit-icon icon="search" slot="actions"></lit-icon>
                <lit-icon icon="share" slot="actions"></lit-icon>
            </lit-app-bar-top>
        `;
    }
}

customElements.define(AppBarTop.is, AppBarTop);

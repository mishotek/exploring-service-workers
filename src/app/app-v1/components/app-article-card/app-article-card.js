import {css, html, LitElement} from "lit-element";
import 'lit-elem-components/public/lit-card-base/lit-card-base';
import 'lit-elem-components/public/lit-font/lit-font';
import {ifDefined} from "lit-html/directives/if-defined";
import {LitFontTypes} from "lit-elem-components/public/lit-font/lit-font-types";
import {styleMap} from "lit-html/directives/style-map";

export class AppArticleCard extends LitElement {
    static get is() {
        return 'app-article-card';
    }

    static get styles() {
        // language=css
        return css`
            :host {
                display: flex;
            }
            
            .card {
                width: 100%;
            }
            
            .image {
                width: 100%;
                height:200px;
                background-size: cover;
                background-position: center;
                border-top-left-radius: var(--radius-40);
                border-top-right-radius: var(--radius-40);
            }
            
            .content {
                display: flex;
                flex-direction: column;
                padding: var(--space-base);
            }
            
            .title {
                color: var(--color-component-invert-10);
                line-height: 32px;
            }
            
            .subtitle {
                color: var(--color-component-invert-40);
                margin-top: var(--space-micro);
            }
            
            .text {
                color: var(--color-component-invert-40);
                margin-top: var(--space-small);
            }
            
            .actions {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                margin-top: var(--space-small);
            }
        `;
    }

    render() {
        // language=html
        return html`
            <lit-card-base class="card">
                ${this.imgUrl ? html`
                    <div class="image" style="${styleMap({'background-image': `url('${this.imgUrl}')`})}"></div>
                ` : ''}
                
                <div class="content">
                    <lit-font type="${LitFontTypes.Headline5}" class="title">
                        <slot name="title"></slot>
                    </lit-font>
                    <lit-font type="${LitFontTypes.Overline}" class="subtitle">
                        <slot name="subtitle"></slot>
                    </lit-font>
                    <lit-font type="${LitFontTypes.Body1}" class="text">
                        <slot name="text"></slot>
                    </lit-font>
                    <div class="actions">
                        <slot name="actions"></slot>
                    </div>
                </div>
            </lit-card-base>
        `;
    }

    static get properties() {
        return {
            imgUrl: {
                type: String,
                reflect: true,
                attribute: 'img-url',
            },
        };
    }
}

customElements.define(AppArticleCard.is, AppArticleCard);

import {css, html, LitElement} from "lit-element";
import '../../components/app-article-card/app-article-card';

export class AppArticle extends LitElement {
    static get is() {
        return 'app-article';
    }

    static get styles() {
        // language=css
        return css`
            :host {
                display: flex;
                flex-direction: column;
                padding: var(--space-small) var(--space-tiny);
            }
            
            .text {
                margin-top: 0;
            }
        `;
    }

    render() {
        // language=html
        return this._article ? html`
            <app-article-card img-url="${this._article.img}">
                <span slot="title">
                    ${this._article.title}
                </span>
                <span slot="subtitle">
                    ${this._article.subtitle}
                </span>
                
                ${this._article.text.map((text) => html`
                    <p class="text" slot="text">${text}</p>
                `)}
            </app-article-card>
        ` : '';
    }

    static get properties() {
        return {
            routeParams: {
                type: Object,
            },
            _article: {
                type: Object,
            },
        };
    }

    async updated(_changedProperties) {
        super.updated(_changedProperties);
        if (_changedProperties.has('routeParams')) {
            this._article = await this._getArticle(this.routeParams.id);
        }
    }

    async _getArticle(id) {
        try {
            const response = await fetch(`http://localhost:3000/api/articles/${id}`);
            const data = await response.json();
            return data.data;
        } catch (e) {
            console.error(e);
            return null;
        }
    }
}

customElements.define(AppArticle.is, AppArticle);

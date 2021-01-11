import {html, css, LitElement} from "lit-element";
import '../../components/app-article-card/app-article-card';
import 'lit-elem-components/public/lit-button/lit-button';
import {LitButtonTypes} from "lit-elem-components/public/lit-button/lit-button-types";
import {Router} from "lit-elem-router/public/router";

export class AppHome extends LitElement {
    static get is() {
        return 'app-home';
    }

    static get styles() {
        // language=css
        return css`
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: var(--space-small) 0;
            }
            
            .article {
                max-width: 600px;
                margin: 0 var(--space-tiny) var(--space-small);
            }
        `;
    }

    render() {
        // language=html
        return this._articles.map((article) => html`
            <app-article-card class="article" img-url="${article.img}">
                <span slot="title">
                    ${article.title}
                </span>
                <span slot="subtitle">
                    ${article.subtitle}
                </span>
                
                <span slot="text">${article.text}</span>
                
                <lit-button
                        type="${LitButtonTypes.Text}"
                        slot="actions"
                        @click="${() => this._openArticle(article.id)}">
                    read more
                </lit-button>
            </app-article-card>
        `);
    }

    static get properties() {
        return {
            _articles: {
                type: Array,
            },
        };
    }

    constructor() {
        super();
        this._articles = [];
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
        this._getArticles();
    }

    _openArticle(id) {
        Router.navigate(`/article/${id}`);
    }

    async _getArticles() {
        try {
            const response = await fetch('http://localhost:3000/api/articles');
            const data = await response.json();
            if (Array.isArray(data.data)) {
                this._articles = data.data.map((article) => ({
                    ...article,
                    text: `${article.text[0].substring(0, 120)}...`,
                }));
            }
        } catch (e) {
            console.error(e);
        }
    }
}

customElements.define(AppHome.is, AppHome);

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
                padding: 0;
            }
        `;
    }

    render() {
        // language=html
        return html`
            <app-article-card img-url="https://images.unsplash.com/photo-1578307870387-edd3bcf5a976?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=964&q=80">
                <span slot="title">
                    UK rolls out Oxford-AstraZeneca vaccine as it battles against Covid surge
                </span>
                <span slot="subtitle">
                    The New York Times • 13 hours ago
                </span>
                <p class="text" slot="text">
                    LONDON — The U.K. has started rolling out the coronavirus vaccine developed by AstraZeneca and the University of Oxford, marking another step in its battle against the coronavirus pandemic.
                </p>
                <p class="text" slot="text">
                    LONDON — The U.K. has started rolling out the coronavirus vaccine developed by AstraZeneca and the University of Oxford, marking another step in its battle against the coronavirus pandemic.
                </p>
                <p class="text" slot="text">
                    LONDON — The U.K. has started rolling out the coronavirus vaccine developed by AstraZeneca and the University of Oxford, marking another step in its battle against the coronavirus pandemic.
                </p>
                <p class="text" slot="text">
                    LONDON — The U.K. has started rolling out the coronavirus vaccine developed by AstraZeneca and the University of Oxford, marking another step in its battle against the coronavirus pandemic.
                </p>
            </app-article-card>
        `;
    }
}

customElements.define(AppArticle.is, AppArticle);

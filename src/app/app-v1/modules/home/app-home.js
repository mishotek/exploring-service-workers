import {html, css, LitElement} from "lit-element";
import '../../components/app-article-card/app-article-card';
import 'lit-elem-components/public/lit-button/lit-button';
import {LitButtonTypes} from "lit-elem-components/public/lit-button/lit-button-types";

export class AppHome extends LitElement {
    static get is() {
        return 'app-home';
    }

    static get styles() {
        // language=css
        return css`
            .articles {
                display: flex;
                flex-direction: column;
                padding: var(--space-tiny);
            }
        `;
    }

    render() {
        // language=html
        return html`
            <div class="articles">
                <app-article-card img-url="https://images.unsplash.com/photo-1578307870387-edd3bcf5a976?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=964&q=80">
                    <span slot="title">
                        UK rolls out Oxford-AstraZeneca vaccine as it battles against Covid surge
                    </span>
                    <span slot="subtitle">
                        The New York Times • 13 hours ago
                    </span>
                    <span slot="text">
                        LONDON — The U.K. has started rolling out the coronavirus vaccine developed by AstraZeneca and the University of Oxford, marking another step in its battle against the coronavirus pandemic.
                    </span>
                    
                    <lit-button type="${LitButtonTypes.Text}" slot="actions">
                        read more
                    </lit-button>
                </app-article-card>
            </div>
        `;
    }
}

customElements.define(AppHome.is, AppHome);

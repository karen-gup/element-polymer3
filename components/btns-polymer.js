import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

export class BntsPolymer extends PolymerElement {

    static get template () {
        return html `
        <style> 

        </style>
        <section class="btn-class">
        <button on-click="prev">«</button>
        <h2 class="page">[[page]]</h2>
        <button on-click="next">»</button>
      </section>
        `
    }


}

window.customElements.define('btns-polymer', BntsPolymer)
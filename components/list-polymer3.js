import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js'
import './element-polymer3.js'

class ListPolymer3 extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: flex;
          background-color: #2b2c2c;
          flex-wrap: wrap;
          padding: 2%;
          margin: 0;
          width: 100%;
          justify-content: space-evenly;
        }
        .btn-primary {
          height: 85px;
          width: 200px;
          background: #28d3de;
          border: 3px solid #d5ee3e;
          box-sizing: border-box;
          border-radius: 15px;
          font-size: 3em;
          color: #D5EE3E;
        }
        .btn-class {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .page {
          color: #28d3de;
          font-size: 3em;
        }
      </style>

      <iron-ajax
        auto
        url="[[api]][[search]]"
        last-response="{{results}}"
      >
      </iron-ajax>
        <section>
        <input type="text" id="saveme" on-change="handleSave" />
        </section>
      <template is="dom-repeat" items="[[results.results]]">
        <element-polymer3
          nombre="[[item.name]]"
          status="[[item.status]]"
          species="[[item.species]]"
          imagen="[[item.image]]"
          origin="[[item.origin.name]]"
          location="[[item.location.name]]"
          episode="[[item.episode.length]]"
        >
        </element-polymer3>
      </template>

      <section class="btn-class">
        <button class="btn-primary" on-click="prev">«</button>
        <h2 class="page">[[page]]</h2>
        <button class="btn-primary" on-click="next">»</button>
      </section>
    `;
  }

  static get properties() {
    return {
      api:{
        type: String,
        value: "https://rickandmortyapi.com/api/character/"
      },
   results: {
     type: Array,
     value: function() {
       return[]
     },
     notify:false
   },
   page: {
    type: Number,
    value: 1,
  },
  search: {
    type: String,
    value: "",
    observer: 'functionObserver',
  }
    
    };
  }
  
  handleSave(e){
    this.search="?name="+ e.target.value
    console.log(this.search)
  }

  next() {
    console.log("sisirvo")
  }
  prev() {
    if(this.page > 1) {
    this.page--}
  }
  functionObserver(uno, dos) {
    console.log(dos, uno)
  }
}

window.customElements.define('list-polymer', ListPolymer3);
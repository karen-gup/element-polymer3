import { html, PolymerElement } from "@polymer/polymer/polymer-element.js";
import "@polymer/iron-ajax/iron-ajax.js";
import "./element-polymer3.js";

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
        .searcher {
          width: 100%;
          margin: 5px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .btn-primary {
          height: 85px;
          width: 200px;
          background: #28d3de;
          border: 3px solid #d5ee3e;
          box-sizing: border-box;
          border-radius: 15px;
          font-size: 3em;
          color: #d5ee3e;
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
        #saveme {
          width: 292.12px;
          height: 35.98px;
          left: 33.94px;
          top: 91.79px;
          background: #28d3de;
          border: 4px solid #c9e710;
          border-radius: 15px;
          font-family: sans-serif;
          font-size: 20px;
          color: #607d8b;
        }
      </style>

      <iron-ajax auto url="[[api]][[pageN]][[search]]" last-response="{{results}}">
      </iron-ajax>
      <section class="searcher">
        <input type="text" id="saveme" on-change="handleSave" placeholder="Search" />
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
        <h2 class="page">[[pageN]]</h2>
        <button class="btn-primary" on-click="next">»</button>
      </section>
    `;
  }

  static get properties() {
    return {
      api: {
        type: String,
        value: "https://rickandmortyapi.com/api/character/?page=",
      },
      results: {
        type: Array,
        value: function () {
          return [];
        },
        notify: false,
      },
      page :{
        type: String,
        value:'',

      },
      pageN: {
        type: Number,
        value: 1,
      },
      search: {
        type: String,
        value: "",
      },
    };
  }

  next() {
       this.pageN++
       this.page = "?page=" + this.pageN
       console.log("next",this.api,this.page,this.search)
  }
  prev() {
      this.pageN--;
      this.page = "?page=" + this.pageN
      console.log("prev",this.api,this.page,this.search)
  }
  handleSave(e) {
    this.search = "&name=" + e.target.value;
    console.log("search",this.api,this.page,this.search)
  }
}

window.customElements.define("list-polymer", ListPolymer3);

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-collapse/iron-collapse.js'

export class ElementPolymer3 extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: inline-grid;          
       
        background: #2A2B27;
        border: 3px solid #87F860;
        border-radius: 12px;
        font-family: 'Lucida Sans Unicode';
        margin-bottom: 10px;
        align-items: center;
      }
      h1 {
        font-size:  1.6em;
        color: #00D1DE;
      }
      span {
        font-weight: bold;
      }
      p {
        font-size: 1.2em;
        color: #00D1DE;
      }
      img {
        width: 100%;
        height: 350px;
        border-radius: 12px 12px 0px 0px;
      }
      
      </style>
      <center>
        <img on-click="toggle"
          src=[[imagen]] 
          alt="avatar"/>
          <h1>[[nombre]]</h1>
      </center>
      <iron-collapse opened="[[desplegado]]">
     
      <p on-click="resaltarDescripcion"> <span> [[status]] - [[species]]<span> </p>
      <p> Origin: <span>[[origin]]</span> </p>
      <p> Location: <span>[[location]]</span> </p>
      <p> Number of appearances: <span>[[episode]]</span> </p>
     
    </iron-collapse>
    `;
  }


  static get properties() {
    return {
      nombre: String,
      status: String,
      species: String,
      imagen: String,
      origin: String,
      location: String,
      episode: Number,
      desplegado: {
        type: Boolean,
        value: false
      }
    };
  }

  resaltarDescripcion(e) {
    this.status= this.status.toUpperCase();
    console.log(e)
  }
  toggle(){
    this.desplegado = !this.desplegado
  }
}

window.customElements.define('element-polymer3', ElementPolymer3);

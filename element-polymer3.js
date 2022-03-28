import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-collapse/iron-collapse.js'

export  class ElementPolymer3 extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          
        padding: 10px 15px;
        background-color: rgb(211, 247, 247);
        color: rgb(36, 54, 77);
        border-radius: 6px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        margin-bottom: 10px;
      }
      h1 {
        font-size:  1.4em;
        margin: 0;
        color: #f52757;
      }
      p {
        font-size: .9em;
        color: #2055a8;
      }
      p span {
        font-weight: bold;
      }
        }
      </style>
      <h1 on-click="toggle" >[[nombre]]</h1>
      <iron-collapse opened="[[desplegado]]">
      <p on-click="resaltarDescripcion"> [[descripcion]] </p>
      <p> <span>clasificación:</span> [[clasificacion]] </p>
    </iron-collapse>
    `;
  }


  static get properties() {
    return {
      nombre: String,
      clasificacion: {
        type: String,
        value: "sin clasificar"
      },
      descripcion: String,
      desplegado: {
        type: Boolean,
        value: false
      }
    };
  }

  resaltarDescripcion(e) {
    this.descripcion= this.descripcion.toUpperCase();
    console.log(e)
  }
  toggle(){
    this.desplegado = !this.desplegado
  }
}

window.customElements.define('element-polymer3', ElementPolymer3);

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-collapse/iron-collapse.js'
import '@polymer/iron-ajax/iron-ajax.js'
import './element-polymer3'
class ListPolymer3 extends PolymerElement {
  
  static get template() {
    return html`
      <style>
        :host {
          display: block;
      </style>

      <iron-ajax
        auto
        url="https://rickandmortyapi.com/api/character"        
        last-response="{{results}}"
      >
      </iron-ajax>

      <template is="dom-repeat" items="[[results.results]]">
        <element-polymer3
          nombre="[[item.name]]"
          clasificacion="[[item.status]]"
          descripcion="[[item.species]]"
        >
        </element-polymer3>
      </template>
    `;
  }

  static get properties() {
    return {
   results: {
     type: Array,
     value: function() {
       return[]
     }
   }
    

    };
  }
  

}

window.customElements.define('list-polymer', ListPolymer3);

//En linea 14
{/* <iron-ajax
auto
url="https://rickandmortyapi.com/api/character"
handle-as="json"
last-response="{{list}}"
>
</iron-ajax> */}

// list: {
//   type: Array,
//   value: function() {
//       return[
//         {
//           nombre:"ID tarjeta 1" ,
//           descripcion:"Descripción del ID 1" ,
//           clasificacion:"privado",
//         },
//         {
//           nombre:"ID tarjeta 2" ,
//           descripcion:"Descripción del ID 2" ,
//           clasificacion:"privado",
//         },
//         {
//           nombre:"ID tarjeta 3" ,
//           descripcion:"Descripción del ID 3" ,
//           clasificacion:"privado",
//         }
//       ];
//   }
// }
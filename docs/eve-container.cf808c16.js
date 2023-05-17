import{s as e,x as t}from"./lit-element.03977ca5.js";customElements.define("eve-container",class extends e{static get properties(){return{fluid:{type:Boolean}}}render(){return t`
      <style>
      ${"@custom-media --screen-xs (max-width: 576px); @custom-media --screen-sm (min-width: 576px); @custom-media --screen-md (min-width: 768px); @custom-media --screen-lg (min-width: 992px); @custom-media --screen-xl (min-width: 1200px);  :host .container {     margin-right: auto;     margin-left: auto;     padding-left: 15px;     padding-right: 15px;   }  :host .container-fluid {     margin-right: auto;     margin-left: auto;     padding-left: 15px;     padding-right: 15px;   }  @media (--screen-xs) {     :host .container {       width: calc(100% - 30px);     }   }  @media (--screen-sm) {     :host .container {       width: 540px;     }   }  @media (--screen-md) {     :host .container {       width: 720px;     }   }  @media (--screen-lg) {     :host .container {       width: 960px;     }   }  @media (--screen-xl) {     :host .container {       width: 1140px;     }   }"}
      </style>
      <div class=${this.fluid?"container-fluid":"container"}>
        <slot></slot>
      </div>
    `}});
//# sourceMappingURL=eve-container.cf808c16.js.map

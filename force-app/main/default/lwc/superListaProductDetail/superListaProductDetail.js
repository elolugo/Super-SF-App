import { LightningElement,api } from 'lwc';

export default class SuperListaProductDetail extends LightningElement {

    @api producto;

    @api estaEnLista;

    get productClass() { 
        return this.estaEnLista ? 'slds-box selected' : 'slds-box';
      }

    tileClick() {
        /*
        const event = new CustomEvent('tileclick', {
            // detail contains only primitives
            detail: this.product.fields.Id.value
        });
        // Fire the event from c-tile
        this.dispatchEvent(event);
        */

        
    }
}
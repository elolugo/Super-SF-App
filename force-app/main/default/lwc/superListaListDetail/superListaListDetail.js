import { LightningElement,api } from 'lwc';
import updateCompradoProductoInListaSuper from '@salesforce/apex/ListaSuperProductoController.updateCompradoProductoInListaSuper';
export default class SuperListaProductDetail extends LightningElement {

    @api listaSuperId;

    @api producto;

    get productClass() { 
        return this.producto.Comprado__c ? 'slds-box selected' : 'slds-box';
    }

    tileClick() {

        updateCompradoProductoInListaSuper({listaSuperId: this.listaSuperId, productoId: this.producto.Producto__c})
            .then(result => {
                console.log('Se hizo click y se actualizo en la lista', result)
                this.changeInListStatus(this.producto.Producto__c)
            })
            .catch(error => {
                console.log('Se hizo click y hubo un error al actualizar la lista', error)
            });
    }

    changeInListStatus(productoId){
        
        // Creates the event with the contact ID data.
        const clickedProductEvent = new CustomEvent('clickedproduct', { detail: productoId });

        // Dispatches the event.
        this.dispatchEvent(clickedProductEvent);
    }

}
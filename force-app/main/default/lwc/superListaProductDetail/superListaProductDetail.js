import { LightningElement,api } from 'lwc';
import insertProductoInListaSuper from '@salesforce/apex/ListaSuperProductoController.insertProductoInListaSuper';
import deleteProductoInListaSuper from '@salesforce/apex/ListaSuperProductoController.deleteProductoInListaSuper';
export default class SuperListaProductDetail extends LightningElement {

    @api listaSuperId;

    @api producto;

    @api estaEnLista;

    get productClass() { 
        return this.estaEnLista ? 'slds-box selected' : 'slds-box';
    }

    tileClick() {

        console.log('clicked',this.producto)
        
        if(this.estaEnLista){
            deleteProductoInListaSuper({listaSuperId: this.listaSuperId, productoId: this.producto.Id})
            .then(result => {
                console.log('Se hizo click y se borro en la lista', result)
                this.changeInListStatus(this.producto.Id)
            })
            .catch(error => {
                console.log('Se hizo click y hubo un error al borrar', error)
            });
        }else{
            insertProductoInListaSuper({listaSuperId: this.listaSuperId, productoId: this.producto.Id})
            .then(result => {
                console.log('Se hizo click y se guardo en la lista', result)
                this.changeInListStatus(this.producto.Id)
            })
            .catch(error => {
                console.log('Se hizo click y hubo un error al guardar', error)
            });
        }
    }

    changeInListStatus(productoId){
        
        // Creates the event with the contact ID data.
        const clickedProductEvent = new CustomEvent('clickedproduct', { detail: productoId });

        // Dispatches the event.
        this.dispatchEvent(clickedProductEvent);
    }

}
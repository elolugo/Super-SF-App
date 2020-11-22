import {api, LightningElement, wire} from 'lwc';
import getProductsInListaSuper from '@salesforce/apex/ListaSuperProductoController.getProductsInListaSuper';

export default class SuperListaList extends LightningElement {
    @api recordId;

    @wire(getProductsInListaSuper, { ListaSuperId:  '$recordId'})
    productosEnLista;

    handleClickedProductEvent(event){
        //refreshApex(this.productosEnLista)
    }
}
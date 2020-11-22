import { api, wire, LightningElement } from 'lwc';
import { refreshApex } from '@salesforce/apex';
import getAllProductos from '@salesforce/apex/ProductoController.getAllProductos';
import getProductsInListaSuper from '@salesforce/apex/ListaSuperProductoController.getProductsInListaSuper';

export default class SuperListaProductList extends LightningElement {

    @api
    listaSuperId

    @wire(getAllProductos)
    todosLosProductos;

    @wire(getProductsInListaSuper, { ListaSuperId:  '$listaSuperId'})
    productosEnLista;

    get productos() {
        let productos = []

        //console.log('todos los productos', this.todosLosProductos.data)
        console.log('productos ya en lista', this.productosEnLista.data)
        if(this.todosLosProductos.data){
            for(var i = 0; i < this.todosLosProductos.data.length; i++){
                let producto = this.todosLosProductos.data[i]  //producto en cuestion para saber si ya esta en la lista
                let productoEnListaBandera = false
                if(this.productosEnLista.data){
                    for(var j = 0; j < this.productosEnLista.data.length; j++){
                        let productoEnLista = this.productosEnLista.data[j]
                        if(producto.Id == productoEnLista.Producto__c){
                            //si o si va a encontrar, la cuestion es de setear de alguna forma que ya esta en la lista
                            productoEnListaBandera = true
                        }
                    }
                }
                productos.push({'producto':  producto, 'enLista': productoEnListaBandera})
            }
        }
        return productos
    }

    handleClickedProductEvent(event){
        refreshApex(this.productosEnLista)
    }

}
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import createListaDeSuper from '@salesforce/apex/ListaSuperController.createListaSuper';
export default class HelloWorld extends NavigationMixin(LightningElement) {

    listaSuperId = null;

    handleClickCreateLista(event) {
        console.log('Crear lista apretado')

        createListaDeSuper()
        .then(listaDeSuper => {
            console.log("Lista de super created successfully")
            console.log(listaDeSuper)

            this.listaSuperId = listaDeSuper.Id
            console.log("El id de la lista de super es ", this.listaSuperId)

        })
        .catch(error => {
            console.log("Error")
        });
    }

}
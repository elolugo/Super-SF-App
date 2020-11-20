import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import createListaDeSuper from '@salesforce/apex/ListaDeSuperController.createListaDeSuper';
export default class HelloWorld extends NavigationMixin(LightningElement) {

    handleClickCreateLista(event) {
        console.log('Crear lista apretado')

        createListaDeSuper()
        .then(listaDeSuper => {
            console.log("Lista de super created successfully")
            console.log(listaDeSuper)

            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: listaDeSuper.Id,
                    objectApiName: 'Lista_Super__c',
                    actionName: 'view'
                }
            });

        })
        .catch(error => {
            console.log("Error")
        });
    }

}
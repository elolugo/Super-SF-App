public with sharing class ListaSuperProductoController {

    @AuraEnabled(cacheable=true)
    public static List<Lista_Super_Producto__c> getProductsInListaSuper(String ListaSuperId) {

        System.debug('Se llamo a los productos relacionados');

        return [
            SELECT Id, Name, Lista_Super__c, Producto__c, Nota__c
            FROM Lista_Super_Producto__c
            WHERE Lista_Super__r.Id = :ListaSuperId
        ];

    }
}

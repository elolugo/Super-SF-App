public with sharing class ListaSuperProductoController {

    @AuraEnabled(cacheable=true)
    public static List<Lista_Super_Producto__c> getProductsInListaSuper(String ListaSuperId) {

        return [
            SELECT Id, Name, Lista_Super__c, Producto__c, Nota__c
            FROM Lista_Super_Producto__c
            WHERE Lista_Super__r.Id = :ListaSuperId
        ];

    }

    @AuraEnabled
    public static Lista_Super_Producto__c insertProductoInListaSuper(String listaSuperId, String productoId) {

        System.debug('Se crea un nuevo producto super lista');
        System.debug(listaSuperId);
        System.debug(productoId);

        Lista_Super_Producto__c newInsertInLista = new Lista_Super_Producto__c(
            Lista_Super__c = listaSuperId,
            Producto__c = productoId
        );

        INSERT newInsertInLista;

        return newInsertInLista;

    }

    @AuraEnabled
    public static String deleteProductoInListaSuper(String listaSuperId, String productoId) {

        System.debug('Se borra un producto producto super lista');
        System.debug(listaSuperId);
        System.debug(productoId);

        Lista_Super_Producto__c productoInListaSuperToDelete = [SELECT Id FROM Lista_Super_Producto__c
                                                                WHERE Lista_Super__c = :listaSuperId AND Producto__c = :productoId
                                                                ];

        DELETE productoInListaSuperToDelete;

        return 'Success';

    }

}

public with sharing class ListaSuperProductoController {

    @AuraEnabled(cacheable=true)
    public static List<Lista_Super_Producto__c> getProductsInListaSuper(String ListaSuperId) {

        return [
            SELECT Id, Name, Lista_Super__c, Producto__c, Producto__r.Name, Producto__r.Image_URL__c, Producto__r.Categoria__c, Nota__c, Comprado__c
            FROM Lista_Super_Producto__c
            WHERE Lista_Super__r.Id = :ListaSuperId
            ORDER BY Producto__r.Categoria__c, Producto__r.Name
        ];

    }

    @AuraEnabled
    public static Lista_Super_Producto__c insertProductoInListaSuper(String listaSuperId, String productoId) {

        Lista_Super_Producto__c newInsertInLista = new Lista_Super_Producto__c(
            Lista_Super__c = listaSuperId,
            Producto__c = productoId
        );

        INSERT newInsertInLista;

        return newInsertInLista;

    }

    @AuraEnabled
    public static String deleteProductoInListaSuper(String listaSuperId, String productoId) {

        Lista_Super_Producto__c productoInListaSuperToDelete = [SELECT Id FROM Lista_Super_Producto__c
                                                                WHERE Lista_Super__c = :listaSuperId AND Producto__c = :productoId
                                                                ];

        DELETE productoInListaSuperToDelete;

        return 'Success';

    }

    @AuraEnabled
    public static Lista_Super_Producto__c updateCompradoProductoInListaSuper(String listaSuperId, String productoId) {

        Lista_Super_Producto__c productoInListaSuperToUpdate = [SELECT Id, Comprado__c  FROM Lista_Super_Producto__c
                                                                WHERE Lista_Super__c = :listaSuperId AND Producto__c = :productoId
                                                                ];

        productoInListaSuperToUpdate.Comprado__c = !productoInListaSuperToUpdate.Comprado__c;                  

        UPDATE productoInListaSuperToUpdate;

        return productoInListaSuperToUpdate;

    }

}

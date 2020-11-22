public with sharing class ProductoController {

    @AuraEnabled(cacheable=true)
    public static List<Producto__c> getAllProductos() {
        return [
            SELECT Id, Name, Categoria__c, Image_URL__c
            FROM Producto__c
            ORDER By Categoria__c, Name
       ];
    }

}

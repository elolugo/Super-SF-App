public with sharing class ListaSuperController {

    @AuraEnabled()
    public static Lista_Super__c createListaSuper() {

        //maybe add validation for checking if a lista has already created today
        List<Lista_Super__c> listaDeSuperDeHoy = [SELECT Id, Name FROM Lista_Super__c WHERE CreatedDate = TODAY];

        if(listaDeSuperDeHoy.size() > 0){
            return listaDeSuperDeHoy[0];
        }else{
            String today = Datetime.now().format('E dd-MM-yyyy');

            Lista_Super__c newListaDeSuper = new Lista_Super__c(Name = 'Lista de super | ' + today);
    
            INSERT newListaDeSuper;
    
            return newListaDeSuper;
        }
    }
}

public with sharing class QuoteDto extends BaseDto {
  @AuraEnabled
  public Date endDate {get; set;}
  @AuraEnabled
  public Date startDate {get; set;}
  @AuraEnabled
  public String Name {get; set;}

  public QuoteDto() {
  }

  public QuoteDto(Quote__c quote) {
    super(quote);
    this.endDate = quote.EndDate__c;
    this.startDate = quote.Start_Date__c;
    this.Name = quote.Name;
  }

  @AuraEnabled
  public static QuoteDto quoteDataExchange(Id recordId, String Name,Date startDate,Date endDate){
    QuoteDto Wrapper = new QuoteDto();
    Quote__c getData = [Select Name, EndDate__c, Start_Date__c from Quote__c where Id =:recordId limit 1];
    if (startDate == null && endDate == Null) {
      Wrapper = new QuoteDto(getData);
    }else {
      getData.EndDate__c = endDate;
      getData.Start_Date__c = startDate;
      Wrapper = new QuoteDto(getData);
      update getData;
    }
    return Wrapper;
  }

  public override SObject refreshSo() {
    return null;
  }
}
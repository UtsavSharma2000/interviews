/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api, track } from "lwc";
import getData from '@salesforce/apex/QuoteDto.quoteDataExchange';
import {showToastEvent} from 'lightning/platformShowToastEvent';

export default class EditQuote extends LightningElement {
  @api recordId;
  @track Name;
  @track endDate;
  @track startDate;

  connectedCallback(){
    getData({recordId: this.recordId, Name: this.Name, startDate: this.startDate, endDate: this.endDate}).then(result =>{
      this.Name = result.Name;
      this.endDate = result.endDate;
      this.startDate = result.startDate;
      console.log(JSON.parse(JSON.stringify(result)));
    })
  }

  changesHandler(event){
    if (event.target.label == 'Start Date') {
      this.startDate = event.target.value;
      console.log('Start Date=> ',this.startDate);
    } else{
      this.endDate = event.target.value;
      console.log('End Date=> ',this.endDate);
    }
  }

  SaveHandler(event){
    getData({recordId: this.recordId, Name: this.Name, startDate: this.startDate, endDate: this.endDate}).then(result =>{
      console.log('Result after clicking save button=> ',result);

      const event = new showToastEvent({
        title: 'Record Updated',
        message: 'Saved Quote Details',
      });
      this.dispatchEvent(event);
    })
  }

  // quoteData = {
  //   name: "Quote Name",
  //   endDate: 1547250828000
  // };

  renderedCallback() {}
}

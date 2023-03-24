/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api } from "lwc";

export default class EditQuotePage extends LightningElement {
  @api recordId;
  @api showModal = false;
  modalHandler(event){
    console.log('inside parent modal function');
    this.showModal= event.detail;
    console.log('showmodal=> ', this.showModal);
  }
}

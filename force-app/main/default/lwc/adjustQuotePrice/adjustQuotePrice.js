/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api, track } from "lwc";

export default class AdjustQuotePrice extends LightningElement {
  adjustedAmountLabel = "Adjusted Amount";
  @track adjustedAmount = 0;
  @api isModalOpen = false;

  closeModal() {
      this.isModalOpen = false;
  }
  submitDetails() {
      this.isModalOpen = false;
      
  }

  amountChangeHandler(event){
    this.adjustedAmount = event.detail.value;
    console.log('new amount=> ', event.detail.value);
  }

}

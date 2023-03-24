/*
 * Provus Services Quoting
 * Copyright (c) 2023 Provus Inc. All rights reserved.
 */

import { LightningElement, api } from "lwc";

export default class QuoteTotalSummary extends LightningElement {

    @api showModal = false;

    AdjustedButtonClick(){
        console.log('Button is clicked');
        this.showModal = true;
        const ext = new CustomEvent("modalopen", {
            detail: this.showModal
        });

        this.dispatchEvent(ext);
    }
}

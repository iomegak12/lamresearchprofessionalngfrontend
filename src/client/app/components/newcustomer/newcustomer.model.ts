import { FormGroup, FormControl, Validators } from "@angular/forms";

const CREDIT_LIMIT_BUSINESS_VALIDATION_FAILED = 'As per Business Rules, Credit Limit Validation Failed!';
const MAX_NAME_LENGTH = 15;
const MIN_CREDIT = 1000;
const MAX_CREDIT = 50000;

let generateCustomerId = () => Math.floor(Math.random() * (1000000 - 1) + 1);
let creditLimitValidation = (minCredit = MIN_CREDIT, maxCredit = MAX_CREDIT) => {
    return function (control: FormControl) {
        let currentValue = control.value;

        if (currentValue != null) {
            let creditLimit = parseInt(currentValue);
            let status = creditLimit >= minCredit &&
                creditLimit <= maxCredit;

            if (!status) {
                return {
                    creditLimitValidation: CREDIT_LIMIT_BUSINESS_VALIDATION_FAILED
                };
            }
        }

        return null;
    }
};

const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
const PHONE_PATTERN = /^\d{5}-\d{5}$/;

let customerFormModel: FormGroup =
    new FormGroup(
        {
            customerId: new FormControl(generateCustomerId()),
            customerName: new FormControl('',
                [
                    Validators.required,
                    Validators.maxLength(MAX_NAME_LENGTH)
                ]),
            address: new FormControl('', [Validators.required]),
            credit: new FormControl(0,
                [
                    Validators.required,
                    creditLimitValidation(MIN_CREDIT, MAX_CREDIT)
                ]),
            email: new FormControl('',
                [
                    Validators.required,
                    Validators.pattern(EMAIL_PATTERN)
                ]),
            phone: new FormControl('',
                [
                    Validators.required,
                    Validators.pattern(PHONE_PATTERN)
                ]),
            status: new FormControl(false),
            remarks: new FormControl('')
        });

export {
    customerFormModel
};

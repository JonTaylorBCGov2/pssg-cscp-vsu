import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { POSTAL_CODE } from "../../regex.constants";

export class RecipientDetailsHelper {
    postalRegex = POSTAL_CODE;
    public setupFormGroup(fb: FormBuilder): FormGroup {
        let group = {
            notificationRecipient: ['', Validators.required],

            victimServiceWorker: fb.array([]),
            designate: fb.array([]),

            courtUpdates: [''],
            courtResults: [''],
            courtAppearances: [''],
            courtOrders: [''],
            correctionsInformation: [''],
            atLeastOneNotification: ['', Validators.required],
            additionalComments: [''],
        }

        return fb.group(group);
    }

    public createContactMethod(fb: FormBuilder, type: string = '') {
        let current_validators = [];
        let label = '';
        switch (type) {
            case 'telephone': {
                current_validators = [Validators.minLength(10), Validators.maxLength(15)];
                label = 'Telephone Number';
                break;
            }
            case 'mobile': {
                current_validators = [Validators.minLength(10), Validators.maxLength(15)];
                label = 'Cellular Number';
                break;
            }
            case 'email': {
                current_validators = [Validators.email];
                label = 'Email Address';
                break;
            }
            default: {
                break;
            }
        }
        return fb.group({
            type: [type],
            val: ['', current_validators],
            label: [label],
            leaveMessage: [''],
        });
    }

    public createVictimServiceWorker(fb: FormBuilder) {
        return fb.group({
            firstName: [''],
            lastName: [''],
            organization: [''],
            telephone: [''],
            extension: [''],
            email: [''],
            city: [''],
        });
    }

    public createDesignate(fb: FormBuilder) {
        return fb.group({
            firstName: ['', Validators.required],
            middleName: [''],
            lastName: ['', Validators.required],

            relationship: [''],

            addressSameAsApplicant: [''],
            address: fb.group({
                line1: ['', [Validators.required]],
                line2: [''],
                city: ['', [Validators.required]],
                postalCode: ['', [Validators.required, Validators.pattern(this.postalRegex)]],
                province: ['British Columbia', [Validators.required]],
                country: ['Canada', [Validators.required]],
            }),

            mayWeSendCorrespondence: [true],
            contactMethods: fb.array([this.createContactMethod(fb, 'telephone'), this.createContactMethod(fb, 'mobile'), this.createContactMethod(fb, 'email')]),
            atLeastOneContactMethod: ['', Validators.required],
        });
    }
}
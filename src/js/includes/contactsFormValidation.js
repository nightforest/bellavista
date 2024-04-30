import JustValidate from 'just-validate';

const contactsFormValidation = () => {
    if (document.getElementById('contacts-form')) {
        const validator = new JustValidate('#contacts-form', {
            errorLabelCssClass: ['error-label'],
        });

        document.getElementById('inputName') &&
            validator.addField('#inputName', [
                {
                    rule: 'required',
                    errorMessage: document.getElementById('inputName').getAttribute('data-error-message'),
                },
            ]);
        
        document.getElementById('inputPhone') &&
            validator.addField('#inputPhone', [
                {
                    rule: 'required',
                    errorMessage: document.getElementById('inputPhone').getAttribute('data-error-message'),
                },
            ]);
        
        document.getElementById('inputEmail') &&
            validator.addField('#inputEmail', [
                {
                    rule: 'required',
                    errorMessage: document.getElementById('inputEmail').getAttribute('data-error-message'),
                },
            ]);
        
        document.getElementById('inputWhatsapp') &&
            validator.addField('#inputWhatsapp', [
                {
                    rule: 'required',
                    errorMessage: document.getElementById('inputWhatsapp').getAttribute('data-error-message'),
                },
            ]);

        document.getElementById('checkboxAgree') &&
            validator.addField('#checkboxAgree', [
                {
                    rule: 'required',
                },
            ]);
    }
}

export default contactsFormValidation;
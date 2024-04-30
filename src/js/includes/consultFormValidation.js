import JustValidate from 'just-validate';

const consultFormValidation = () => {
    if (document.getElementById('consult-form')) {
        const validator = new JustValidate('#consult-form', {
            errorLabelCssClass: ['error-label'],
        });

        document.getElementById('inputNameConsult') &&
            validator.addField('#inputNameConsult', [
                {
                    rule: 'required',
                    errorMessage: document.getElementById('inputNameConsult').getAttribute('data-error-message'),
                },
            ]);
        
        document.getElementById('inputPhoneConsult') &&
            validator.addField('#inputPhoneConsult', [
                {
                    rule: 'required',
                    errorMessage: document.getElementById('inputPhoneConsult').getAttribute('data-error-message'),
                },
            ]);
        
        document.getElementById('inputEmailConsult') &&
            validator.addField('#inputEmailConsult', [
                {
                    rule: 'required',
                    errorMessage: document.getElementById('inputEmailConsult').getAttribute('data-error-message'),
                },
            ]);
        
        document.getElementById('inputWhatsappConsult') &&
            validator.addField('#inputWhatsappConsult', [
                {
                    rule: 'required',
                    errorMessage: document.getElementById('inputWhatsappConsult').getAttribute('data-error-message'),
                },
            ]);

        document.getElementById('checkboxAgreeConsult') &&
            validator.addField('#checkboxAgreeConsult', [
                {
                    rule: 'required',
                },
            ]);
    }
}

export default consultFormValidation;
import JustValidate from 'just-validate';

const sellFormValidation = () => {
    if (document.getElementById('sell-form')) {
        const validator = new JustValidate('#sell-form', {
            errorLabelCssClass: ['error-label'],
        });

        document.getElementById('inputNameSell') &&
            validator.addField('#inputNameSell', [
                {
                    rule: 'required',
                    errorMessage: document.getElementById('inputNameSell').getAttribute('data-error-message'),
                },
            ]);
        
        document.getElementById('inputPhoneSell') &&
            validator.addField('#inputPhoneSell', [
                {
                    rule: 'required',
                    errorMessage: document.getElementById('inputPhoneSell').getAttribute('data-error-message'),
                },
            ]);
        
        document.getElementById('inputEmailSell') &&
            validator.addField('#inputEmailSell', [
                {
                    rule: 'required',
                    errorMessage: document.getElementById('inputEmailSell').getAttribute('data-error-message'),
                },
            ]);
        
        document.getElementById('inputWhatsappSell') &&
            validator.addField('#inputWhatsappSell', [
                {
                    rule: 'required',
                    errorMessage: document.getElementById('inputWhatsappSell').getAttribute('data-error-message'),
                },
            ]);

        document.getElementById('checkboxAgreeSell') &&
            validator.addField('#checkboxAgreeSell', [
                {
                    rule: 'required',
                },
            ]);
    }
}

export default sellFormValidation;
import validate from 'validate.js';

const getInputNameToErrorList = (formObject, rules) => {
    return validate(formObject, rules);
}

export default getInputNameToErrorList;
// message: function(value, attribute, validatorOptions, attributes, globalOptions) {
//     return validate.format("^%{num} is not a valid credit card number", {
//       num: value
//     });
// }

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const attributeNameToTranslatedAttributeName = {
    'lastName': 'фамилия',
    'firstName': 'имя',
    'fullPhoneNumber': 'номер телефона',
}

// Type '%' at the start of the message to omit attribute name in message

const lengthMinimumOne = {
    minimum: 1,
    message: function(value, attribute, validatorOptions, attributes, globalOptions) {
        const attributeNameToUse = attributeNameToTranslatedAttributeName.hasOwnProperty(attribute)
            ? attributeNameToTranslatedAttributeName[attribute]
            : '';
        return `^Поле ${attributeNameToUse} должно быть заполнено`
    }
}
const presence = { message: '^Не может быть пустым' };
const russianPhoneNumberRegex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
const strictRussianPhoneNumberRegex = /^(\+7)[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
const messageWrongFormat = '^Неправильный формат';

export const fullPhoneNumberConstraint = {
    presence,
    format: {
        pattern: strictRussianPhoneNumberRegex,
        message: messageWrongFormat
    }
}

export const nonEmptyInputConstraint = {
    presence,
    length: lengthMinimumOne,
}

export const nonEmptyMultiInputConstraint = {
    presence: { message: '^Выберите хотя бы один вариант' },
    length: lengthMinimumOne,
    type: "array"
}

export const russianCountryCodeConstraint = {
    presence,
    format: {
        pattern: /\+7/,
        message: '^Должно начинаться с +7'
    }
}
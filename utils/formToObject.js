import FormData from 'form-data';

const formDataToObject = (formData, convertToArrayKeyList = []) => {
    const object = {};
    formData.forEach((value, key) => {
        // Reflect.has in favor of: object.hasOwnProperty(key)
        if(!Reflect.has(object, key)){
            object[key] = convertToArrayKeyList.includes(key) && key === key ? [value] : value;
            return;
        }
        if(!Array.isArray(object[key])){
            object[key] = [object[key]];    
        }
        object[key].push(value);
    });
    return object;
}

const formToObject = (form, convertToArrayKeyList = []) => {
    const formData = new FormData(form);
    return formDataToObject(formData, convertToArrayKeyList);
}

export default formToObject;
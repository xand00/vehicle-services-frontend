function isObject (item) {
    return (typeof item === "object" && !Array.isArray(item) && item !== null);
  }
  
  const isStrapiModel = obj => obj.hasOwnProperty('__typename') && obj.hasOwnProperty('attributes') ||
    obj.hasOwnProperty('data') && obj.hasOwnProperty('__typename') && isObject(obj.data) && obj.data.hasOwnProperty('attributes');
  
  function UpperCaseArray(input) {
    var result = input.replace(/([A-Z]+)/g, ",$1").replace(/^,/, "");
    return result.split(",");
  }
  
  const isStrapiEntityResponseCollection = obj => obj.hasOwnProperty('__typename') && UpperCaseArray(obj.__typename).slice(-2).join('') === 'ResponseCollection'
  
  const isObjectOrArray = obj => isObject(obj) || Array.isArray(obj);
  
  export default function normalizeResponseFromStrapi(obj) {
    const isObj = isObject(obj);
    const isArr = Array.isArray(obj);
    if(!isObj && !isArr) {
      return obj;
    }
    let extensibleObj = Object.assign({}, obj);
    if(isObj) {
      if(isStrapiEntityResponseCollection(extensibleObj)) {
        extensibleObj = isObject(extensibleObj.data) ? Object.values(Object.values(extensibleObj.data).map(normalizeResponseFromStrapi)) : extensibleObj.data.map(normalizeResponseFromStrapi);
        return extensibleObj;
      }
      if(isStrapiModel(extensibleObj)) {
        extensibleObj = extensibleObj.hasOwnProperty('data') ? extensibleObj.data : extensibleObj
        const attributes = Object.assign({}, extensibleObj.attributes);
        if(extensibleObj.hasOwnProperty('id')) attributes.id = extensibleObj.id;
        extensibleObj = attributes;
        delete extensibleObj.__typename;
      }
      Object.entries(extensibleObj).map(([key, value]) => {
        if(isObjectOrArray(value)) extensibleObj[key] = normalizeResponseFromStrapi(value);
      });
    }
    return extensibleObj;
}
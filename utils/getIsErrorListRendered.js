const getIsErrorListRendered = (inputKeyToErrorList, touchedInputs, inputAttributeName) => inputKeyToErrorList && inputKeyToErrorList.hasOwnProperty(inputAttributeName) && touchedInputs && touchedInputs.includes(inputAttributeName)

export default getIsErrorListRendered;
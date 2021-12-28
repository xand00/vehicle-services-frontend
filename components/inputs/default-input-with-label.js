import onlyUnique from "../../utils/arrays/filters/onlyUnique";
import getIsErrorListRendered from "../../utils/getIsErrorListRendered";
import DefaultInput from "./default-input"
import InputLabel from "./input-label"

const DefaultInputWithLabel = ({
  inputAttributeName,
  labelAttributeFor = null,
  label = null,
  inputAttributeClassName = "",
  inputAttributeValue = '',
  inputAttributeOnInput = () => {},
  children,
  containerAttributeHidden = false,
  inputKeyToErrorList = {},
  touchedInputs = [],
  errorFromInputNameList = [],
  mask = null
}) => {
  const isInvalid = getIsErrorListRendered(inputKeyToErrorList, touchedInputs, inputAttributeName);
  const errorListFromOtherInputs = errorFromInputNameList.filter(inputName => inputKeyToErrorList.hasOwnProperty(inputName)).flatMap(inputName => inputKeyToErrorList[inputName]);
  return (
    <div hidden={containerAttributeHidden}>
      {label ? (
        <InputLabel labelAttributeFor={labelAttributeFor}>{label}</InputLabel>
      ) : (
        ""
      )}
      {children ?? (
        <DefaultInput
          name={inputAttributeName}
          className={(isInvalid ? 'invalid-input ' : '') + inputAttributeClassName }
          value={inputAttributeValue}
          mask={mask}
          onInput={inputAttributeOnInput}
        />
      )}
      { isInvalid ? errorListFromOtherInputs.concat(inputKeyToErrorList[inputAttributeName]).filter(onlyUnique).map((error) => (
            <span key={error} className="block text-red-500 py-2">
              {error}
            </span>
          ))
        : null}
    </div>
  )
}

export default DefaultInputWithLabel


import createClassNameFromClassList from "./create-class-name-from-class-list";
import filterClassList from "./filter-class-list";

export default (errorExists: boolean, className?: string) => createClassNameFromClassList(filterClassList([
    'default-input',
    'w-full',
    'xl:w-1/2',
    errorExists ? 'invalid-input' : '',
    className ?? ''
]))
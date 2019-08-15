
import { camelCase } from 'change-case';

const changeCase = (obj, transformFunc = camelCase) => {
  const isObject = (o) => Object.prototype.toString.apply(o) === '[object Object]';
  const isArray = (o) => Object.prototype.toString.apply(o) === '[object Array]';

  const transformedObj = isArray(obj) ? [] : {};

  return Object.entries(obj).reduce((acc, [key, value]) => {
    const transformedKey = transformFunc(key);
    if (isObject(value) || isArray(value)) {
      acc[transformedKey] = changeCase(value, transformFunc);
    } else {
      acc[transformedKey] = value;
    }
    return acc;
  }, transformedObj);
};

export default changeCase;

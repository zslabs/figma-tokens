import set from 'set-value';
import { appendTypeToToken } from '@/app/components/createTokenObj';

export default function convertTokensToObject(tokens) {
  const tokenObj = Object.entries(tokens).reduce((acc, [key, val]) => {
    const tokenGroupObj = {};
    val.forEach((token) => {
      const tokenWithType = appendTypeToToken(token);
      const { name, ...tokenWithoutName } = tokenWithType;
      delete tokenWithoutName.internal__Type;
      delete tokenWithoutName.internal__isTypeToken;
      const tokenValue = name.split('.').pop() === 'type' ? tokenWithoutName.value : tokenWithoutName;
      set(tokenGroupObj, token.name, tokenValue);
    });
    acc[key] = tokenGroupObj;
    return acc;
  }, {});

  return tokenObj;
}

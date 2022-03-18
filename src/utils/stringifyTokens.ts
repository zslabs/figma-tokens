import set from 'set-value';
import { stringifyTokenValues } from '@/app/components/utils';

export default function stringifyTokens(tokens, activeTokenSet) {
  const tokenObj = {};
  console.log('Stringify', tokens);

  tokens[activeTokenSet].forEach((token) => {
    console.log(('Token', token.name, token.name.split('.').pop()));

    const { name, ...tokenWithoutName } = token;
    delete tokenWithoutName.internal__Type;
    delete tokenWithoutName.internal__isTypeToken;
    const tokenValue = name.split('.').pop() === 'type' ? tokenWithoutName.value : tokenWithoutName;
    set(tokenObj, token.name, tokenValue);
  });
  console.log('Stringify end', tokenObj);

  return stringifyTokenValues(tokenObj);
}

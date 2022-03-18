import set from 'set-value';

export default function stringifyTokens(tokens, activeTokenSet) {
  const tokenObj = {};
  console.log('Stringify', tokens);

  tokens[activeTokenSet].forEach((token) => {
    const { name, ...tokenWithoutName } = token;
    delete tokenWithoutName.internal__Type;
    delete tokenWithoutName.internal__IsTypeToken;
    const tokenValue = name.split('.').pop() === 'type' ? tokenWithoutName.value : tokenWithoutName;
    set(tokenObj, token.name, tokenValue);
  });
  console.log('Stringify end', tokenObj);

  return JSON.stringify(tokenObj, null, 2);
}

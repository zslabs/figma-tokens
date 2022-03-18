import set from 'set-value';
import { appendTypeToToken } from '@/app/components/createTokenObj';
import { TransformerOptions } from './types';
import { expand } from '../app/components/utils';

export default function convertTokensToGroupedObject(tokens, excludedSets, options: TransformerOptions) {
  let tokenObj = {};
  tokenObj = tokens.reduce((acc, token) => {
    if (excludedSets.includes(token.internal__Parent)) {
      return acc;
    }
    const obj = acc || {};
    const tokenWithType = appendTypeToToken(token);
    delete tokenWithType.name;
    if (!options.preserveRawValue) {
      delete tokenWithType.rawValue;
    }
    delete tokenWithType.internal__Parent;
    delete tokenWithType.internal__Type;
    console.log('Token with type before', tokenWithType);

    if (
      (!!options.expandTypography && tokenWithType.internal__Type === 'typography')
      || (!!options.expandShadow && tokenWithType.internal__Type === 'boxShadow')
    ) {
      const expanded = expand(tokenWithType.value);
      set(obj, token.name, { ...expanded });
    } else {
      set(obj, token.name, tokenWithType);
    }
    console.log('Have set', token.name, tokenWithType);
    return acc;
  }, {});

  console.log('TOKENOBJ', tokenObj);

  return tokenObj;
}

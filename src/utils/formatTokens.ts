import set from 'set-value';
import { expand, stringifyTokenValues } from '../app/components/utils';

export default function formatTokens({
  tokens,
  tokenSets,
  includeAllTokens = false,
  includeParent = true,
  expandTypography = false,
  expandShadow = false,
}) {
  const nestUnderParent = includeAllTokens ? true : includeParent;
  const tokenObj = {};

  tokenSets.forEach((tokenSet) => {
    tokens[tokenSet].forEach((token) => {
      const { name, ...tokenWithoutName } = token;
      if (
        (token.internal__Type === 'typography' && expandTypography)
        || (token.internal__Type === 'boxShadow' && expandShadow)
      ) {
        const expanded = expand(tokenWithoutName.value);
        set(tokenObj, nestUnderParent ? [tokenSet, token.name].join('.') : token.name, { ...expanded });
      } else {
        set(tokenObj, nestUnderParent ? [tokenSet, token.name].join('.') : token.name, tokenWithoutName);
      }
    });
  });

  return stringifyTokenValues(tokenObj);
}

import { SingleToken } from '@/types/tokens';
import { convertToRgb } from '../color';
import { findReferences } from '../findReferences';
import { isSingleTokenValueObject } from '../is';
import { checkAndEvaluateMath } from '../math';

// @TODO This function logic needs to be explained to improve it. It is unclear at this time which cases it needs to handle and how
export function getAliasValue(token: SingleToken | string | number, tokens: SingleToken[] = []): string | number | null {
  // @TODO not sure how this will handle typography and boxShadow values. I don't believe it works.
  // The logic was copied from the original function in aliases.tsx
  let returnedValue: string | null = isSingleTokenValueObject(token) ? token.value.toString() : token.toString();
  try {
    const tokenReferences = findReferences(returnedValue);

    if (tokenReferences?.length) {
      const resolvedReferences = Array.from(tokenReferences).map((ref) => {
        if (ref.length > 1) {
          const nameToLookFor = ref.startsWith('{') ? ref.slice(1, ref.length - 1) : ref.substring(1);
          // exclude references to  self
          if ((typeof token === 'object' && nameToLookFor === token.name) || nameToLookFor === token) return null;

          const tokenAliasSplited = nameToLookFor.split('.');
          const tokenAliasSplitedLast = tokenAliasSplited.pop();
          const tokenAliasLastExcluded = tokenAliasSplited.join('.');
          const foundTokens = tokens.filter((t) => t.name.includes(nameToLookFor) || t.name === tokenAliasLastExcluded);

          const tokensInObject = [];
          for (let index = 0; index < foundTokens.length; index++) {
            if (foundTokens[index].name.indexOf(nameToLookFor) === 0) {
              if (foundTokens[index].name !== nameToLookFor && foundTokens[index].name[nameToLookFor.length] === '.') {
                /// object
                tokensInObject.push(getAliasValue(foundTokens[index], tokens));
              }
              if (foundTokens[index].name === nameToLookFor) {
                /// token
                return getAliasValue(foundTokens[index], tokens);
              }
            }
            if (foundTokens[index].name === tokenAliasLastExcluded) {
              // property
              const candidateProperty = tokenAliasSplitedLast;
              if (foundTokens[index]?.name === tokenAliasLastExcluded && candidateProperty && foundTokens[index].rawValue?.hasOwnProperty(candidateProperty)) return foundTokens[index]?.rawValue[candidateProperty];
            }
          }
          return tokensInObject;
        }
        return ref;
      });
      tokenReferences.forEach((reference, index) => {
        const resolvedReference = resolvedReferences[index];
        const stringValue = String(resolvedReference);
        const resolved = checkAndEvaluateMath(stringValue);
        returnedValue = returnedValue ? returnedValue.replace(reference, String(resolved)) : returnedValue;
      });

      if (returnedValue === 'null') {
        returnedValue = null;
      }
    }

    if (returnedValue) {
      const remainingReferences = findReferences(returnedValue);
      if (!remainingReferences) {
        const couldBeNumberValue = checkAndEvaluateMath(returnedValue);
        if (typeof couldBeNumberValue === 'number') return couldBeNumberValue;
        return convertToRgb(couldBeNumberValue);
      }
    }
  } catch (err) {
    console.log(`Error getting alias value of ${JSON.stringify(token, null, 2)}`, tokens);
    return null;
  }

  if (returnedValue) {
    return checkAndEvaluateMath(returnedValue);
  }
  return returnedValue;
}

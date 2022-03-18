import { SingleToken, SingleTokenObject } from '@/types/tokens';
import { isTypographyToken, isShadowToken, isValueToken } from '../app/components/utils';

function isTypeDefinition(key: string): boolean {
  return key === 'type';
}

function checkForTokens({
  obj,
  token,
  root = null,
  returnValuesOnly = false,
  expandTypography = false,
  expandShadow = false,
  givenType = undefined,
  parentKey = '',
}): [SingleTokenObject[], SingleToken] {
  // replaces / in token name
  let returnValue;
  givenType = token.type || givenType;
  const shouldExpandTypography = expandTypography ? isTypographyToken(token.value) : false;
  const shouldExpandShadow = expandShadow ? isShadowToken(token.value) : false;

  if (isValueToken(token) && !shouldExpandTypography && !shouldExpandShadow) {
    returnValue = {
      ...token,
      internal__Type: givenType,
    };
  } else if (
    (isTypographyToken(token) && !expandTypography)
    || (isShadowToken(token) && !expandShadow)
  ) {
    returnValue = {
      internal__Type: givenType,
      value: Object.entries(token).reduce((acc, [key, val]) => {
        acc[key] = isValueToken(val) && returnValuesOnly ? val.value : val;
        return acc;
      }, {}),
    };

    if (token.description) {
      delete returnValue.value.description;
      returnValue.description = token.description;
    }
  } else if (typeof token === 'object') {
    let tokenToCheck = token;
    if (isValueToken(token)) {
      tokenToCheck = token.value;
    }
    Object.entries(tokenToCheck).map(([key, value]) => {
      const [, result] = checkForTokens({
        obj,
        token: value,
        root: [root, key].filter((n) => n).join('.'),
        returnValuesOnly,
        expandTypography,
        expandShadow,
        givenType,
        parentKey: key,
      });
      const tokenKey = root ? [root, key].join('.') : key;
      const tokenResult = { name: tokenKey, ...result, internal__IsTypeToken: isTypeDefinition(parentKey) };

      if (result) {
        obj.push(tokenResult);
      }
    });
  } else {
    console.log("IN ELSE', token");

    returnValue = {
      value: token,
      internal__Type: givenType,
    };
  }

  console.log('RETURN VALUE', returnValue);

  try {
    if (returnValue?.name) {
      returnValue.name = returnValue.name.split('/').join('.');
    }
  } catch (e) {
    console.log(e);
  }

  return [obj, returnValue];
}

export default function convertToTokenArray({
  tokens, returnValuesOnly = false, expandTypography = false, expandShadow = false,
}) {
  const [result] = checkForTokens({
    obj: [], token: tokens, returnValuesOnly, expandTypography, expandShadow,
  });
  console.log('Done parsing for tokens', result);
  return Object.values(result);
}

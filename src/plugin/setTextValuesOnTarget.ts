/* eslint-disable no-param-reassign */
import { transformValue } from './helpers';

const fontWeightMap = {
  100: 'Ultralight',
  200: 'Thin',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'Semibold',
  700: 'Bold',
  800: 'Heavy',
  900: 'Black',
};

function transformFontFamily(family: string) {
  if (family.startsWith('-apple-system')) {
    return 'SF Pro Text';
  } if (family.startsWith('ui-monospace')) {
    return 'SF Mono';
  }
  return family;
}

function transformFontWeight(weight: string | number) {
  if (typeof weight === 'number') {
    return fontWeightMap[weight];
  }
  return `'${weight}'`;
}

export default async function setTextValuesOnTarget(target, token) {
  try {
    const { value, description } = token;
    const {
      fontFamily,
      fontWeight,
      fontSize,
      lineHeight,
      letterSpacing,
      paragraphSpacing,
      textCase,
      textDecoration,
    } = value.value || value;
    const family = fontFamily ? transformFontFamily(fontFamily) : target.fontName.family;
    const style = fontWeight ? transformFontWeight(fontWeight) : target.fontName.style;
    await figma.loadFontAsync({ family, style });

    if (fontFamily || fontWeight) {
      target.fontName = {
        family,
        style,
      };
    }

    if (fontSize) {
      target.fontSize = transformValue(fontSize, 'fontSizes');
    }
    if (lineHeight) {
      target.lineHeight = transformValue(lineHeight, 'lineHeights');
    }
    if (letterSpacing) {
      target.letterSpacing = transformValue(letterSpacing, 'letterSpacing');
    }
    if (paragraphSpacing) {
      target.paragraphSpacing = transformValue(paragraphSpacing, 'paragraphSpacing');
    }
    if (textCase) {
      target.textCase = transformValue(textCase, 'textCase');
    }
    if (textDecoration) {
      target.textDecoration = transformValue(textDecoration, 'textDecoration');
    }
    if (description) {
      target.description = description;
    }
  } catch (e) {
    console.log('Error setting font on target', target, token, e);
  }
}

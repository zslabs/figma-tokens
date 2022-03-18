import { SettingsState } from '@/app/store/models/settings';
import { transformValue } from './helpers';
import updateColorStyles from './updateColorStyles';
import updateEffectStyles from './updateEffectStyles';
import updateTextStyles from './updateTextStyles';

export default function updateStyles(
  tokens,
  shouldCreate = false,
  settings: SettingsState = {} as SettingsState,
): void {
  console.log('Updating styles', tokens);

  const styleTokens = tokens.map((token) => {
    const slice = settings?.ignoreFirstPartForStyles ? 1 : 0;
    const name = token.name.split('.').slice(slice).join('/');
    return {
      ...token,
      name,
      value: transformValue(token.value, token.internal__Type),
    };
  });
  console.log('Style tokens', styleTokens);

  const colorTokens = styleTokens.filter((n) => ['color', 'colors'].includes(n.internal__Type));
  const textTokens = styleTokens.filter((n) => ['typography'].includes(n.internal__Type));
  const effectTokens = styleTokens.filter((n) => ['boxShadow'].includes(n.internal__Type));

  console.log('text tokens', textTokens);

  if (!colorTokens && !textTokens && !effectTokens) return;
  if (colorTokens.length > 0) {
    updateColorStyles(colorTokens, shouldCreate);
  }
  if (textTokens.length > 0) {
    updateTextStyles(textTokens, shouldCreate);
  }
  if (effectTokens.length > 0) {
    updateEffectStyles(effectTokens, shouldCreate);
  }
}

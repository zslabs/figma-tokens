import { mergeTokenGroups, resolveTokenValues } from '@/plugin/tokenHelpers';
import { UsedTokenSetsMap } from '@/types';
import { SingleToken } from '@/types/tokens';

function getTokensStoredOnDocument() {
  return figma.root.getSharedPluginData('tokens', 'values');
}

function getUsedTokenSetsOnDocument() {
  return figma.root.getSharedPluginData('tokens', 'usedTokenSet');
}

function mergeTokens(tokens: Record<string, SingleToken<true, unknown>[]>, sets: UsedTokenSetsMap) {
  const resolvedTokens = resolveTokenValues(mergeTokenGroups(tokens, {
    ...sets,
  }));
  console.log('Tokens', tokens);
  return resolvedTokens;
}

export { getTokensStoredOnDocument, getUsedTokenSetsOnDocument, mergeTokens };

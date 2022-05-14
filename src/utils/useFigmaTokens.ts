import { mergeTokenGroups, resolveTokenValues } from '@/plugin/tokenHelpers';
import { UsedTokenSetsMap } from '@/types';
import { SingleToken } from '@/types/tokens';

function getTokensStoredOnDocument(): Record<string, SingleToken<true, unknown>[]> {
  const tokens = figma.root.getSharedPluginData('tokens', 'values');
  return JSON.parse(tokens);
}

function getUsedTokenSetsOnDocument(): UsedTokenSetsMap {
  const sets = figma.root.getSharedPluginData('tokens', 'usedTokenSet');
  return JSON.parse(sets);
}

function mergeTokens(tokens: Record<string, SingleToken<true, unknown>[]>, sets: UsedTokenSetsMap) {
  const resolvedTokens = resolveTokenValues(mergeTokenGroups(tokens, {
    ...sets,
  }));
  return resolvedTokens;
}

function getResolvedTokens() {
  const tokens = getTokensStoredOnDocument();
  const sets = getUsedTokenSetsOnDocument();
  return mergeTokens(tokens, sets);
}

export {
  getTokensStoredOnDocument, getUsedTokenSetsOnDocument, mergeTokens, getResolvedTokens,
};

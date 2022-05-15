import { Properties } from '@/constants/Properties';
import { mergeTokenGroups, resolveTokenValues } from '@/plugin/tokenHelpers';
import { UsedTokenSetsMap } from '@/types';
import { SingleToken } from '@/types/tokens';

type StoredTokenReference = [Properties, string][];

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

function getTokensByKey(node: BaseNode, key: Properties) {
  return JSON.parse(node.getSharedPluginData('tokens', key));
}

function getTokensOnNode(node: BaseNode) {
  const keys = node.getSharedPluginDataKeys('tokens');
  const tokens: StoredTokenReference = [];
  keys.forEach((key: string) => {
    if (!Object.keys(Properties).includes(key)) {
      return;
    }
    tokens.push(getTokensByKey(node, key as Properties));
  });
  return tokens;
}

export {
  getTokensStoredOnDocument, getUsedTokenSetsOnDocument, mergeTokens, getResolvedTokens, getTokensOnNode, getTokensByKey,
};

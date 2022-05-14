const {
  getTokensStoredOnDocument, getUsedTokenSetsOnDocument, mergeTokens, getResolvedTokens,
} = require('./dist/useFigmaTokens');

// This plugin creates 5 rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).

const stored = getTokensStoredOnDocument();
const tokenSets = getUsedTokenSetsOnDocument();
const resolved = getResolvedTokens();
console.log('Stored', stored);
console.log('sets', tokenSets);
console.log('merged', resolved);

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();

# Figma Tokens Helpers

Exposes functions that utilize Figma Tokens shared plugin data.

## How to use

Import the functions you need into your plugin.

## Available helpers

### getTokensStoredOnDocument
Returns all tokens stored on document as an object containing token sets that each contain tokens as an array.

Caution: These tokens are unresolved meaning they could use aliases. To get the resolved value according to what token sets were used, see `getResolvedTokens` 

Example usage:

`getTokensStoredOnDocument()`

Result: 
```
{
    "global": {
        [
            {name: 'colors.white', value: '#ffffff', type: 'color'},
            {name: 'fg.default', value: '{colors.white}', type: 'color'}
        ]
    }
}
```

### getResolvedTokens
Reads all tokens stored on the document and the last used token sets and returns an array of tokens with their resolved value according to the set combination.

`getResolvedTokens()`

Result: 
```
[
    {name: 'colors.white', value: '#ffffff', type: 'color', internal__Parent: '_scale/light', rawValue: '#ffffff'}, {name: 'bg.default', value: '#ffffff', type: 'color', internal__Parent: 'light/default', rawValue: '{colors.white}'}
]
```

### getUsedTokenSetsOnDocument
Returns the used token sets in the document as they were last used, e.g. if a set was toggled active/set as source or disabled. This has an impact on what values each token has.

`getUsedTokenSetsOnDocument()`

Result: 
```
{
    'global': 'source', 'light': 'disabled', 'dark': 'enbabled' 
}
```

### getTokensOnNode
Returns all tokens stored on a node.

`getTokensOnNode(figma.currentPage.selection[0])`

Result: 
```
{
    "fill": "colors.black",
    "sizing": "sizing.md"
}
```

### getTokensByKey
Returns the stored token on a node for a given key

`getTokensByKey(figma.currentPage.selection[0], "fill")`

Result: 
```
"colors.black"
```

### mergeTokens
Merges given tokens with given token sets. This function is being used in getResolvedTokens, but with this function you can feed it custom sets or tokens.

`mergeTokens(tokens, sets)`

Result: 
```
[
    {name: 'colors.white', value: '#ffffff', type: 'color', internal__Parent: '_scale/light', rawValue: '#ffffff'}, {name: 'bg.default', value: '#ffffff', type: 'color', internal__Parent: 'light/default', rawValue: '{colors.white}'}
]
```

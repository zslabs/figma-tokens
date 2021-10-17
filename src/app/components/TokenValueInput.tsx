import React from 'react';
import {MentionsInput, Mention} from 'react-mentions';

export default function TokenValueInput({label, value, onChange, custom, resolvedTokens}) {
    const tokensAsData = resolvedTokens
        .filter((t) => t.type !== 'typography' && t.type !== 'boxShadow')
        .map((token) => {
            return {
                id: token.name,
                display: token.name,
                value: token.value,
            };
        });
    return (
        <label htmlFor="value" className="text-xxs font-medium block">
            Value
            <MentionsInput name="value" className="input w-full" singleLine value={value} onChange={onChange}>
                <Mention
                    trigger="{"
                    data={tokensAsData}
                    markup="{__id__}"
                    displayTransform={(id, display) => `{${display}}`}
                    renderSuggestion={(suggestion, search, highlightedDisplay) => (
                        <div className="text-xxs flex items-start p-2">
                            <div className="font-medium">{highlightedDisplay}</div>
                            <div className="text-gray-500">{suggestion.value}</div>
                        </div>
                    )}
                />
                <Mention
                    trigger="({"
                    data={tokensAsData}
                    markup="{__id__}"
                    displayTransform={(id, display) => `({${display}}`}
                    renderSuggestion={(suggestion, search, highlightedDisplay) => (
                        <div className="text-xxs flex items-start p-2">
                            <div className="font-medium">{highlightedDisplay}</div>
                            <div className="text-gray-500">{suggestion.value}</div>
                        </div>
                    )}
                />
                <Mention
                    trigger="$"
                    data={tokensAsData}
                    markup="$__id__"
                    displayTransform={(id, display) => `$${display}`}
                />
            </MentionsInput>
        </label>
    );
}

import React from 'react';
import { SingleToken } from '@/types/tokens';
import useTokens from '@/app/store/useTokens';
import { TokensContext } from '@/context';
import { TokenTooltipContentValue } from './TokenTooltipContentValue';
import Text from '../Text';

type Props = {
  token: SingleToken;
};

export const TokenTooltipContent: React.FC<Props> = ({ token }) => {
  const tokensContext = React.useContext(TokensContext);
  const { isAlias } = useTokens();
  const tokenIsAlias = React.useMemo(() => (
    isAlias(token, tokensContext.resolvedTokens)
  ), [token, isAlias, tokensContext.resolvedTokens]);

  return (
    <div>
      <Text muted size="xsmall" bold>
        {token.name.split('.')[token.name.split('.').length - 1]}
      </Text>
      <TokenTooltipContentValue token={token} />
      {tokenIsAlias && (
      <Text muted size="xsmall">
        <TokenTooltipContentValue token={token} shouldResolve />
      </Text>
      )}
      {token.description && <Text muted size="xsmall">{token.description}</Text>}
    </div>
  );
};

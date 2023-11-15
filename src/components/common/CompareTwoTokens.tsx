import styled from "styled-components";

interface TokenInfo {
  name: string;
  value: string;
  icon: string;
}

interface CompareTwoTokensProps {
  tokens: TokenInfo[];
  isDark?: boolean;
}

const CompareTwoTokens = (props: CompareTwoTokensProps) => {
  const { tokens, isDark } = props;

  return (
    <LockedTokensWrapper isDark={isDark ? true : false}>
      {tokens.map((token) => {
        return (
          <div>
            <img src={token.icon} />
            <span>{token.name}</span>
            <span>{token.value}</span>
          </div>
        );
      })}
    </LockedTokensWrapper>
  );
};

export default CompareTwoTokens;

const LockedTokensWrapper = styled.div<{ isDark: boolean }>`
  width: 100%;
  display: flex;
  padding: 14px 22px;
  justify-content: space-between;
  align-items: center;

  border-radius: 30px;
  background: ${({ isDark }) => (isDark ? `#33343E` : `#f8f8fb`)};

  div {
    display: flex;
    align-items: center;
    gap: 6px;

    img {
      width: 18px;
      height: 18px;
    }
    span {
      ${({ theme }) => theme.fonts.Body_Text_Small};
      color: ${({ isDark }) => (isDark ? `#fff` : `#33343e`)};
    }
  }
`;

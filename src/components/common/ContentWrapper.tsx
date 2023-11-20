import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 35px;
  border-radius: 20px;
  background-color: #fff;
  color: #33343e;
`;

export const DarkContentWrapper = styled(ContentWrapper)`
  background-color: #3e404c;
  color: #fff;
`;

export const SpaceBetweenWrapper = styled.div<{ $direction?: string }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ $direction }) =>
    $direction === "column" && "flex-direction: column; align-items: stretch;"};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 80px;
`;

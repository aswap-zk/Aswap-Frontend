import styled from "styled-components";

interface PageWrapperProps {
  children: React.ReactNode;
  maxWidth?: number;
}

const PageWrapper = (props: PageWrapperProps) => {
  return (
    <Root>
      <ContentWrapper $maxWidth={props.maxWidth}>
        {props.children}
      </ContentWrapper>
    </Root>
  );
};

export default PageWrapper;

const Root = styled.div`
  background-color: #edeef4;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div<{ $maxWidth?: number }>`
  width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth : 450)}px;
`;

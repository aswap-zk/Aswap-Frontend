import styled from "styled-components";

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = (props: PageWrapperProps) => {
  return (
    <Root>
      <ContentWrapper>{props.children}</ContentWrapper>
    </Root>
  );
};

export default PageWrapper;

const Root = styled.div`
  background-color: #edeef4;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 450px;
`;

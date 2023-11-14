import styled from "styled-components";

interface PageTitleProps {
  children: string;
}

const PageTitle = (props: PageTitleProps) => {
  return <TitleText>{props.children}</TitleText>;
};

export default PageTitle;

const TitleText = styled.div`
  color: var(--primary-neutral-10, #15151a);
  text-align: center;
  font-family: Hanson;
  font-size: 40px;
  margin-top: 120px;
`;

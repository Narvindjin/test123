import styled from "styled-components";
import Title from "/src/components/ui/title/title";

export const ProductImage = styled.img`
  object-fit: cover;
  width: 248px;
  height: 248px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => props.theme.indent};
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: row;
  width: 727px;
  min-height: 288px;
  box-sizing: border-box;
  padding: 20px;
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const StyledTitle = styled(Title)`
  font-size: 24px;
  margin-bottom: 16px;
  line-height: 130%;
`;

import styled from "styled-components";

const Fieldset = styled.fieldset`
  position: relative;
  display: block;
  width: 100%;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colorWhite};
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  z-index: 3;
  padding: 24px 20px 24px 20px;
  margin-bottom: 18px;
  margin-left: 0;
  margin-right: 0;
`;

export default Fieldset;

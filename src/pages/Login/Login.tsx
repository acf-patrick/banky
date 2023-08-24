import styled from "styled-components";
import Image from "./Image";
import Form from "./Form";

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;

  &>div {
    flex-grow: 1;
  }
`;

export default function Login() {
  return (
    <StyledContainer>
      <Form />
      <Image />
    </StyledContainer>
  );
}

import styled from "styled-components";
import Image from "./Image";
import Form from "./Form";

const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
`;

function Register() {
  return (
    <StyledContainer>
      <Image />
      <Form />
    </StyledContainer>
  );
}

export default Register;

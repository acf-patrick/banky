import styled from "styled-components";
import Image from "./Image";
import Form from "./Form";

const StyledContainer = styled.div`
  display: flex;
  height: 100vh;

  .form {
    flex-grow: 1;
  }
`;

function Register() {
  return (
    <StyledContainer>
      <Image />
      <div className="form">
        <Form />
      </div>
    </StyledContainer>
  );
}

export default Register;

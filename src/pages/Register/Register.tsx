import styled from "styled-components";
import Image from "./Image";
import Form from "./Form";

const StyledContainer = styled.div`
  display: flex;
  height: 100vh;

  .form {
    flex-grow: 1;
    position: relative;
    background: #ffffff5a;

    &:before {
      display: block;
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url("/images/form-bg.jpg");
      background-repeat: no-repeat;
      z-index: -1;
    }
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

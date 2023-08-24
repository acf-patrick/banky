import { styled } from "styled-components";
import { Logo } from "../../components";

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  flex-grow: 1;
  min-width: 480px;
  max-width: 540px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  h1 {
    color: ${({ theme }) => theme.colors.tertiary};
  }

  img {
    max-height: 460px;
    flex-grow: 0;
  }

  .image {
    user-select: none;
  }
`;

function Image() {
  return (
    <StyledContainer>
      <div className="texts">
        <Logo />
        <h1>Construisons notre banque ensemble.</h1>
      </div>
      <div className="image">
        <img src="/images/ether.svg" alt="credit card" />
      </div>
    </StyledContainer>
  );
}

export default Image;

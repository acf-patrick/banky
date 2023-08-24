import styled, { keyframes } from "styled-components";

const appears = keyframes`
from {
  opacity: 0;
  transform: translateY(-15px);
} to {
  opacity: 1;
  transform: translateY(0);
}
`;

const StyledContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  label {
    font-weight: bold;
  }

  input {
    padding: 10px 10px;
    background: rgba(0, 0, 0, 0.125);
    border-radius: 5px;
    border: none;
    color: white;

    &::placeholder {
      color: #ffffff7c;
    }
  }

  form {
    animation: ${appears} 1s both;
    margin-top: 2rem;

    & > div {
      margin-bottom: 1.25rem;
    }
  }

  .buttons {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    flex-direction: row-reverse;

    button {
      color: white;
      background: ${({ theme }) => theme.colors.secondary};
      padding: 10px 0;
      width: 160px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      transition: all 300ms;
      box-shadow: 5px 5px 10px #00000050;

      &:hover {
        background: transparent;
        outline: 2px solid ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.quaternary};
      }
    }
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .names {
    display: flex;
    gap: 2rem;

    div {
      flex-grow: 1;
    }
  }
`;

function Form() {
  return (
    <StyledContainer>
      <h1>Ajouter/Consulter un client</h1>
      <form action="">
        <div className="names">
          <div className="input">
            <label htmlFor="last-name">Nom</label>
            <input type="text" id="last-name" placeholder="Nom du client" />
          </div>
          <div className="input">
            <label htmlFor="first-name">Prénom(s)</label>
            <input type="text" id="first-name" placeholder="Prénom du client" />
          </div>
        </div>
        <div className="input">
          <label htmlFor="address">Adresse</label>
          <input type="text" id="address" placeholder="Adresse du client" />
        </div>
        <div className="input">
          <label htmlFor="profession">Profession</label>
          <input
            type="text"
            id="profession"
            placeholder="Profession du client"
          />
        </div>
        <div className="buttons">
          <button>Nouveau client</button>
          <button>Consulter</button>
        </div>
      </form>
    </StyledContainer>
  );
}

export default Form;

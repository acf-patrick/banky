import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  flex-grow: 1;
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
      <h1>Connexion à Banky</h1>
      <form action="">
        <p className="names">
          <div className="input">
            <label htmlFor="last-name">Nom</label>
            <input type="text" id="last-name" />
          </div>
          <div className="input">
            <label htmlFor="first-name">Prénom(s)</label>
            <input type="text" id="first-name" />
          </div>
        </p>
        <p className="input">
          <label htmlFor="address">Adresse</label>
          <input type="text" id="address" />
        </p>
        <p className="input">
          <label htmlFor="profession">Profession</label>
          <input type="text" id="profession" />
        </p>
        <div className="buttons">
          <button>Nouveau client</button>
          <button>Consulter</button>
        </div>
      </form>
    </StyledContainer>
  );
}

export default Form;

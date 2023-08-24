import { keyframes, styled } from "styled-components";
import { Logo } from "../../components";
import {
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { VscKey } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const appears = keyframes`
from {
  opacity: 0;
  transform: translateX(-30px);
} to {
  opcaity: 1;
  transform: translateX(0);
}
`;

const StyledContainer = styled.div`
  max-width: 520px;
  display: flex;
  flex-direction: column;

  & > div {
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  h1 {
    transform: translateX(-1rem);

    & > * {
      font-size: 2rem;
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
    transition: color 300ms;

    &:hover {
      color: black;
    }
  }

  button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  p {
    border: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    align-items: center;
    position: relative;

    label {
      padding: 7px 11px;
      border-right: 1px solid ${({ theme }) => theme.colors.border};
    }

    input {
      flex-grow: 1;
      border: none;
      width: 240px;
      outline: none;
      padding-left: 1rem;
    }
  }

  form {
    animation: ${appears} 750ms both;
    margin-top: -2rem;

    h2 {
      font-size: 1.25rem;
      margin-bottom: 2rem;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;

    a {
      color: ${({ theme }) => theme.colors.quaternary};

      &:hover {
        text-decoration: underline;
      }
    }

    button {
      background: ${({ theme }) => theme.colors.secondary};
      padding: 10px 30px;
      border-radius: 5px;
      box-shadow: 5px 5px 10px #00000050;
      color: white;

      &:active {
        background: ${({ theme }) => theme.colors.tertiary};
      }
    }
  }

  .eye {
    position: absolute;
    font-size: 1rem;
    top: 50%;
    right: 5px;
    transform: translateY(-45%);
  }
`;

export default function Form() {
  const [hidePassword, setHidePassword] = useState(true);
  const navigate = useNavigate();

  const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/user");
  };

  const hidePasswordOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setHidePassword((hidePassword) => {
      const input: HTMLInputElement = document.querySelector("#password")!;
      input.type = hidePassword ? "text" : "password";
      return !hidePassword;
    });
  };

  return (
    <StyledContainer>
      <div>
        <h1>
          <Logo />
        </h1>
        <form onSubmit={formOnSubmit}>
          <h2>Entrez vos identifiants</h2>
          <p className="username">
            <label htmlFor="username">
              <AiOutlineUser />
            </label>
            <input type="text" placeholder="Nom d'utilisateur" id="username" />
          </p>
          <p className="password">
            <button className="eye" onClick={hidePasswordOnClick}>
              {hidePassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
            <label htmlFor="password">
              <VscKey />
            </label>
            <input type="password" id="password" placeholder="Mot de passse" />
          </p>
          <div className="buttons">
            <a href="#">Mot de passe oublié ?</a>
            <button>LOGIN</button>
          </div>
        </form>
        <a href="#">Créer un compte</a>
      </div>
    </StyledContainer>
  );
}

import { styled } from "styled-components";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { useState, useEffect } from "react";

const StyledContainer = styled.div`
  background: url("/images/login-bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  & > div {
    padding-left: 5rem;
    padding-bottom: 10rem;
  }

  .icon {
    background: ${({ theme }) => theme.colors.tertiary};
    width: 2.5rem;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    border-radius: 100%;
    color: white;
    font-size: 1.5rem;
  }

  .texts {
    color: white;

    h1 {
      font-size: 3rem;
      text-shadow: 2px 5px #0000009e;
    }

    p {
      color: #ffffffb3;
      font-size: 1.25rem;
      text-justify: distribute;
    }
  }
`;

export default function Image() {
  const quotes = [
    "On compte bien être fidèle",
    "Loin de la banquise avec une bonne banque",
    "C'est en communiquant qu'on avance",
    "Loin d'être la banque la plus bancale",
    "la banque qui assure est une banque qui rassure",
    "On cimente vos rêves",
    "Construisons notre banque ensemble",
    "On ne signe pas l'échec avec notre banque",
    "Pour rajeunir, trouvez la banque qui a le moins de rides",
  ];
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const handle = setInterval(() => {
      setCurrentQuote((index) => (index + 1) % quotes.length);
    }, 5000);
    return () => {
      clearInterval(handle);
    };
  });

  return (
    <StyledContainer>
      <div>
        <div className="icon">
          <LiaMoneyBillWaveSolid />
        </div>
        <div className="texts">
          <h1>Banky</h1>
          <p>{quotes[currentQuote]}</p>
        </div>
      </div>
    </StyledContainer>
  );
}

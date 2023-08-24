import { styled } from "styled-components";

const StyledLogo = styled.div`
  font-family: "Aurella";
  font-size: 1.5rem;
  padding-left: 0.5rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

export default function Logo() {
  return <StyledLogo>Banky</StyledLogo>;
}

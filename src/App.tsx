import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { RegistrationPage } from "./pages";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RegistrationPage />
    </ThemeProvider>
  );
}

export default App;

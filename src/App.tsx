import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { RegistrationPage } from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RegistrationPage />
    </ThemeProvider>
  );
}

export default App;

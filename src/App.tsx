import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router/Router";
import { GlobalStyle } from "./themes/global";
import { UserContextProvider } from "./contexts/userContext";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <UserContextProvider>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;

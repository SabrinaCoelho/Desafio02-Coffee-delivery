import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartContext";

function App() {

  return (
    <ThemeProvider theme={defaultTheme} >
      <GlobalStyle/>
      <BrowserRouter>
      <CartContextProvider>
        <Router/>
      </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

import { Provider } from "react-redux"
import { store } from "./store"
import { ThemeProvider } from "@mui/material";
import { GlobalStyled } from "./configs/global/GlobalStyled";
import { cardTheme } from "./configs/themes/cardTheme";
import { AppRoutes } from "./routes/AppRoutes";
import { ScrollToTopButton } from "./components/Botton";



function App() {
  

  return (
    <Provider store={store}>
      <ThemeProvider theme={cardTheme}>
        <GlobalStyled />
        <AppRoutes />
        <ScrollToTopButton/>
      </ThemeProvider>
    </Provider>
  );
}

export default App

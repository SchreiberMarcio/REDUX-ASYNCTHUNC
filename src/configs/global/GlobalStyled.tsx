import { CssBaseline, CSSObject, GlobalStyles } from "@mui/material";
import "@fontsource/spectral/200.css";
import "@fontsource/spectral/300.css";
import "@fontsource/spectral/400.css";
import "@fontsource/spectral/500.css";
import "@fontsource/spectral/600.css";
import "@fontsource/spectral/700.css";
import "@fontsource/spectral/800.css";

const styles: Record<string, CSSObject> = {
  html: {
    height: "100%",
    boxSizing: "border-box",
  },
  body: {
    fontFamily: "Spectral, Arial, sans-serif",
    margin: 0,
    padding: 0,
    height: "100%",
    backgroundColor: "#b9b9b9",
    color: "#333",
    lineHeight: 1.5,
  },
  "*": {
    boxSizing: "inherit",
  },
  "*::before, *::after": {
    boxSizing: "inherit",
  },
  a: {
    textDecoration: "none",
    color: "inherit",
  },
  "ul, ol": {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
};

export function GlobalStyled() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={styles} />
    </>
  );
}

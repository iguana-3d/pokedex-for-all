import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import GlobalStyle from "../../styles/globalStyle";
import MainContainer from "../layouts/MainContainer";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Pokédex for All</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainContainer>
          <Component {...pageProps} />
        </MainContainer>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;

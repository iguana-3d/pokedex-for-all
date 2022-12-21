import React, { useState } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import GlobalStyle from "../../styles/globalStyle";
import MainContainer from "../layouts/MainContainer";
import { ThemeProvider } from "../contexts/ThemeContext";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [isHideOverflowOnModal, setIsHideOverflowOnModal] = useState(false);

  return (
    <React.Fragment>
      <Head>
        <title>Pokédex for All</title>
      </Head>
      <ThemeProvider>
        <GlobalStyle hideOverflowOnModal={isHideOverflowOnModal} />
        <MainContainer
          isHideOverflowOnModal={isHideOverflowOnModal}
          setIsHideOverflowOnModal={setIsHideOverflowOnModal}
        >
          <Component {...pageProps} />
        </MainContainer>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;

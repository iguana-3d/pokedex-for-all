import React, { useState, useEffect, Suspense, lazy } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import GlobalStyle from "../../styles/globalStyle";
import MainContainer from "../layouts/MainContainer";
import { ThemeProvider } from "../contexts/ThemeContext";
import NProgress from "nprogress";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [isHideOverflowOnModal, setIsHideOverflowOnModal] = useState(false);
  const router = useRouter();

  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);
    console.log('a')
    return () => {
      console.log('b')
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

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

import "../styles/globals.css";
import type {} from "next/app";
import { GlobalStyles } from "../styles/GlobalStyles";
import { AnimatePresence } from "framer-motion";
import { Fragment, useEffect } from "react";
import { hotjar } from "react-hotjar";
export default function App({ Component, pageProps, router }: any) {
  useEffect(() => {
    hotjar.initialize(3234941, 6);
  }, []);
  // use layout if the compoenent has layout prop
  const Layout = Component.layout ?? Fragment;
  const url = `https://localhost:3000${router.route}`;
  console.log(url);
  return (
    <>
      <title>Alifend Portfolio</title>
      <meta
        key="description"
        name="description"
        content={`Andrés Celis Portfolio`}
      />
      <GlobalStyles />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Layout key={router.route}>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </>
  );
}

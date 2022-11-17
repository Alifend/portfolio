import "../styles/globals.css";
import type {} from "next/app";
import { GlobalStyles } from "../styles/GlobalStyles";
import { AnimatePresence } from "framer-motion";
import { Fragment, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { hotjar } from "react-hotjar";
export default function App({ Component, pageProps, router }: any) {
  useEffect(() => {
    hotjar.initialize(3234941, 6);
  }, []);
  // use layout if the compoenent has layout prop
  const Layout = Component.layout ?? Fragment;
  return (
    <>
      <title>Alifend Portfolio</title>
      <meta
        key="description"
        name="description"
        content={`Andrés Celis Portfolio`}
      />
      <Analytics />
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

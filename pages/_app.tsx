import "../styles/globals.css";
import type { AppProps } from "next/app";
import type {} from "next/app";
import { GlobalStyles } from "../styles/GlobalStyles";
import { AnimatePresence } from "framer-motion";
import { Fragment } from "react";
export default function App({ Component, pageProps, router }: any) {
  // use layout if the compoenent has layout prop
  const Layout = Component.layout ?? Fragment;
  const url = `https://localhost:3000${router.route}`;
  console.log(url);
  return (
    <>
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

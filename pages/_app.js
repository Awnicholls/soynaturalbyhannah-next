import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import Layout from "../components/Layout"
import { CartProvider } from '../context/cart';
import { CheckoutProvider } from '../context/checkout';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ModalProvider } from "../context/modal";
import Modal from "../components/Modal";
import { AnimatePresence } from "framer-motion";
import "tailwindcss/tailwind.css";


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);


export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>      <Elements
        stripe={stripePromise}
        options={{
          fonts: [
            {
              cssSrc:
                "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap",
            },
          ],
        }}
      >
      <ThemeProvider theme={theme}>
        <ModalProvider>
        <CartProvider>
          <CheckoutProvider>
          <Modal />
<Layout>     
     <CssBaseline />
     <AnimatePresence initial={false} exitBeforeEnter>

        <Component {...pageProps} />
        </AnimatePresence>
        </Layout>
        </CheckoutProvider>
        </CartProvider>
        </ModalProvider>
      </ThemeProvider>
      </Elements>
    </>

  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import NavbarSection from "@/components/header/navbar";
import "@/styles/animation.module.css";
import FooterSection from "@/components/section/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NavbarSection />
      <Component {...pageProps} />
      <FooterSection />
    </ChakraProvider>
  );
}

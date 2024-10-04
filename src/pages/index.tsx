import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import * as React from "react";
import { Box } from "@chakra-ui/react";
import RecipeSection from "@/components/section/hero";
import LocationSection from "@/components/section/location";
import MenuSection from "@/components/section/menu";
import AboutSection from "@/components/section/about";
import FranchiseSection from "@/components/section/franchise";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Delicious Food Landing Page</title>
        <meta
          name="description"
          content="Explore our mouth-watering recipes and restaurant locations!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main">
        <RecipeSection />
        <AboutSection />
        <LocationSection />
        <MenuSection />
        <FranchiseSection />
      </Box>
    </>
  );
}

import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Icon,
  Image,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const FooterSection = () => {
  const currentDate = new Date().getFullYear();

  return (
    <Box bg="#c4f1f9" color="black" py={10}>
      <Container maxW="7xl">
        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          spacing={8}
        >
          <Box textAlign={{ base: "center", md: "left" }}>
            <Link href="/">
              <Image
                src="/assets/logo.jpg"
                alt="logo"
                width={100}
                borderRadius="full"
                mx="auto"
              />
            </Link>
            <Text mt={2} maxW="xl" mx="auto">
              Tribos brings innovative flair to world famous peri peri cuisine.
              We invite you to experience the fire that brings us all together.
            </Text>
          </Box>

          <Stack
            textAlign={{ base: "center", md: "left" }}
            alignItems={{ base: "center", md: "flex-start" }}
            spacing={2}
          >
            <Text fontSize="lg" fontWeight="bold">
              Our Menu
            </Text>
            <Link href="#about">About</Link>
            <Link href="#location">Location</Link>
            <Link href="#menu">Menu</Link>
            <Link href="#franchise">Franchise</Link>
          </Stack>
        </Stack>

        <Text
          textAlign="center"
          mt={8}
          fontSize="sm"
          borderTop="2px solid"
          borderTopColor="whiteAlpha.800"
          pt={6}
        >
          Created © {currentDate} with{" "}
          <Icon as={FaHeart} color="red.500" aria-label="Heart icon" /> | All
          rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default FooterSection;

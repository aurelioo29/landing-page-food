import {
  Box,
  Image,
  Heading,
  VStack,
  HStack,
  Text,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function FranchiseSection() {
  return (
    <Box
      borderRadius={"xl"}
      m={5}
      id="franchise"
      height="auto"
      bg="gray.100"
      p={10}
    >
      {/* Bagian: Our Franchise */}
      <VStack spacing={4} align="center">
        <Heading as="h1" size={"xl"}>
          Our Franchise
        </Heading>
        <Image
          src="/assets/franchise.jpg"
          alt="Franchise Image"
          boxSize={{ base: "100%", md: "80%" }}
          objectFit="contain"
        />
      </VStack>

      {/* Bagian utama dibagi jadi dua kolom, di tengah halaman */}
      <Flex
        justify="center"
        align="center"
        mt={8}
        flexDirection={{ base: "column", md: "row" }}
        w="100%"
      >
        {/* Bagian kiri: Follow Our Social Media */}
        <VStack spacing={4} align="center" w={{ base: "100%", md: "40%" }}>
          <Heading as="h2" size={"xl"}>
            Follow Our Social Media
          </Heading>
          <HStack spacing={4} wrap="wrap" justify="center">
            {" "}
            <HStack spacing={2}>
              <IconButton
                as="a"
                href="https://instagram.com/periresto"
                target="_blank"
                aria-label="Instagram"
                icon={<FaInstagram />}
                size="lg"
              />
              <IconButton
                as="a"
                href="https://twitter.com/periresto"
                target="_blank"
                aria-label="Twitter"
                icon={<FaTwitter />}
                size="lg"
              />
              <IconButton
                as="a"
                href="https://facebook.com/perirestaurant"
                target="_blank"
                aria-label="Facebook"
                icon={<FaFacebook />}
                size="lg"
              />
            </HStack>
          </HStack>
        </VStack>

        {/* Bagian kanan: Gambar Makanan */}
        <Box
          w={{ base: "100%", md: "auto" }}
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          gap={4}
          mt={{ base: 4, md: 0 }}
        >
          <Image
            src="/assets/hero-1.jpg"
            alt="Food Image 1"
            objectFit="cover"
            borderRadius="md"
            boxSize={{ base: "100%", md: "300px" }}
          />
          <VStack spacing={4}>
            <Image
              src="/assets/hero-2.jpg"
              alt="Food Image 2"
              objectFit="cover"
              borderRadius="md"
              boxSize={{ base: "100%", md: "140px" }}
            />
            <Image
              src="/assets/hero-3.jpg"
              alt="Food Image 3"
              objectFit="cover"
              borderRadius="md"
              boxSize={{ base: "100%", md: "140px" }}
            />
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
}

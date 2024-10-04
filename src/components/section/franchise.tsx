import {
  Box,
  Image,
  Heading,
  VStack,
  HStack,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function FranchiseSection() {
  return (
    <Box
      borderRadius={"xl"}
      m={5}
      id="franchise"
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="auto"
      bg="gray.100"
      p={5}
    >
      {/* Bagian: Our Franchise */}
      <VStack spacing={4} align="center">
        <Heading as="h1">Our Franchise</Heading>
        <Image
          src="/assets/franchise.jpg"
          alt="Franchise Image"
          boxSize="80%"
          objectFit="contain"
        />
      </VStack>

      {/* Bagian: Follow Our Social Media */}
      <VStack spacing={4} align="center" mt={8}>
        {" "}
        <Text fontSize="xl" fontWeight="bold">
          Follow Our Social Media
        </Text>
        {/* Social Media Icons */}
        <HStack spacing={4}>
          <IconButton
            as="a"
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
            icon={<FaFacebook />}
            size="lg"
            colorScheme="facebook"
          />
          <IconButton
            as="a"
            href="https://twitter.com"
            target="_blank"
            aria-label="Twitter"
            icon={<FaTwitter />}
            size="lg"
            colorScheme="twitter"
          />
          <IconButton
            as="a"
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
            icon={<FaInstagram />}
            size="lg"
            colorScheme="pink"
          />
        </HStack>
      </VStack>

      {/* Bagian Kanan: Gambar Makanan */}
      <HStack spacing={5} justifyContent="center" mt={8}>
        {" "}
        {/* Tambahkan margin atas untuk memberi jarak */}
        <Image
          src="/assets/hero-1.jpg" // Ganti dengan gambar makanan Anda
          alt="Food Image 1"
          boxSize="150px" // Atur ukuran gambar
          objectFit="cover" // Memastikan gambar tidak terdistorsi
          borderRadius="md"
        />
        <Image
          src="/assets/hero-2.jpg" // Ganti dengan gambar makanan Anda
          alt="Food Image 2"
          boxSize="150px" // Atur ukuran gambar
          objectFit="cover" // Memastikan gambar tidak terdistorsi
          borderRadius="md"
        />
        <Image
          src="/assets/hero-3.jpg" // Ganti dengan gambar makanan Anda
          alt="Food Image 3"
          boxSize="150px" // Atur ukuran gambar
          objectFit="cover" // Memastikan gambar tidak terdistorsi
          borderRadius="md"
        />
      </HStack>
    </Box>
  );
}

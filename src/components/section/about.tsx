import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";

export default function AboutSection() {
  return (
    <Box
      id="about"
      margin={5}
      borderRadius={"xl"}
      mt="20"
      mb="20"
      as="section"
      py={10}
      px={6}
      bg="gray.50"
      textAlign="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing={6} maxW="4xl">
        <Heading
          as="h2"
          size="xl"
          fontWeight="bold"
          bgGradient="linear(to-r, teal.400, green.400)"
          backgroundClip="text"
        >
          About Our Product
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Our food is crafted with the finest ingredients, ensuring each bite is
          a burst of flavor and nourishment. Whether you&apos;re craving a
          healthy snack or looking for a full meal, our products are designed to
          satisfy your taste buds and keep you energized throughout the day.
        </Text>
        <Text fontSize="lg" color="gray.600">
          We believe in the power of fresh, locally sourced ingredients and
          carefully curated recipes that combine traditional flavors with modern
          twists. Join us on a culinary journey and discover the difference that
          quality makes.
        </Text>
        <Image
          src="/assets/about.jpg"
          alt="Delicious food"
          borderRadius="md"
          shadow="lg"
        />
      </VStack>
    </Box>
  );
}

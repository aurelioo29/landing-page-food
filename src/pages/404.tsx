import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  return (
    <Box
      textAlign="center"
      py={10}
      px={6}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      bg={"black"}
    >
      <VStack spacing={6}>
        <Heading
          display="inline-block"
          as="h1"
          size="4xl"
          bgGradient="linear(to-r, teal.300, blue.500)"
          backgroundClip="text"
        >
          404
        </Heading>
        <Text fontSize="18px" color="white" fontWeight="bold">
          Oops! Page not found.
        </Text>
        <Text color="white" fontSize="lg">
          The page you&apos;re looking for does not seem to exist.
        </Text>
        <Button
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, blue.500)"
          color="white"
          variant="solid"
          onClick={() => router.push("/")}
        >
          Go to Home
        </Button>
      </VStack>
    </Box>
  );
}

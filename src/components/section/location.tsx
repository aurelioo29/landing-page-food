import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const LocationSection = () => {
  return (
    <Box
      id="location"
      m={5}
      p={5}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      maxW="100%"
    >
      {/* Left Side: Locations Info */}
      <VStack
        align="flex-start"
        spacing={4}
        flex="1"
        textAlign={{ base: "center", md: "left" }}
        m="12"
      >
        <Heading as="h2" size="xl">
          Our Location
        </Heading>
        <Text>
          We’re opening new locations each month. Check back frequently to see
          if we’re coming to a city near you.
        </Text>

        <Link
          width={{ base: "100%", md: "auto" }}
          borderRadius="full"
          border="3px solid"
          borderColor="gray.500"
          padding={2.5}
          textAlign="center"
          href="https://maps.app.goo.gl/dowG8RcF8n41UJsX9"
          target="_blank"
          _hover={{
            bg: "#c4f1f9",
            color: "black",
            borderColor: "gray.500",
          }}
        >
          Our Location
        </Link>

        {/* List of locations */}
        <VStack align="flex-start" spacing={3}>
          {/* Saddle Brook Location */}
          <HStack>
            <Icon
              as={FaMapMarkerAlt}
              color="black"
              aria-label="Saddle Brook Location"
            />
            <Link
              fontWeight="bold"
              href="#"
              _hover={{
                textDecoration: "underline",
                color: "teal.500",
              }}
            >
              SADDLE BROOK, 383 Market Street, Saddle Brook, NJ 07663
            </Link>
          </HStack>
          {/* Jersey City Location */}
          <HStack>
            <Icon
              as={FaMapMarkerAlt}
              color="gray.500"
              aria-label="Jersey City Location"
            />
            <Text color="gray.500">
              JERSEY CITY, 109 Christopher Columbus Drive, Jersey City, NJ 07302
            </Text>
          </HStack>
        </VStack>
      </VStack>

      {/* Right Side: Image */}
      <Box
        flex="1"
        mt={{ base: 8, md: 0 }}
        ml={{ md: 8 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src="/assets/location.jpg"
          alt="Location Image"
          borderRadius="md"
          boxShadow="md"
          width={"70%"}
          mx="auto"
        />
      </Box>
    </Box>
  );
};

export default LocationSection;

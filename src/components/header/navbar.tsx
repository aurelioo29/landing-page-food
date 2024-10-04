import { Box, Flex, HStack, Image, Link, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const NavbarSection = () => {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Location", href: "#location" },
    { name: "Menu", href: "#menu" },
    { name: "Franchise", href: "/franchise" },
  ];

  return (
    <Box
      as="nav"
      bg="white"
      boxShadow="sm"
      py={4}
      borderBottom="3px solid"
      borderBottomColor="gray.200"
      position="sticky"
      top={0}
      zIndex="1000"
    >
      <Flex
        maxW="8xl"
        mx="auto"
        px={4}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Logo */}
        <Link href="/" display="flex" alignItems="center">
          <Image src="/assets/logo-top.png" alt="logo" width={150} />
        </Link>

        {/* Menu Items */}
        <HStack spacing={8} as="nav">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              fontSize="lg"
              fontWeight="medium"
              _hover={{
                color: "white",
                bg: "black",
                p: "2.5",
                borderRadius: "md",
              }}
            >
              {item.name}
            </Link>
          ))}
        </HStack>

        {/* Social Icons */}
        <HStack spacing={4}>
          <IconButton
            as="a"
            href="#"
            target="_blank"
            icon={<FaLinkedin />}
            aria-label="LinkedIn"
            variant="ghost"
            size="lg"
            _hover={{
              bg: "transparent",
              color: "blue.500",
              transform: "scale(1.5)",
            }}
          />
          <IconButton
            as="a"
            href="#"
            target="_blank"
            icon={<FaInstagram />}
            aria-label="Instagram"
            variant="ghost"
            size="lg"
            _hover={{
              bg: "transparent",
              color: "red.500",
              transform: "scale(1.5)",
            }}
          />
          <IconButton
            as="a"
            href="#"
            target="_blank"
            icon={<FaGithub />}
            aria-label="WhatsApp"
            variant="ghost"
            size="lg"
            _hover={{
              bg: "transparent",
              color: "black",
              transform: "scale(1.5)",
            }}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavbarSection;

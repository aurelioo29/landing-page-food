import { Box, Flex, HStack, Image, Link, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Recipes", href: "/recipes" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "About us", href: "/about" },
  ];

  return (
    <Box
      as="nav"
      bg="white"
      boxShadow="sm"
      py={4}
      borderBottom="3px solid"
      borderBottomColor="gray.200"
    >
      <Flex
        maxW="8xl"
        mx="auto"
        px={4}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Logo */}
        <Box>
          <Image src="/assets/logo-top.png" alt="logo" width={150} />
        </Box>

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

export default Navbar;

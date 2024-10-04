import { Box, Flex, HStack, Image, Link, IconButton, Stack, useBreakpointValue, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure } from "@chakra-ui/react";
import { FaLinkedin, FaInstagram, FaGithub, FaBars } from "react-icons/fa";
import { useRef } from "react";

const NavbarSection = () => {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Location", href: "#location" },
    { name: "Menu", href: "#menu" },
    { name: "Franchise", href: "#franchise" },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const isMobile = useBreakpointValue({ base: true, md: false });

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
          <Image src="/assets/logo.jpg" alt="logo" width={70} />
        </Link>

        {/* Menu Items - Hidden on mobile, visible on desktop */}
        {!isMobile && (
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
        )}

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
            aria-label="GitHub"
            variant="ghost"
            size="lg"
            _hover={{
              bg: "transparent",
              color: "black",
              transform: "scale(1.5)",
            }}
          />
        </HStack>

        {/* Hamburger menu button for mobile view */}
        {isMobile && (
          <IconButton
            ref={btnRef}
            icon={<FaBars />}
            aria-label="Open Menu"
            variant="ghost"
            size="lg"
            onClick={onOpen}
            _hover={{
              bg: "transparent",
              color: "gray.500",
            }}
          />
        )}

        {/* Drawer for mobile navigation */}
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Navigation</DrawerHeader>

            <DrawerBody>
              <Stack spacing={4}>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    fontSize="lg"
                    fontWeight="medium"
                    onClick={onClose}
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
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default NavbarSection;

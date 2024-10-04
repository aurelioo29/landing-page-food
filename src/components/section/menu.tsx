import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { menuItems } from "@/data/menuItems";
import styles from "../../styles/animation.module.css";

export default function MenuSection() {
  return (
    <Box py={8} textAlign="center" id="menu">
      <Heading
        as="h2"
        size="xl"
        mb={4}
        bgGradient="linear(to-r, teal.400, green.400)"
        backgroundClip="text"
      >
        Featured Menu
      </Heading>
      <Tabs variant="unstyled" align="center">
        <TabList justifyContent="center" mb={6}>
          <Tab
            _selected={{
              color: "black",
              borderBottom: "4px solid",
              borderColor: "#c4f1f9",
            }}
            fontSize="lg"
          >
            Peri Peri Chicken
          </Tab>
          <Tab
            _selected={{
              color: "black",
              borderBottom: "4px solid",
              borderColor: "#c4f1f9",
            }}
            fontSize="lg"
          >
            Salads & Rice Bowls
          </Tab>
          <Tab
            _selected={{
              color: "black",
              borderBottom: "4px solid",
              borderColor: "#c4f1f9",
            }}
            fontSize="lg"
          >
            Burgers, Pitas, & Wraps
          </Tab>
          <Tab
            _selected={{
              color: "black",
              borderBottom: "4px solid",
              borderColor: "#c4f1f9",
            }}
            fontSize="lg"
          >
            Veggie Corner
          </Tab>
        </TabList>

        <TabPanels>
          {/* Peri-peri Chicken */}
          <TabPanel>
            <Flex justify="space-evenly" wrap="wrap">
              {menuItems.periPeriChicken.map((item, index) => (
                <Box
                  key={index}
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  mb={4}
                  textAlign="left"
                  className={styles.menuCard}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={382}
                    width={382}
                    objectFit="cover"
                  />
                  <Box p={6}>
                    <Text fontWeight="bold" fontSize="2xl" mb={2}>
                      {item.price}
                    </Text>
                    <Text fontSize="xl" mb={2}>
                      {item.name}
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      {item.description}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Flex>
            <Button
              mt={8}
              colorScheme="blue"
              variant="outline"
              size="lg"
              borderRadius="full"
            >
              More Menu
            </Button>
          </TabPanel>

          {/* Salad & Rice Bowls */}
          <TabPanel>
            <Flex justify="space-evenly" wrap="wrap">
              {menuItems.saladsAndRiceBowls.map((item, index) => (
                <Box
                  key={index}
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  mb={4}
                  textAlign="left"
                  className={styles.menuCard}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={382}
                    width={382}
                    objectFit="cover"
                  />
                  <Box p={6}>
                    <Text fontWeight="bold" fontSize="2xl" mb={2}>
                      {item.price}
                    </Text>
                    <Text fontSize="xl" mb={2}>
                      {item.name}
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      {item.description}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Flex>
            <Button
              mt={8}
              colorScheme="blue"
              variant="outline"
              size="lg"
              borderRadius="full"
            >
              More Menu
            </Button>
          </TabPanel>

          {/* Burgers Pitas Wraps */}
          <TabPanel>
            <Flex justify="space-evenly" wrap="wrap">
              {menuItems.burgersPitasWraps.map((item, index) => (
                <Box
                  key={index}
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  mb={4}
                  textAlign="left"
                  className={styles.menuCard}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={382}
                    width={382}
                    objectFit="cover"
                  />
                  <Box p={6}>
                    <Text fontWeight="bold" fontSize="2xl" mb={2}>
                      {item.price}
                    </Text>
                    <Text fontSize="xl" mb={2}>
                      {item.name}
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      {item.description}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Flex>
            <Button
              mt={8}
              colorScheme="blue"
              variant="outline"
              size="lg"
              borderRadius="full"
            >
              More Menu
            </Button>
          </TabPanel>

          {/* Veggie Corner */}
          <TabPanel>
            <Flex justify="space-evenly" wrap="wrap">
              {menuItems.veggieCorner.map((item, index) => (
                <Box
                  key={index}
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  mb={4}
                  textAlign="left"
                  className={styles.menuCard}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={382}
                    width={382}
                    objectFit="cover"
                  />
                  <Box p={6}>
                    <Text fontWeight="bold" fontSize="2xl" mb={2}>
                      {item.price}
                    </Text>
                    <Text fontSize="xl" mb={2}>
                      {item.name}
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      {item.description}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Flex>
            <Button
              mt={8}
              colorScheme="blue"
              variant="outline"
              size="lg"
              borderRadius="full"
            >
              More Menu
            </Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

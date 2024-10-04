import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  HStack,
  Badge,
  Icon,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaClock, FaUtensils, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useHeroSlider } from "@/hooks/useHeroSlider";
import styles from "../../styles/animation.module.css";

const RecipeSection = () => {
  const { currentRecipe, nextRecipe, prevRecipe } = useHeroSlider();
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("");

  const handleNextRecipe = () => {
    setAnimationDirection(styles.animateNext);
    setIsAnimating(true);
    setTimeout(() => {
      nextRecipe();
      setIsAnimating(false);
    }, 300);
  };

  const handlePrevRecipe = () => {
    setAnimationDirection(styles.animatePrev);
    setIsAnimating(true);
    setTimeout(() => {
      prevRecipe();
      setIsAnimating(false);
    }, 300);
  };

  const flexDirection = useBreakpointValue({ base: "column", md: "row" }) as "column" | "row"; // Menetapkan tipe
  const textAlign: "center" | "left" = useBreakpointValue({ base: "center", md: "left" }) || "left";
  const imgMaxHeight = useBreakpointValue({ base: "200px", md: "350px" });

  return (
    <Flex
      className={`${styles.recipeSection} ${isAnimating ? animationDirection : ""}`}
      bg="cyan.100"
      borderRadius="xl"
      mt={10}
      p={8}
      boxShadow="lg"
      maxW="1300px"
      mx="auto"
      direction={flexDirection}
      align="center"
      justify="space-between"
      position="relative"
    >
      {/* Tombol Previous */}
      <IconButton
        icon={<FaArrowLeft />}
        onClick={handlePrevRecipe}
        position="absolute"
        left={useBreakpointValue({ base: "10px", md: "-50px" })}
        top="50%"
        transform="translateY(-50%)"
        bg="gray.700"
        color="white"
        _hover={{ bg: "gray.600" }}
        aria-label=""
      />

      <Box flex="1" textAlign={textAlign} mb={useBreakpointValue({ base: "8", md: "0" })}>
        <Badge
          colorScheme="yellow"
          mb={4}
          p={2}
          borderRadius="md"
          className={styles.recipeCard}
        >
          Hot Recipes
        </Badge>
        <Text
          fontSize={useBreakpointValue({ base: "2xl", md: "4xl" })}
          fontWeight="bold"
          mb={4}
          className={styles.recipeCard}
        >
          {currentRecipe.title}
        </Text>
        <Text
          fontSize={useBreakpointValue({ base: "md", md: "lg" })}
          color="gray.600"
          mb={6}
          className={styles.recipeCard}
        >
          {currentRecipe.description}
        </Text>
        {/* Informasi Waktu dan Kategori */}
        <HStack spacing={4} mb={6} justify={useBreakpointValue({ base: "center", md: "flex-start" })}>
          <HStack className={styles.recipeCard}>
            <Icon as={FaClock} />
            <Text>{currentRecipe.time}</Text>
          </HStack>
          <HStack className={styles.recipeCard}>
            <Icon as={FaUtensils} />
            <Text>{currentRecipe.category}</Text>
          </HStack>
        </HStack>
        <Button
          colorScheme="blackAlpha"
          size="lg"
          rightIcon={<FaUtensils />}
          className={styles.recipeCard}
        >
          View Recipes
        </Button>
      </Box>

      {/* Gambar Slider */}
      <Box flex="1" pl={useBreakpointValue({ base: "0", md: "8" })} className={styles.recipeCard}>
        <Image
          src={currentRecipe.image}
          alt={currentRecipe.title}
          borderRadius="lg"
          boxShadow="lg"
          maxH={imgMaxHeight}
          objectFit="cover"
          mx={useBreakpointValue({ base: "auto", md: "initial" })}
        />
      </Box>

      {/* Tombol Next */}
      <IconButton
        icon={<FaArrowRight />}
        onClick={handleNextRecipe}
        position="absolute"
        right={useBreakpointValue({ base: "10px", md: "-50px" })}
        top="50%"
        transform="translateY(-50%)"
        bg="gray.700"
        color="white"
        _hover={{ bg: "gray.600" }}
        aria-label=""
      />
    </Flex>
  );
};

export default RecipeSection;

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
} from "@chakra-ui/react";
import { FaClock, FaUtensils, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useHeroSlider } from "@/hooks/useHeroSlider";
import styles from "../../styles/animation.module.css";

const RecipeSection = () => {
  const { currentRecipe, nextRecipe, prevRecipe } = useHeroSlider();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNextRecipe = () => {
    setIsAnimating(true);
    setTimeout(() => {
      nextRecipe();
      setIsAnimating(false);
    }, 300);
  };

  const handlePrevRecipe = () => {
    setIsAnimating(true);
    setTimeout(() => {
      prevRecipe();
      setIsAnimating(false);
    }, 300);
  };

  return (
    <Flex
      className={`${styles.recipeSection} ${isAnimating ? styles.animate : ""}`}
      bg="cyan.100"
      borderRadius="xl"
      mt={10}
      p={8}
      boxShadow="lg"
      maxW="1300px"
      mx="auto"
      justify="space-between"
      align="center"
      position="relative"
    >
      {/* Tombol Previous */}
      <IconButton
        icon={<FaArrowLeft />}
        onClick={handlePrevRecipe}
        position="absolute"
        left="-50px"
        top="50%"
        transform="translateY(-50%)"
        bg="gray.700"
        color="white"
        _hover={{ bg: "gray.600" }}
        aria-label=""
      />

      <Box flex="1">
        {" "}
        {/* Tambahkan kelas di sini */}
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
          fontSize="4xl"
          fontWeight="bold"
          mb={4}
          className={styles.recipeCard}
        >
          {currentRecipe.title}
        </Text>
        <Text
          fontSize="lg"
          color="gray.600"
          mb={6}
          className={styles.recipeCard}
        >
          {currentRecipe.description}
        </Text>
        {/* Informasi Waktu dan Kategori */}
        <HStack spacing={4} mb={6}>
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
      <Box flex="1" pl={8} className={styles.recipeCard}>
        <Image
          src={currentRecipe.image}
          alt={currentRecipe.title}
          borderRadius="lg"
          boxShadow="lg"
          maxH="350px"
          objectFit="cover"
          mx={"auto"}
        />
      </Box>

      {/* Tombol Next */}
      <IconButton
        icon={<FaArrowRight />}
        onClick={handleNextRecipe}
        position="absolute"
        right="-50px"
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

import { Container, VStack, Heading, Text, Button, Box, HStack, IconButton } from "@chakra-ui/react";
import { FaDrum, FaGuitar, FaPiano, FaSave } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl">Music Maker</Heading>
        <Text fontSize="lg">Create your own music by playing different instruments and composing your masterpiece!</Text>
        
        <HStack spacing={4}>
          <IconButton aria-label="Play Drums" icon={<FaDrum />} size="lg" />
          <IconButton aria-label="Play Guitar" icon={<FaGuitar />} size="lg" />
          <IconButton aria-label="Play Piano" icon={<FaPiano />} size="lg" />
        </HStack>
        
        <Box width="100%" height="300px" bg="gray.100" borderRadius="md" display="flex" justifyContent="center" alignItems="center">
          <Text fontSize="xl" color="gray.500">Your composition will appear here</Text>
        </Box>
        
        <Button leftIcon={<FaSave />} colorScheme="teal" size="lg">Save Composition</Button>
      </VStack>
    </Container>
  );
};

export default Index;
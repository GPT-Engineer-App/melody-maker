import { Container, VStack, Heading, Text, Button, Box, HStack, IconButton } from "@chakra-ui/react";
import { FaDrum, FaGuitar, FaSave } from "react-icons/fa";
import { GiPianoKeys } from "react-icons/gi";
import { useState } from "react";
import VirtualInstrument from "../components/VirtualInstrument";

const Index = () => {
  const [selectedInstrument, setSelectedInstrument] = useState(null);
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl">Music Maker</Heading>
        <Text fontSize="lg">Create your own music by playing different instruments and composing your masterpiece!</Text>
        
        <HStack spacing={4}>
          <IconButton aria-label="Play Drums" icon={<FaDrum />} size="lg" onClick={() => setSelectedInstrument('drums')} />
          <IconButton aria-label="Play Guitar" icon={<FaGuitar />} size="lg" onClick={() => setSelectedInstrument('guitar')} />
          <IconButton aria-label="Play Piano" icon={<GiPianoKeys />} size="lg" onClick={() => setSelectedInstrument('piano')} />
        </HStack>
        
        <Box width="100%" height="300px" bg="gray.100" borderRadius="md" display="flex" justifyContent="center" alignItems="center">
          {selectedInstrument ? (
            <VirtualInstrument instrumentType={selectedInstrument} />
          ) : (
            <Text fontSize="xl" color="gray.500">Select an instrument to start playing</Text>
          )}
        </Box>
        
        <Button leftIcon={<FaSave />} colorScheme="teal" size="lg">Save Composition</Button>
      </VStack>
    </Container>
  );
};

export default Index;
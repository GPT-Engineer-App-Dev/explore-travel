import { Container, Text, VStack, Box, Heading, Button, Image, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Explore the World with Us
          </Heading>
          <Text fontSize="lg">
            Discover amazing places at exclusive deals!
          </Text>
        </Box>
        <Box>
          <Image src="/images/travel-banner.jpg" alt="Travel Banner" borderRadius="md" />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            <Image src="/images/destination1.jpg" alt="Destination 1" borderRadius="md" />
            <Heading as="h3" size="md" mt={4}>
              Paris
            </Heading>
            <Text mt={2}>
              Experience the city of lights and its iconic landmarks.
            </Text>
            <Button colorScheme="teal" mt={4}>
              Book Now
            </Button>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            <Image src="/images/destination2.jpg" alt="Destination 2" borderRadius="md" />
            <Heading as="h3" size="md" mt={4}>
              Bali
            </Heading>
            <Text mt={2}>
              Enjoy the serene beaches and vibrant culture.
            </Text>
            <Button colorScheme="teal" mt={4}>
              Book Now
            </Button>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            <Image src="/images/destination3.jpg" alt="Destination 3" borderRadius="md" />
            <Heading as="h3" size="md" mt={4}>
              New York
            </Heading>
            <Text mt={2}>
              Explore the city that never sleeps.
            </Text>
            <Button colorScheme="teal" mt={4}>
              Book Now
            </Button>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
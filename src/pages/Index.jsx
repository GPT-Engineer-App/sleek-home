import React from "react";
import { Box, Flex, Grid, GridItem, Heading, Text, Image, Button, Icon, Input, Stack, useColorModeValue, Container, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch, FaHeart, FaUserAlt, FaPlus } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const productBg = useColorModeValue("white", "gray.800");

  // Mock data for products
  const products = [
    { id: 1, name: "Elegant Vase", price: "39.99", imgSrc: 'https://images.unsplash.com/photo-1473973916745-60839aebf06b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwdmFzZXxlbnwwfHx8fDE3MTAxMTI2MDl8MA&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 2, name: "Modern Lamp", price: "89.99", imgSrc: 'https://images.unsplash.com/photo-1512418408532-5445158b1445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYW1wfGVufDB8fHx8MTcxMDExMjYxMHww&ixlib=rb-4.0.3&q=80&w=1080' },
    { id: 3, name: "Cushion Set", price: "59.99", imgSrc: 'https://images.unsplash.com/photo-1488320504421-6f0d07388737?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXNoaW9uJTIwc2V0fGVufDB8fHx8MTcxMDExMjYxMHww&ixlib=rb-4.0.3&q=80&w=1080' },
    // ... more products
  ];

  return (
    <Box bg={bgColor} minH="100vh">
      <Flex as="header" justify="space-between" align="center" py={4} px={8} borderBottom="1px" borderColor="gray.200">
        <Heading as="h1" size="xl" letterSpacing="tighter">
          NASCOR
        </Heading>
        <HStack spacing={4}>
          <IconButton aria-label="Search" icon={<FaSearch />} />
          <IconButton aria-label="Favorites" icon={<FaHeart />} />
          <IconButton aria-label="Shopping Cart" icon={<FaShoppingCart />} />
          <IconButton aria-label="User Account" icon={<FaUserAlt />} />
        </HStack>
      </Flex>
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8}>
          <Input placeholder="Search for home decor..." size="lg" />
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {products.map((product) => (
              <GridItem key={product.id} bg={productBg} boxShadow="sm" borderRadius="md" overflow="hidden">
                <Image src={product.imgSrc} alt={product.name} />
                <Box p={5}>
                  <Text fontWeight="bold" fontSize="lg">
                    {product.name}
                  </Text>
                  <Text color="gray.500">${product.price}</Text>
                  <Button mt={3} leftIcon={<Icon as={FaPlus} />}>
                    Add to Cart
                  </Button>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;

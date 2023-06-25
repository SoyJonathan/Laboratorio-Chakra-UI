import { Box, Button, Center, Text, Flex } from '@chakra-ui/react';

export const Header = () => {

    return (
        <>
        <Box  w="90vw" h="240px" pos="relative"></Box>
            <Box
                 bg="url(https://cdn.shopify.com/s/files/1/0259/0484/0781/articles/como-crear-fondos-de-pantalla-para-celular_ea8b4726-04e9-4997-b7b2-92a003e037d3.jpg?v=1635226408&width=800)"
                bgSize="center"
                bgPosition="center"
                height="40vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
                
            >
                <Center flexDirection="column" textAlign="center">
                    <Text fontSize="30px" fontWeight="thin" color="white">
                        DOMINA EL TERRENO
                    </Text>
                    <Box mt={4}>
              <Button
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            backgroundColor="transparent"
                            color="white"
                            _hover={{ backgroundColor: 'green' }}
                            borderWidth="1px"
                            borderColor="white"
                            width="150px"
                            height="30px"
                            mr={2}
                            _focus={{ boxShadow: 'none' }}
                        >
                            VER DETALLES
                        </Button>
                        <Button
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            backgroundColor="transparent"
                            color="white"
                            _hover={{ backgroundColor: 'green'}}
                            borderWidth="1px"
                            borderColor="white"
                            width="150px"
                            height="30px"
                            _focus={{ boxShadow: 'none' }}
                        >
                            VER VIDEO
                        </Button>
                    </Box>
                </Center>
            </Box>
            <br />
            <Box
                bg={`url(https://cdn.shopify.com/s/files/1/0259/0484/0781/articles/como-crear-fondos-de-pantalla-para-celular_ea8b4726-04e9-4997-b7b2-92a003e037d3.jpg?v=1635226408&width=800)`}
                bgSize="cover"
                bgPosition="center"
                height="40vh"
                width="25%"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Center flexDirection="column" textAlign="center">
                    <Text fontSize="25px" fontWeight="thin" color="white">
                        DOMINA EL TERRENO
                    </Text>
                    <Flex direction="column" mt={4}>
                        <Button
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            backgroundColor="transparent"
                            color="white"
                            _hover={{ backgroundColor: 'green' }}
                            borderWidth="1px"
                            borderColor="white"
                            width="150px"
                            height="30px"
                            mr={2}
                            _focus={{ boxShadow: 'none' }}
                        >
                            VER DETALLES
                        </Button>
                        <Button
                            variant="ghost"
                            colorScheme="whiteAlpha"
                            backgroundColor="transparent"
                            color="white"
                            _hover={{ backgroundColor: 'green'}}
                            borderWidth="1px"
                            borderColor="white"
                            width="150px"
                            height="30px"
                            _focus={{ boxShadow: 'none' }}
                        >
                            VER VIDEO
                        </Button>
                    </Flex>
                </Center>
            </Box>
        </>
    );
};

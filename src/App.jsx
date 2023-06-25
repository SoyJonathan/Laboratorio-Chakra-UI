import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './components/Header.jsx'
import { Box  } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box
        marginLeft="50px"
      >
        <Header />
      </Box>
    </ChakraProvider>
  )
}

export default App;
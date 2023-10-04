import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins'

const theme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#1a202c',
    },
    primary: {
      200: "rgba(4, 183, 201, 0.2)",
      500: "#04B7C9"
    },
    secondary: {
      500: "#FDB305"
    }
  },
  fonts: {
    body: `'Poppins', sans-serif`,
    heading: `'Poppins', sans-serif`,
  },
});

export default theme;

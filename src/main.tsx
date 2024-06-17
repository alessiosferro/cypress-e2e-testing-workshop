import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ChakraProvider, defineStyle, defineStyleConfig, extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: defineStyleConfig({
      variants: {
        cta: defineStyle({
          color: "white",
          bgColor: "purple.500",
          _hover: {bgColor: "purple.600"},
          _active: {bgColor: "purple.700"}
        }),
        outline: defineStyle({
          bgColor: "transparent",
          color: "white",
          borderColor: "purple.500",
          _hover: {
            bgColor: "purple.500"
          },
          _active: {
            bgColor: "purple.700"
          }
        }),
        emoji: defineStyle({
          bgColor: "transparent",
          _hover: {bgColor: "purple.600"},
          _active: {bgColor: "purple.700"},
        })
      }
    })
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App/>
    </ChakraProvider>
  </React.StrictMode>,
)

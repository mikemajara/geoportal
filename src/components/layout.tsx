import { Box, Flex, useColorMode, FlexProps, chakra } from '@chakra-ui/react'
import { Header } from '@components/header'
import { Footer } from './footer'

export const Layout = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return (
    <Box>
      <Header/>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        {...props}
      />
      <Footer/>
    </Box>
  )
}

import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Heading,
  Box,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Hero } from '@components/hero'
import { Layout } from '@components/layout'
import React from 'react'
import { CTA } from '@components/cta'

const Index = () => (
  <Layout height="100vh">
    <Box py={48} align="center" bg="gray.100" w="full">
      <CTA />
    </Box>
  </Layout>
)

export default Index

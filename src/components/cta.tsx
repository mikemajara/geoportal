import { Link as ChakraLink, Button, Heading } from '@chakra-ui/react'

import { Layout } from '@components/layout'
import React from 'react'
import { Hero } from './hero'

export const CTA = () => (
  <>
    <Heading size="3xl">Encuentra la</Heading>
    <Hero title="Obra"/>
    <Heading size="3xl">a tu</Heading>
    <Hero title="Medida"/>
  </>
)

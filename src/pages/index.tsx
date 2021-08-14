import {
  Link as ChakraLink,
  Text,
  Image,
  List,
  ListIcon,
  ListItem,
  Heading,
  Box,
  Flex,
  Button,
  HStack,
  Stack,
} from "@chakra-ui/react";
import {
  CheckCircleIcon,
  LinkIcon,
  SearchIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import { AiOutlineGlobal } from "react-icons/ai";

import { Hero } from "@components/hero";
import { Layout } from "@components/layout";
import React from "react";
import { CTA } from "@components/cta";

const CustomButton = (props) => {
  const { texto } = props;
  return (
    <Button bg="orange.300" shadow="md">
      <Text>{texto}</Text>
    </Button>
  );
};

const Section = (props) => {
  const { texto, icon, colorScheme } = props;
  return (
    <Stack
      p={8}
      align="center"
      direction="column"
      spacing={4}
      // border="1px solid"
      borderRadius="md"
      shadow="md"
      whileHover={{
        scale: 1.1,
      }}
    >
      <Flex
        border="1px solid"
        borderRadius="full"
        boxSize="16"
        justify="center"
        align="center"
        fontSize="2xl"
        borderColor={colorScheme}
        bgColor={`${colorScheme}.200`}
        color={`${colorScheme}.800`}
      >
        {icon}
      </Flex>
      <Box>
        <Text>{texto}</Text>
      </Box>
    </Stack>
  );
};

const Index = () => (
  <Layout height="100vh">
    <HStack spacing={5} p={3}>
      <CustomButton texto="Visualizador" />
      <CustomButton texto="Buscador" />
      <CustomButton texto="Servicios OGC" />
      <CustomButton texto="Inicio" />
    </HStack>
    <Flex w="full">
      <Image
        w="full"
        maxH={80}
        src="images/annie-spratt.jpg"
        objectFit="cover"
      />
    </Flex>
    <HStack p={5}>
      <Section
        colorScheme="green"
        icon={<SearchIcon />}
        texto="Acceso al buscador de metadatos y servidios de la IDE de Linares"
      />
      <Section
        colorScheme="blue"
        icon={<SettingsIcon />}
        texto="Acceso al buscador de metadatos y servidios de la IDE de Linares"
      />
      <Section
        colorScheme="red"
        icon={<AiOutlineGlobal />}
        texto="Acceso al buscador de metadatos y servidios de la IDE de Linares"
      />
    </HStack>
  </Layout>
);

export default Index;

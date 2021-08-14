import { Flex, Text, Image, HStack } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <Flex justify="space-between" p={5}>
      <HStack id="logo-y-texto" spacing="5">
        <Image src="images/education.png" boxSize="20" />
        <Text>IDE Ayuntamiento de Linares</Text>
      </HStack>
      <Image src="images/lemon_1f34b.png" boxSize="20" />
    </Flex>
  );
};

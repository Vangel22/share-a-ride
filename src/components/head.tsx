import { Heading, Flex, VStack } from "@chakra-ui/react";

export default function Head() {
  return (
    <VStack bg="blue.300" align="center" justifyContent="center" p={2}>
      <Heading fontSize="4xl">Сподели превоз</Heading>
      <Heading fontSize="2xl">Најди. Сподели. Патувај.</Heading>
    </VStack>
  );
}

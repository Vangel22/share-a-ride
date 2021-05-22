import { HStack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <HStack position="fixed" p={1} w="full" left="0" bottom="0" bg="blue.300">
        <Text>Copyright © Vangel Hristov</Text>
    </HStack>
  );
}

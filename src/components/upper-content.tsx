import { Input, HStack, Button, VStack } from "@chakra-ui/react";
import Link from "next/link"

export default function UpperContent() {
  return (
    <VStack p={4} spacing={2}>
      <HStack spacing={8} p={6} align="center" justifyContent="center">
        <Input width="xs" placeholder="Внесете место на тргување." />
        <Input width="xs" placeholder="Внесете дестинација." />
        <Input
          width="xs"
          placeholder="Внесете датум кога сакате да патувате."
        />
      </HStack>
      <Button  width="md" bg="orange.300">
        <Link href="/search-result">
        Пребарај
        </Link>
      </Button>
    </VStack>
  );
}

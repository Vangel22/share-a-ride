import { HStack, VStack, Text, Button } from "@chakra-ui/react";
import SharingOffer from "./sharing-offer";
import data from "./data.json";
import Link from "next/link"

export default function DownContentFiltered() {
  return (
    <VStack p={4} overflowY="auto" w="full" h="full">
      <Text p={4} textDecoration="underline" textColor="red.300">Резултати од пребарувањето:</Text>
      <HStack spacing={8}>
      {data.map((offer) => (
          <SharingOffer
            key={offer.id}
            id={offer.id}
            chauffeur={offer.chauffeur}
            from={offer.from}
            to={offer.to}
            when={offer.when}
          />
        ))}
      </HStack>
      <HStack p={10}>
        <Link href="/">
      <Button color="white" size="md" bg="purple.500" alignSelf="center">
        Врати се назад
      </Button>
      </Link>
      </HStack>
    </VStack>
  );
}

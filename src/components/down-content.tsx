import { HStack, VStack, Text } from "@chakra-ui/react";

import SharingOffer from "./sharing-offer";
import data from "./data.json";

export default function DownContent() {
  return (
    <VStack p={4} overflowY="auto" w="full" h="full">
      <Text p={4} textDecoration="underline" textColor="red.300">Најнови резултати:</Text>
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
    </VStack>
  );
}

import { Box, Text, VStack } from "@chakra-ui/react";

type SharingOfferProps = {
    id: number;
    chauffeur: string;
    from: string;
    to: string;
    when: string;
}

export default function SharingOffer({ id, chauffeur, from, to, when }: SharingOfferProps) {
  return (
    <Box p={4} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <VStack>
            <Text>Возач: {chauffeur}</Text>
            <Text>Од: {from}</Text>
            <Text>До: {to}</Text>
            <Text>Кога: {when}</Text>
        </VStack>
    </Box> 
  );
}

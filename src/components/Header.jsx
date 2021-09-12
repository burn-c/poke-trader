import { Flex, Text } from "@chakra-ui/react";

export function Header () {
  return (
    <Flex
    as="header"
    w="100%"
    maxW={1480}
    h="20"
    mx="auto"
    mt="4"
    px="6"
    align="center"
    >
      <Text
        as="span"
        fontWeight="extrabold"
      >
        Poke Trader
      </Text>
    </Flex>
  )
}
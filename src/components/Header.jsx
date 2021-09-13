import { Button, Flex, HStack, Image, Text } from '@chakra-ui/react'
import router from 'next/router'

export default function Header() {
  const goToHistory = () => router.push('/historico')
  const goToTrade = () => router.push('/')

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="60px"
      mx="auto"
      mt="4"
      mb="10"
      px="6"
      align="center"
      justifyContent="space-between"
    >
      <Text as="span" fontWeight="extrabold">
        Poke Trader
      </Text>

      <Image src="/logoPokemon.png" alt="Logo Pokemon" maxH="60px" />

      <HStack spacing={10}>
        <Button colorScheme="blue" onClick={() => goToTrade()}>
          Trade
        </Button>
        <Button colorScheme="orange" onClick={() => goToHistory()}>
          Histórico
        </Button>
      </HStack>
    </Flex>
  )
}

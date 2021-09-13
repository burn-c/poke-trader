/* eslint-disable no-alert */
import {
  Button,
  Flex,
  SimpleGrid,
  Text,
  Heading,
  Spinner
} from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'

import PokemonGroup from '../components/PokemonGroup'

import useTrade from '../hooks'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [clearGroups, setClearGroups] = useState(false)
  const { players, clearPlayers } = useTrade()

  const FAIR_PERCENTAGE = process.env.FAIR_PERCENTAGE || 10 // %

  const findPlayerXPTotal = (playerName) => {
    const player = players?.find((p) => p.player === playerName)

    return player?.xpTotal || false
  }

  const playerA = findPlayerXPTotal('Jogador A')
  const playerB = findPlayerXPTotal('Jogador B')

  const goodTrade = () => {
    if (playerA && playerB) {
      const maxAndminTrade = (currentPlayer, comparePlayer) => {
        const percentage = FAIR_PERCENTAGE / 100
        const max = currentPlayer * (1 + percentage)
        const min = currentPlayer * (1 - percentage)
        const result = comparePlayer >= min && comparePlayer <= max

        return result
      }

      const isGoodTradeForA = maxAndminTrade(playerA, playerB)
      const isGoodTradeForB = maxAndminTrade(playerB, playerA)

      return isGoodTradeForA && isGoodTradeForB
    }
    return false
  }

  const submitTrade = async () => {
    setLoading(true)
    try {
      await fetch('/api/addTrade', {
        method: 'POST',
        body: JSON.stringify({
          trade: players
        })
      })

      setClearGroups(true)
      clearPlayers()
      window.alert('Trade efetuado com sucesso!!!')
    } catch (e) {
      return window.alert(e.message)
    }
    setClearGroups(false)
    return setLoading(false)
  }

  return (
    <>
      <Head>
        <title>Poke Trade</title>
      </Head>
      <SimpleGrid columns={1} spacing={5} alignItems="center" w="100%">
        <Text align="center">
          Para efetuar uma troca justa a diferença da soma dos XP não pode ser
          maior que {FAIR_PERCENTAGE}%.
        </Text>
        {playerA &&
          playerB &&
          (goodTrade() ? (
            <>
              <Heading align="center" as="h3" color="green" size="xl" m="2">
                Temos uma troca justa! o/
              </Heading>
              <Flex justifyContent="center">
                <Button
                  spinner={<Spinner size="md" />}
                  isLoading={loading}
                  colorScheme="green"
                  w={200}
                  onClick={() => submitTrade()}
                >
                  Efetuar trade
                </Button>
              </Flex>
            </>
          ) : (
            <Heading align="center" as="h3" color="red" size="lg" m="2">
              Não parece ser uma troca justa, escolha outros pokemon e vamos
              tentar novamente!
            </Heading>
          ))}
      </SimpleGrid>

      <SimpleGrid
        columns={2}
        spacing={5}
        justifyContent="space-between"
        w="100%"
      >
        <PokemonGroup playerName="Jogador A" clearGroup={clearGroups} />
        <PokemonGroup playerName="Jogador B" clearGroup={clearGroups} />
      </SimpleGrid>
    </>
  )
}

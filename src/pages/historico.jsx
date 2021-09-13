import { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  SimpleGrid,
  Heading
} from '@chakra-ui/react'

import Head from 'next/head'
import { PokemonGroupHistory } from '../components'

export default function History() {
  const [trades, setTrades] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const fetcher = (...args) => fetch(...args).then((res) => res.json())
      const { data } = await fetcher('/api/getTrades')

      setTrades(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <Head>
        <title>Histórico de trades - Poke Trade</title>
      </Head>
      <Heading align="center" as="h3" size="xl" m={4}>
        Histórico de trades
      </Heading>
      <Accordion allowMultiple w="100%">
        {trades?.map(({ ts, data }) => (
          <AccordionItem key={ts}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Trade id: {ts}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <SimpleGrid
                columns={2}
                spacing={5}
                justifyContent="space-between"
                w="100%"
              >
                <PokemonGroupHistory
                  playerName={data.trade[0].player}
                  xpTotal={data.trade[0].xpTotal}
                  pokemonGroup={data.trade[0].pokemonList}
                />
                <PokemonGroupHistory
                  playerName={data.trade[1].player}
                  xpTotal={data.trade[1].xpTotal}
                  pokemonGroup={data.trade[1].pokemonList}
                />
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}

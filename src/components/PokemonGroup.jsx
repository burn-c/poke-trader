import {
  Button,
  CloseButton,
  Flex,
  Input,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
  Heading
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

import getPokemon from '../services/pokemon'

import useTrade from '../hooks'

export default function PokemonGroup({ playerName, clearGroup = false }) {
  const [pokemon, setPokemon] = useState('')
  const [pokemonGroup, setPokemonGroup] = useState([])

  const { players, updatePlayers } = useTrade()

  const { xpTotal } = players?.find((p) => p.player === playerName) || {
    xpTotal: 0
  }

  const updatedPlayer = (group) => {
    const getTotal = group.reduce((acc, poke) => acc + poke.base_experience, 0)

    return updatePlayers(playerName, getTotal, group)
  }

  const addPokemon = async () => {
    try {
      const { id, name, base_experience, image } = await getPokemon(pokemon)
      const updatedGroup = [
        ...pokemonGroup,
        { idList: uuidv4(), id, name, base_experience, image }
      ]

      updatedPlayer(updatedGroup)
      return setPokemonGroup(updatedGroup)
    } catch (e) {
      throw new Error(e.message)
    }
  }

  const deletePokemon = async (idList) => {
    const filtered = pokemonGroup.filter((poke) => poke.idList !== idList)

    updatedPlayer(filtered)
    return setPokemonGroup([...filtered])
  }

  useEffect(() => {
    if (clearGroup) setPokemonGroup([])
  }, [clearGroup])

  return (
    <Flex direction="column">
      <Heading align="center" as="h3">
        {playerName}
      </Heading>
      <Heading align="center" as="h4" size="sm" m="2">
        Total de XP acumulado para o trade: {xpTotal}
      </Heading>

      <GridItem align="center">
        {pokemonGroup.length >= 6 ? (
          <Text>Você adicionou o número maximo de pokemon neste grupo</Text>
        ) : (
          <>
            <Input
              placeholder="Digite o nome do Pokemon"
              maxW={400}
              onChange={(e) => setPokemon(e.target.value.toLowerCase())}
            />
            <Button ml={5} colorScheme="orange" onClick={() => addPokemon()}>
              Adiconar
            </Button>
          </>
        )}
      </GridItem>

      <GridItem
        minH={100}
        backgroundColor="gray.800"
        borderRadius="lg"
        mt={10}
        padding={2}
      >
        {pokemonGroup.length ? (
          pokemonGroup.map(({ idList, id, name, base_experience, image }) => (
            <VStack key={idList}>
              <HStack
                bgGradient="linear(to-r, gray.700, gray.600)"
                borderRadius="lg"
                boxShadow="lg"
                w="100%"
                flex="1"
                maxW="400px"
                minW="100px"
                justifyContent="space-between"
                margin={5}
              >
                <Image boxSize="96px" alt={name} src={image} />
                <VStack>
                  <Text as="span" fontSize="xl" fontWeight="bold">
                    XP: {base_experience}
                  </Text>
                  <Text>
                    Nome: {name}
                    <br />
                    Id: {id}
                  </Text>
                </VStack>
                <CloseButton
                  size="lg"
                  left={-5}
                  position="relative"
                  onClick={() => deletePokemon(idList)}
                />
              </HStack>
            </VStack>
          ))
        ) : (
          <Heading align="center" as="h3" size="sm" m="2">
            Adicione alguns pokemons para inicar o cálculo.
          </Heading>
        )}
      </GridItem>
    </Flex>
  )
}

PokemonGroup.propTypes = {
  playerName: PropTypes.string.isRequired,
  clearGroup: PropTypes.bool.isRequired
}

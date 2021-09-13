import {
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
  Heading
} from '@chakra-ui/react'
import PropTypes from 'prop-types'

export default function PokemonGroupHistory({
  playerName,
  xpTotal,
  pokemonGroup = []
}) {
  return (
    <GridItem
      minH={100}
      backgroundColor="gray.800"
      borderRadius="lg"
      mt={10}
      padding={2}
    >
      <Heading align="center" as="h3">
        {playerName}
      </Heading>
      <Heading align="center" as="h4" size="sm" m="2">
        Total de XP acumulado para o trade: {xpTotal}
      </Heading>
      {pokemonGroup?.map(({ idList, id, name, base_experience, image }) => (
        <VStack key={idList} p={5}>
          <HStack
            bgGradient="linear(to-r, gray.700, gray.600)"
            borderRadius="lg"
            boxShadow="lg"
            w="100%"
            flex="1"
            maxW="400px"
            minW="100px"
            justifyContent="space-between"
            pr={5}
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
          </HStack>
        </VStack>
      ))}
    </GridItem>
  )
}

PokemonGroupHistory.propTypes = {
  playerName: PropTypes.string.isRequired,
  xpTotal: PropTypes.number.isRequired,
  pokemonGroup: PropTypes.arrayOf(
    PropTypes.shape({
      idList: PropTypes.string,
      name: PropTypes.string,
      base_experience: PropTypes.number,
      image: PropTypes.string
    })
  ).isRequired
}

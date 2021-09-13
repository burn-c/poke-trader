import axios from 'axios'

const getPokemon = async (pokemonName) => {
  try {
    const {
      data: {
        id,
        name,
        base_experience,
        sprites: { front_default }
      }
    } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    return { id, name, base_experience, image: front_default }
  } catch (e) {
    throw new Error(
      'Algum erro aconteceu, por favor, revise o nome do pokemon!'
    )
  }
}

export default getPokemon

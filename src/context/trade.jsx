import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const TradeContext = createContext()

const TradeProvider = ({ children }) => {
  const [players, setPlayers] = useState([])

  const updatePlayers = (player, xp, pokemonList) => {
    const existsPlayer = players.find((p) => p.player === player)

    if (existsPlayer) {
      const updatePlayerXP = players.map((p) => {
        if (p.player === player) return { ...p, xpTotal: xp, pokemonList }
        return p
      })

      return setPlayers(updatePlayerXP)
    }
    return setPlayers([...players, { player, xpTotal: xp, pokemonList }])
  }

  const clearPlayers = () => setPlayers([])

  return (
    <TradeContext.Provider value={{ players, updatePlayers, clearPlayers }}>
      {children}
    </TradeContext.Provider>
  )
}

TradeProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { TradeProvider, TradeContext }

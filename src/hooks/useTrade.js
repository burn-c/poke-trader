import { useContext } from 'react'
import { TradeContext } from '../context/trade'

const useTrade = () => {
  const context = useContext(TradeContext)

  if (!context) {
    throw new Error('useTrade cannot be used without TradeProvider!')
  }

  return context
}

export default useTrade

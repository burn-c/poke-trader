import { query as q } from 'faunadb'
import fauna from '../../services/fauna'

const getTrades = async (req, res) => {
  if (req.method === 'GET') {
    const query = await fauna.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('trades'))),
        q.Lambda((trade) => q.Get(trade))
      )
    )
    res.status(200).json({ data: query.data })
  }
}

export default getTrades

import { query as q } from 'faunadb'
import fauna from '../../services/fauna'

const addTrade = async (req, res) => {
  if (req.method === 'POST') {
    const body = JSON.parse(req.body)
    const query = await fauna.query(
      q.Create(q.Collection('trades'), {
        data: { trade: body.trade }
      })
    )
    res.status(200).json({ data: query })
  }
}

export default addTrade

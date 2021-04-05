import { query } from '../../db/db'

const postSong = async (req, res) => {
  const {name, street, link, comment} = req.body
  try {
    // TO DO - Form validation
    if (!name || !street) {
      return res
        .status(400)
        .json({ message: '`name` and `street` are both required' })
    }

    const results = await query(
      `
      INSERT INTO songs (name, link, street, comment)
      VALUES (?, ?, ?, ?)
      `,
      [name, street, link, comment]
    )

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default postSong

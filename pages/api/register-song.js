import { query } from '../../db/db'

const postSong = async (req, res) => {
  const {name, link, comment} = req.body

  console.log("BODY", req.body)
  try {
    if (!name || !link) {
      return res
        .status(400)
        .json({ message: '`name` and `link` are required' })
    }

    const results = await query(
      `
      INSERT INTO songs (name, link, comment)
      VALUES ($1, $2, $3);
      `,
      [name, link, comment]
      , 
      (result) => {
        return res.json(result)
      }
    )

    //console.log("res query ", results)
    //return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default postSong

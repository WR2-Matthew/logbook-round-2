module.exports = {

  createJump: async (req, res) => {
    const { date, dropzone, jumpNumber, discipline, details, imageUrl } = req.body
    const db = req.app.get('db')

    const newJump = await db.create_jump(date, dropzone, jumpNumber, discipline, details, imageUrl)
    const jump = newJump[0]
    res.status(200).send(jump)
  },

  retrieveJumps: async (req, res) => {
    const db = req.app.get('db')
    const jumps = await db.retrieve_jumps()

    res.status(200).send(jumps)
  },

  deleteJump: async (req, res) => {
    const db = req.app.get('db')
    const { jump_id } = req.params

    const updatedJumps = await db.delete_jump(jump_id)
    res.status(200).send(updatedJumps)
  },

  editJump: async (req, res) => {
    console.log('hit')
    const db = req.app.get('db')
    const { date, dropzone, jumpNumber, discipline, imageUrl, details } = req.body
    const { jump_id } = req.params


    const updateJump = await db.edit_jump(date, dropzone, jumpNumber, discipline, details, imageUrl, jump_id)
    res.status(200).send(updateJump)
  }
}
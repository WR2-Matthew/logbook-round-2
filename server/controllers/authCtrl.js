const bcrypt = require('bcrypt')

module.exports = {

  login: async (req, res) => {
    const { username, password } = req.body
    const db = req.app.get('db')

    const user = await db.user_login(username)

    const existingUser = user[0]

    if (!existingUser) {
      return res.status(404).send('User does not exist.')
    }

    const authenticated = bcrypt.compareSync(password, existingUser.password)

    if (!authenticated) {
      return res.status(404).send('Password does not match')
    }

    req.session.user = {
      username: existingUser.username,
      user_id: existingUser.user_id
    }

    res.status(200).send(req.session.user)
  },

  register: async (req, res) => {
    const { username, password } = req.body
    const db = req.app.get('db')

    const registeredUser = await db.user_login(username)

    if (registeredUser[0]) {
      return res.status(409).send('User already exists!')
    }

    const salt = bcrypt.genSaltSync(15)
    const hash = bcrypt.hashSync(password, salt)

    const newUser = await db.register_user([username, hash])
    const user = newUser[0]

    req.session.user = {
      username: user.username,
      user_id: user.user_id
    }

    res.status(200).send(req.session.user)
  }
}
require('dotenv').config()
const massive = require('massive'),
  express = require('express'),
  app = express(),
  authCtrl = require('./controllers/authCtrl'),
  jumpCtrl = require('./controllers/jumpCtrl'),
  session = require('express-session'),
  { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env

app.use(express.json())

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: { maxAge: 1000 * 60 * 60 * 24 }
}))


massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  app.set('db', db)
  console.log("DB connected!")
}).catch(error => {
  console.log(error)
})

app.post('/api/login', authCtrl.login)
app.post('/api/register', authCtrl.register)
app.post('/api/create/jump', jumpCtrl.createJump)
app.get('/api/jumps', jumpCtrl.retrieveJumps)
app.delete('/api/delete/jump/:jump_id', jumpCtrl.deleteJump)
app.put('/api/change/jump:jump_id', jumpCtrl.editJump)

app.listen(SERVER_PORT, () => { console.log(`Doing it big on port ${SERVER_PORT}`) })
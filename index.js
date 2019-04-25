const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

const users = [
  'Diego Fernandes',
  'Djamilson Alves',
  'Robson Marques',
  'Lucas De Souza'
]

app.get('/', (req, res) => res.render('list', { users }))

app.get('/new', (req, res) => res.render('new'))

app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect('/')
})

app.listen(3000)

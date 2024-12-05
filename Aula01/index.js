import express from 'express'
import { create } from 'express-handlebars';
const app = express()
const port = 3000

// Configurar o Handlebars
const hbs = create({
  defaultLayout: 'main', // ou outro layout padrão, se houver
  // Outras opções, como helpers, etc.
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//parser para leitura do body
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

//Chama a página contato
app.get('/contato', (req, res) => {
  res.render('contato')
})



//Recebe os dados de
app.post('/contato', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  console.log(name, email)

  // res.render('contato')
  // res.send(`Obrigado ${name}, seu email ${email} foi enviado com sucesso`)

  res.redirect(`/cadastro?name=${name}?email=${email}`)
})

app.get('/cadastro', (req, res) => {
  const name = req.query.name;
  const email = req.query.email;

  console.log(name, email)

  res.render('cadastro')
})

app.get('/', (req, res) => {
  res.render('home')
})


//webserver
app.listen(port, () => {
  console.log('Server Started')
}

)
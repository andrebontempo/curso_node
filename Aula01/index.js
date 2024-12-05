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


app.get('/contato', (req, res) => {
  res.render('contato')
})


app.get('/', (req, res) => {
  res.render('home')
})


//webserver
app.listen(port, () => {
  console.log('Server Started')
}

)
const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  //res.send(`App rodando na porta:${port}`)
  res.send("<h1>Teste</h1>")
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
  console.log(`App rodando na porta:${port}`)
})

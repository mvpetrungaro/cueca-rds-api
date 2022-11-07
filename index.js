import {} from 'dotenv/config'
import express from 'express'
import cors from 'cors'
import cardsRouter from './routers/cards.router.js'

const port = 3001
const app = express()

app.use(cors())
app.use(express.json())

app.use('/cards', cardsRouter)

app.use((err, req, res, next) => {
  console.log(err)

  if (!res.statusCode || res.statusCode < 300) {
    res.status(500)
  }

  res.send({ error: err.message ? err.message : err })
})

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})

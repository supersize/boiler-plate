const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://wogud541:qlraocl12@boilerplate.4c95e.mongodb.net/?retryWrites=true&w=majority', {
  // useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB is connected... ')).catch(err => console.log('db에러 발생 : ', err))



app.get('/', (req, res) => {
  res.send('Hello 재형! get')
})


app.post('/', (req, res) => {
    res.send('Hello 재형! post')
  })

  
  
app.put('/', (req, res) => {
    res.send('Hello 재형! put')
  })

  
  
app.delete('/', (req, res) => {
    res.send('Hello 재형! delete')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
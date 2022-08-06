const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))


// body-parser란? body-parser는 node.js 모듈입니다.
// 클라이언트 POST request data의 body로부터 파라미터를 편리하게 추출합니다.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true})) // application/x-form-urlencoded 형식 분석하게하는 설정.
app.use(bodyParser.json()) // application/json 분석 설정.

const config = require('./config/key');

const {User} = require("./models/User");

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
  // useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB is connected... ')).catch(err => console.log('db에러 발생 : ', err))



app.get('/', (req, res) => {
  res.send('Hello 재형! get')
})


app.post('/register', (req, res) => {
  // 회원가입 정보 db에 저장  
  // User 객체 가져와서 사용 const {User} = require("./models/User");
  
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) {
      return res.json({success: false, err})
    }
    return res.status(200).json({success: true});
  }); // .save()는 mongodb에서 오는 method.

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
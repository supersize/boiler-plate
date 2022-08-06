const mongoose = require('mongoose');

// model과 schema 설정
// model : DB 테이블이라고 보면됨
// schema : 테이블내 속성이라고 보면된
// *특이사항 : schema 작성 후 model로 schema 감싸줘야함.
//      ex) const User = mongoose.model('User', userShcema);

const userShcema = mongoose.Schema({
    name : {
        type: String,
        maxLength: 50
    },
    email : {
        type: String,
        trim: true, // trim 문자 내부에 있는 공백 제거.
        unique : 1 // 중복 불가 설정.
    },
    password : {
        type: String,
        maxLength: 5
    },
    lastName : {
        type: String,
        maxLength: 50
    },
    role : {
        type: Number,
        default: 0
    },
    image : String,
    token : {
        type: String
    },
    tokenExp : {
        type: Number
    }
})

const User = mongoose.model('User', userShcema);

module.exports = {User}
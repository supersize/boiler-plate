// 앱 배포시 운영 혹은 개발 db 설정 코드.
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
}
else {
    module.exports = require('./dev'); // .gitignore 에 추가함.
}
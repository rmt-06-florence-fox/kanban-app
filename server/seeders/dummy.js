// dummy to get the folder uploaded
const jwt = require('jsonwebtoken');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoib21uZXMiLCJlbWFpbCI6ImZmZW10MTBAZ21haWwuY29tIiwiT3JnYW5pemF0aW9uSWQiOjMsImlhdCI6MTYwNzA3NDc3M30.3EKHnreZ-VyC-uu_lxIJbg22vuBvzg1ZBUp0ed0XpZI'

console.log(jwt.verify(token, "padangsepuluhribu"))
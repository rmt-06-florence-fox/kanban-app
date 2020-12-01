# kanban-app

```
ITS ACTUALLY KHAN BANG APP
```

## Restful endpoints
#
# URL
```
Client URL : http://localhost:8080
Server URL : http://localhost:3000
```

### GET/login
>login

_Request Header_
```
none
```
_Request Body_
```
email : joko@mail.com
password : joko
```
_Response(200)_
```
{
  access_token : "token string"
}
```
_Response(400)_
```
{
  message : 'invalid'
}
```
_Response(500)_
```
{
  access_token : "internal serve error"
}
```
### GET/register
>login

_Request Header_
```
none
```
_Request Body_
```
email : joko@mail.com
password : joko
```
_Response(201)_
```
{
  id: 1,
  email : joko@mail.com
}
```
_Response(400)_
```
{
  [
    {
        "message": "must be a valid email address"
    },
    {
        "message": "can not be empty"
    }
  ]
}
```
_Response(500)_
```
{
  access_token : "internal serve error"
}
```


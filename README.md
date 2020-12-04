# kanban-app

```
😎ICANQ KANBAN😎
```

## LINK ENDPOINT
#
# URL
```
Client URL : https://kanban-297610.web.app/
Server URL : https://kanban-icanq.herokuapp.com/
```

### POST /login
>login

_Request Header_
```
none
```
_Request Body_
```
email : ican@mail.com
password : okeoke
```
_Response(200)_
```
{
  access_token : "token string"
}
```
_Response(401)_
```
{
  message : "Invalid email/password"
}
```
_Response(404)_
```
{
  message : "Account not found!"
}
```
_Response(500)_
```
{
  access_token : "internal serverr error"
}
```
### POST /register
>Register

_Request Header_
```
none
```
_Request Body_
```
username: icanq
email : ican@mail.com
password : okeoke
```
_Response(201)_
```
{
   "id": 1,
    "username": "ican",
    "email": "ican@mail.com",
    "password": "$2a$10$P4/mg2s7kSwc8bhs2hdGhOx2K5SafEP8jKjbwbFz919BRmerxcgPC",
    "updatedAt": "2020-12-04T11:20:37.759Z",
    "createdAt": "2020-12-04T11:20:37.759Z"
}
```
_Response(400)_
```
{
  [
    {
      "message": "username/email already taken"
    }
  ]
}
```
_Response(500)_
```
{
  access_token : "internal serverr error"
}
```

### POST /tasks
>create a task

_Request Header_
```
access_token
```
_Request Body_
```
title : masak aer
category : Backlog
```
_Response(201)_
```
{
  "createdTask": {
      "id": 1,
      "title": "masak aer",
      "category": "Backlog",
      "UserId": 2,
      "updatedAt": "2020-12-01T23:16:49.584Z",
      "createdAt": "2020-12-01T23:16:49.584Z"
  }
}
```
_Response(401)_
```
[
  {
      "message": "login dulu dong"
  },
  {
      "message": "login dulu
  }
]
```
_Response(500)_
```
{
  access_token : "internal serverr error"
}
```

### GET /tasks
>fetch

_Request Header_
```
access_token
```
_Request Body_
```
none
```
_Response(200)_
```
[
    {
        "id": 1,
        "title": "masak aer",
        "category": "Backlog",
        "UserId": 1,
        "createdAt": "2020-12-04T11:20:57.968Z",
        "updatedAt": "2020-12-04T11:20:57.968Z",
        "User": {
            "id": 1,
            "username": "ican",
            "email": "ican@mail.com",
            "password": "$2a$10$P4/mg2s7kSwc8bhs2hdGhOx2K5SafEP8jKjbwbFz919BRmerxcgPC",
            "createdAt": "2020-12-04T11:20:37.759Z",
            "updatedAt": "2020-12-04T11:20:37.759Z"
        }
    },
    ...
]
```
_Response(500)_
```
{
  access_token : "internal server error"
}
```

### PUT /tasks/id
>edit task

_Request Header_
```
access_token
```
_Request Params_
```
id
```
_Request Body_
```
title : coba edit
category : done
```
_Response(200)_
```
{
    "id": 1,
    "title": "edit",
    "category": "done",
    "UserId": 1,
    "createdAt": "2020-12-01T23:16:49.584Z",
    "updatedAt": "2020-12-01T23:57:03.492Z"
}
```
_Response(404)_
```
[
    {
      "message": "Data not found!"
    }
]
```
_Response(500)_
```
{
  access_token : "internal server error"
}
```

### DELETE /tasks/id
>fdelete a task

_Request Header_
```
access_token
```
_Request Params_
```
id
```
_Request Body_
```
none
```
_Response(200)_
```
{
  "message": "succesfully deleted"
}
```
_Response(500)_
```
{
  access_token : "internal server error"
}
```
### POST /googleLogin
>login

_Request Header_
```
none
```
_Request Body_
```
token
```
_Response(200)_
```
{
  access_token : "token string"
}
```
_Response(500)_
```
{
  access_token : "internal server error"
}
```
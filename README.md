# kanban-app

```
ITS ACTUALLY KHAN BANG APP
```

## Restful endpoints
#
# URL
```
Client URL : https://khanbang.web.app
Server URL : https://khan-bang.herokuapp.com/
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

### POST /tasks
>create a task

_Request Header_
```
access_token
```
_Request Body_
```
title : doing a
category : backlog
```
_Response(201)_
```
{
  "createdTask": {
      "id": 1,
      "title": "doing a",
      "category": "backlog",
      "UserId": 6,
      "updatedAt": "2020-12-01T23:16:49.584Z",
      "createdAt": "2020-12-01T23:16:49.584Z"
  }
}
```
_Response(400)_
```
[
  {
      "message": "can not be empty"
  },
  {
      "message": "can not be empty"
  }
]
```
_Response(401)_
```
{
    "message": "please login"
}
```
_Response(500)_
```
{
  access_token : "internal serve error"
}
```

### GET /tasks
>fetch all task

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
        "id": 6,
        "title": "test lagi123",
        "category": "done",
        "UserId": 6,
        "createdAt": "2020-12-03T14:12:36.420Z",
        "updatedAt": "2020-12-03T14:12:36.420Z",
        "User": {
            "id": 6,
            "email": "joko2@mail.com",
            "password": "$2a$08$eHMl8Ypd2wHPVN5puXQbouIzvvCNGS8tww6RAYtiWD/NCKYMmHyQa",
            "createdAt": "2020-12-01T15:26:25.692Z",
            "updatedAt": "2020-12-01T15:26:25.692Z"
        }
    },
    ...
]
```
_Response(500)_
```
{
  access_token : "internal serve error"
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
    "title": "coba edit",
    "category": "done",
    "UserId": 6,
    "createdAt": "2020-12-01T23:16:49.584Z",
    "updatedAt": "2020-12-01T23:57:03.492Z"
}
```
_Response(400)_
```
[
    {
        "message": "can not be empty"
    },
    {
        "message": "can not be empty"
    }
]
```
_Response(500)_
```
{
  access_token : "internal serve error"
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
  "message": "succesfully delete a task"
}
```
_Response(500)_
```
{
  access_token : "internal serve error"
}
```
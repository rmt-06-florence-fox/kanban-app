# KANBAN-APP

##Restful endpoints
<!-- --- -->
# URL
```
Client URL : https://canbanapp.web.app/
Server URL : http://canbanapp.herokuapp.com/
```

### POST /register

>register
_Request Body_
```
{

    "email": "user email",
    "password": "user password"
}
```
_Response (201)_
```
{
    "id":  "user id",
    "email": "user email"
}
```

_Response(400- bad request)_
```
{

  "message": "Name can't be empty,Email can't be empty,Password can't be empty"

}
```

_Response(500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}
```


### POST /login

>login
_Request Body_
```
{
  "email": "user email",
  "password": "user password" 
}
```
_Response (200)_
```
{
  access_token : "access_token"
}
```
_Response(400- bad request)_
```
{

  "message": "Email can't be empty, Password can't be empty"

}

_Response(401)_
```
{
    message: "Invalid Account!"
}
```

_Response(500)_
```
{
    "message": "internal server error"
}
```


### GET /googleLogin

>login with google account
_Request Body_
```
{
  googleToken = "user google token"
}
```
_Response (200)_
```
{
  access_token : "access_token"
}
```
_Response(500)_
```
{
    "message": "internal server error"
}
```

### POST /tasks

>create Task
_Request Header_
```
{
  access_token: token
}
```
_Request Body_
```
{
    title:"title",
    category: "category"
}
```
_Response(201)_
```
{
  title: "title",
  category: "category",
  UserId: "user id"
}
```
_Response(401)_
```
{
  message: 'please login first'
}
```
_Response (500)_
```
{
  "message": "internal server error"
}
```
### GET /tasks

>Show All Task List
_Request Header_
```
{
  access_token: token
}
```

_Response(200)_
```
[
     {
        "id": ,
        "title": "title",
        "category": "category",
        "UserId": "user id"
        "createdAt": ,
        "updatedAt": 
    },
]
```
_Response(401)_
```
{
  message: 'please login first'
}
```
_Response (500)_
```
{
  "message": "internal server error"
}
```

### PUT /tasks/:id

>Edit Task List by Id
_Request Header_
```
{
  access_token: token
}
```
_Request Params_
```
  id
```
_Request Body_
```
{
  title: "title",
  category: "category"
}
```

_Response(200)_
```
{
  title: "title",
  category: "category",
  UserId: "user id"
}
```
_Response(404)_
```
{
   message: 'data not found'
}
```
_Response(500)_
```
{
  "message": "internal server error"
}
```

### PATCH /tasks/:id

>Update category by Id
_Request Header_
```
 access_token: token
```

_Request Body_
```
{
    category: category
}
```
_Request Params_
```
  id
```
_Response(200)_
```
{
  title: "title",
  category: "category",
  UserId: "user id"
}

```
_Response(500)_
```
{
  "message": "internal server error"
}
```

### DELETE /tasks/:id

>Delete task by Id
_Request Header_
```
 access_token: token
```
_Request Params_
```
  id
```

_Response(200)_
```
{
  message: 'task success to delete'
}
```
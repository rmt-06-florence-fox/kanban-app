# KANBAN DOCUMENTATION

KANBAN is an application to manage your task. This app has :
- RESTful endpoint for CRUD operation
- JSON formatted response

## RESTful Endpoints 


`GET /tasks`
* Request Header
```
{
  "token": "<your access token>"
}
```
* Request Body
```
NONE
```
* Request Params
```
NONE
```
* Response (200)
```
[
    {
        "id": 2,
        "title": "Bagain Client",
        "category": "Done",
        "UserId": 1,
        "createdAt": "2020-12-01T08:53:41.834Z",
        "updatedAt": "2020-12-01T09:01:34.776Z",
        "User": {
            "id": 1,
            "email": "example@mail.com",
            "password": "$2a$04$0eKsKdSRURDJrdu6dRvdtetaBvoV2jt8DwvwM/GJBGT2a3xKXEyRu",
            "createdAt": "2020-12-01T08:44:44.717Z",
            "updatedAt": "2020-12-01T08:44:44.717Z"
        }
    },
    {
        "id": 3,
        "title": "Design",
        "category": "Todo",
        "UserId": 2,
        "createdAt": "2020-12-01T09:10:13.917Z",
        "updatedAt": "2020-12-01T09:10:13.917Z",
        "User": {
            "id": 2,
            "email": "example2@mail.com",
            "password": "$2a$04$.ffrkMtnKPXMQz3GGOJ.aOemjdk.5gSGeE8oBRTSaLxj.ebFjfBrq",
            "createdAt": "2020-12-01T09:09:16.395Z",
            "updatedAt": "2020-12-01T09:09:16.395Z"
        }
]
```
* Response (500)
```
{
    "msg" : "Internal Server Error"
}
```


`POST /tasks`
* Request Header
```
{
  "token": "<your access token>"
}
```
* Request Body
```
- title (string)
- category (string)
```
* Request Params
```
NONE
```
* Response (201)
```
{
    {
    "id": 22,
    "title": "design",
    "category": "Todo",
    "UserId": 2,
    "updatedAt": "2020-12-04T14:20:16.427Z",
    "createdAt": "2020-12-04T14:20:16.427Z"
}
}
```
* Response (500)
```
{
    "msg" : "Internal Server Error"
}
```


`GET /tasks/:id`
* Request Header
```
{
  "token": "<your access token>"
}
```
* Request Body
```
NONE
```
* Request Params
```
- id 
```
* Response (200)
```
{
    "id": 2,
    "title": "bagain client1",
    "category": "Done",
    "UserId": 1,
    "createdAt": "2020-12-01T08:53:41.834Z",
    "updatedAt": "2020-12-01T09:01:34.776Z"
}
```
* Response (404)
```
{
    "msg" : "Task Not Found"
}
```

* Response (500)
```
{
    "msg" : "Internal Server Error"
}
```


`PATCH /tasks/:id`
* Request Header
```
{
  "token": "<your access token>"
}
```
* Request Body
```
- category (string)
```
* Request Params
```
- id 
```
* Response (200)
```
{
    "id": 2,
    "title": "bagain client1",
    "category": "Completed",
    "UserId": 1,
    "createdAt": "2020-12-01T08:53:41.834Z",
    "updatedAt": "2020-12-01T09:01:34.776Z"
}
```
* Response (404)
```
{
    "msg" : "Task Not Found on your list"
}
```

* Response (500)
```
{
    "msg" : "Internal Server Error"
}
```


`PUT /tasks/:id`
* Request Header
```
{
  "token": "<your access token>"
}
```
* Request Body
```
- title (string)
- category (string)
```
* Request Params
```
- id 
```
* Response (200)
```
{
    "id": 2,
    "title": "bagain server",
    "category": "Completed",
    "UserId": 1,
    "createdAt": "2020-12-01T08:53:41.834Z",
    "updatedAt": "2020-12-01T09:01:34.776Z"
}
```
* Response (404)
```
{
    "msg" : "Task Not Found on your list"
}
```

* Response (500)
```
{
    "msg" : "Internal Server Error"
}
```


`DELETE /tasks/:id`
* Request Header
```
{
  "token": "<your access token>"
}
```
* Request Body
```
NONE
```
* Request Params
```
- id 
```
* Response (200)
```
{
    msg : `Task with id ${id} Success to delete`
}
```
* Response (404)
```
{
    "msg" : "Task Not Found on your list"
}
```

* Response (500)
```
{
    "msg" : "Internal Server Error"
}
```


`POST /register`
* Request Header
```
NONE
```

* Request Body
```
- email (string/format E-mail)
- username (string)
```

* Request Params
```
NONE
```

* Response (201)
```
{
    "email": "Example3@mail.com"
}
```
* Response (400)
```
{
    "message": "Email is Required"
}
```

* Response (500)
```
{
    "msg" : "Internal Server Error"
}
```


`POST /login`
* Request Header
```
NONE
```

* Request Body
```
- email (string/format E-mail)
- password (string)
```

* Request Params
```
NONE
```

* Response (200)
```
{
    "token": "<your access token>"
}
```

* Response (401)
```
{
    "msg" : "Invalid Account"
}
```

* Response (500)
```
{
    "msg" : "Internal Server Error"
}
```

`POST /goolelogin`

## DEPLOY URL
# Kanban App Server

Kanban App is an application to manage your working progress. This app has : 
* RESTful endpoint for tasks CRUD operation
* JSON formatted response

&nbsp;

## RESTful endpoints
### POST /register

> Create new User

_Request Header_
```
not needed
```

_Request Body_
```
required : 
- email = [string]
- password = [string]

{
"name": "<name to get insert into>",
"email": "<email to get insert into>"
"password": "<password to get insert into>"

}
```

_Response (201)_
```
{
    "id": 2,
    "email": "on1@mail.com"
}
```

_Response (400 - Bad Request)_
```
{
"message": [
    "input correct email",
    "Password is required"
]
}
```
---
### POST /login

> Create token for user

_Request Header_
```
not needed data
```

_Request Body_
```
required : 
- email = [string]
- password = [string]

{
"email": "<email to get insert into>",
"password": "<password to get insert into>"
}
```

_Response (200 - Success)_
```
{
"access_token": "<your access token>"
}
```

_Response (401 - Unauthorized)_
```
{
"message": "Invalid account"
}

OR

{
"message": "Invalid email/password"
}
```

---
### POST /googleLogin

> Create token for user

_Request Header_
```
not needed data
```

_Request Body_
```
required : 
- gmail account
```

_Response (200 - Success)_
```
{
"access_token": "<your access token>"
}
```

_Response (500 - Internal server error)_
```
{
"message": "Internal server error"
}
```


---
### POST /tasks

> Create task data

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
required : 
- name = [string]
- title = [string]
- category = [string]


{
  "name": "<name to get insert into>",
  "title": "<title to get insert into>",
  "category": "<category to get insert into>"
}
```

_Response (201 - Created)_
```
{
    "data": {
        "id": 7,
        "name": "gokue",
        "title": "cucubo",
        "category": "done",
        "UserId": 2,
        "updatedAt": "2020-12-03T06:51:00.679Z",
        "createdAt": "2020-12-03T06:51:00.679Z"
    }
}
```

_Response (400 - Bad request)_
```
{
    "message": [
        "Name is required",
        "Title is required"
    ]
}
```

---
### GET /tasks

> Get all tasks data of user

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed data
```

_Response (200 - Success)_
```
[
    {
        "id": 1,
        "name": "senaya",
        "title": "belajar",
        "category": "backlog",
        "UserId": 1,
        "createdAt": "2020-12-01T09:16:46.000Z",
        "updatedAt": "2020-12-01T09:16:46.000Z"
    },
    {
        "id": 6,
        "name": "yoichi",
        "title": "lempar wkwk",
        "category": "todo",
        "UserId": 1,
        "createdAt": "2020-12-01T13:24:49.807Z",
        "updatedAt": "2020-12-01T13:28:23.345Z"
    }
]
```

_Response (500 - Internal server error)_
```
{
    "message": "Internal server error"
}
```


---
### PUT /tasks/:id

> Update one task data

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
required: 
- id = [integer]
- name = [string]
- title = [string]
- category = [string]

{
  "name": "<name to get insert into>",
  "title": "<title to get insert into>",
  "category": "<category to get insert into>"
}
```

_Response (200 - Success)_
```
{
    "id": 21,
    "name": "yoichi",
    "title": "lempar wkwk",
    "category": "todo",
    "UserId": 1,
    "createdAt": "2020-12-04T04:29:07.891Z",
    "updatedAt": "2020-12-04T08:07:25.058Z"
}
```

_Response (400 - Bad request)_
```
{
    "message": [
        "Title is required"
    ]
}
```
OR
_Response (500 - Internal server error)_
```
{
    "message": "Internal server error"
}
```

---
### DELETE /tasks/:id

> Delete one task data

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
required: 
- id = [integer]
```

_Response (200 - Success)_
```
{
    "message": "task success to delete"
}
```

_Response (401 - Unauthorized)_
```
{
    "message": "You are not authorized"
}
```
OR

_Response (500 - Internal server error)_
```
{
    "message": "Internal server error"
}
```

---
### POST /categories

> Create category data

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
required : 
- name = [string]
- color = [string]


{
  "name": "<name to get insert into>",
  "color": "<color to get insert into>"
}
```

_Response (201 - Created)_
```
{
    "id": 5,
    "name": "soso",
    "color": "yellow",
    "updatedAt": "2020-12-04T16:00:45.948Z",
    "createdAt": "2020-12-04T16:00:45.948Z"
}
```

_Response (400 - Bad request)_
```
{
    "message": [
        "Name is required",
        "Color is required"
    ]
}
```

---
### GET /categories

> Get all categories data of user

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed data
```

_Response (200 - Success)_
```
[
    {
        "id": 1,
        "name": "backlog",
        "color": "red",
        "createdAt": "2020-12-04T15:52:49.837Z",
        "updatedAt": "2020-12-04T15:52:49.837Z"
    },
    {
        "id": 2,
        "name": "todo",
        "color": "black",
        "createdAt": "2020-12-04T15:52:49.837Z",
        "updatedAt": "2020-12-04T15:52:49.837Z"
    },
    ...
]
```

_Response (500 - Internal server error)_
```
{
    "message": "Internal server error"
}
```

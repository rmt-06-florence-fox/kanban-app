# Kanban-App

Kanban app is an application to manage your daily activity. This app has : 
* REST endpoint 
* JSON formatted response

&nbsp;

## REST endpoints
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
  "email": "<email to get insert into>"
  "password": "<password to get insert into>"
}
```

_Response (201)_
```
{
    "id": 1,
    "email": "a@mail.com"
}
```

_Response (400 - Bad Request)_
```
{
    "message": "Invalid email or password, email must be unique!"
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
- google account
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
### GET /tasks

> Get your list tasks

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
{
    "data": [
        {
            "id": 1,
            "title": "tes",
            "description": "lorem ipsum",
            "category": "todo",
            "createdAt": "2020-12-02T14:09:01.081Z",
            "updatedAt": "2020-12-02T14:09:01.081Z",
            "UserId": 3
        },
        {
            "id": 2,
            "title": "tes 2",
            "description": "lorem ipsum",
            "category": "todo",
            "createdAt": "2020-12-02T15:29:55.475Z",
            "updatedAt": "2020-12-02T15:29:55.475Z",
            "UserId": 4
        }
    ]
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

> post your tasks

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
{
  title: <your task title>,
  description: <your task description>,
  category: <your task category>
}
```

_Response (200 - Success)_
```
{
    "data": {
        "id": 12,
        "title": "tes 5",
        "description": "lorem ipsum",
        "category": "done",
        "UserId": 12,
        "updatedAt": "2020-12-03T14:43:52.610Z",
        "createdAt": "2020-12-03T14:43:52.610Z"
    }
}
```

_Response (500 - Internal server error)_
```
{
    "msg": "Internal server error"
}
```
---
### GET /tasks/:id

> get your tasks by id

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
required:`id=[integer]`
```

_Response (200 - Success)_
```
{
    "data": {
        "id": 11,
        "title": "tes 5",
        "description": "lorem ipsum",
        "category": "done",
        "createdAt": "2020-12-03T06:17:15.708Z",
        "updatedAt": "2020-12-03T06:17:15.708Z",
        "UserId": 12
    }
}
```

_Response (404 - not found)_
```
{
    "message": "Data not found!"
}
```
---
### PUT /tasks/:id

> edit your tasks

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
required:`id=[integer]`

{
  title: <your task title>,
  description: <your task description>,
  category: <your task category>
}

```

_Response (200 - Success)_
```
{
    "id": 11,
    "title": "advlnvadja",
    "description": "aedclnvldajn",
    "category": "done23",
    "createdAt": "2020-12-03T06:17:15.708Z",
    "updatedAt": "2020-12-03T14:48:42.814Z",
    "UserId": 12
}
```

_Response (500 - Internal server error)_
```
{
    "message": "Internal server error"
}
```

---
### DELETE /tasks/:id

> delete your tasks 

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request Body_
```
required:`id=[integer]`

```

_Response (200 - Success)_
```
{
    "message": "tasks has been delete"
}
```

_Response (401 - Unauthorized)_
```
{
    "message": "you are not authorized to access this todo!"
}
```
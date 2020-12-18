# kanban-app

Simple kanban app built with Vue.js, Express, Sequelize

### DEPLOY SITE: 
* https://kanban-trolle.herokuapp.com/ (SERVER)
* https://kanban-trolle.web.app/ (CLIENT)

#

## API DOCUMENTATION:

#

> ##  POST /signup

_Request Body_
```
{
    "name": "coba",
    "email": "coba@mail.com",
    "password": "cobacoba"
}
```

### Responses

_Response (201 - Created)_
```
{
    "id": 1
    "name": "coba",
    "email": "coba@mail.com"
    "password" : "$2a$09$8B0PlxKr/70fdMHm8kgg3e8aoADBT.sWyq0ntcvHmd3M44eo4rKqi"
}

```

_Response (400 - Bad Request)_
```
{
    "message": "Email has been already used"
}

```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}

```
#
> ## POST /signin

_Request Body_
```
{
    "email": "coba@mail.com",
    "password": "cobacoba"
}
```

### Responses

_Response (200)_
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJjb2JhQG1haWwuY29tIiwiaWF0IjoxNjA2NDQ1NDY5fQ.sduE7JVaPB1ZcQ9GssXufBpHOjxYx2jicV9ADiAoR6o"
}

```

_Response (400 - Bad Request)_
```
{
    "message": "Email or password is incorrect"
}

```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}

```
#
> ##  POST /tasks


_Request Headers_

```json
{
  "access_token": "<your access token>"
}
```

_Request Body_

```json
{
  "title": "Your Task Title",
  "category": "Backlog" || "To-do" || "Doing" || "Done"
}
```

### Responses

_Response (201 - Created)_

```json
{
  "id": 1,
  "title": "Your Task Title",
  "category": "Done",
  "UserId": 1,
  "updatedAt": "2020-12-04T16:32:02+00:00",
  "createdAt": "2020-12-04T16:32:02+00:00"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": [
    "Title can't be empty"
  ]
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "Forbidden Access"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

> ## GET /tasks

Get all tasks

_Request Headers_

```json
{
  "access_token": "<your access token>"
}
```

### Responses

_Response (200 - Success)_

```json
[
  {
    "id": 3,
    "title": "Pull Request",
    "category": "Backlog",
    "UserId": 3,
    "createdAt": "2020-12-04T16:32:02+00:00",
    "updatedAt": "2020-12-04T16:32:02+00:00",
    "User": {
      "id": 3,
      "name": "John",
      "email": "doe@gmail.com",
      "password": "$2b$10$tMNBGQ8.LMIF948Q.ZS6Uu0HM8Ms.rKQh2whSrTXFVWHLHs2gV7s6",
      "organization": "organization",
      "createdAt": "2020-12-04T16:32:02+00:00",
      "updatedAt": "2020-12-04T16:32:02+00:00"
    }
  },
  {
    "id": 4,
    "title": "Push Origin",
    "category": "Done",
    "UserId": 3,
    "createdAt": "2020-12-04T16:32:02+00:00",
    "updatedAt": "2020-12-04T16:32:02+00:00",
    "User": {
      "id": 3,
      "name": "John",
      "email": "doe@gmail.com",
      "password": "$2b$10$tMNBGQ8.LMIF948Q.ZS6Uu0HM8Ms.rKQh2whSrTXFVWHLHs2gV7s6",
      "organization": "organization",
      "createdAt": "2020-12-04T16:32:02+00:00",
      "updatedAt": "2020-12-04T16:32:02+00:00"
    }
  },
]
```

_Response (403 - Forbidden)_

```json
{
  "message": "Forbidden Access"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server error"
}
```

> ## GET /tasks/:id

Get a task by its ID

_Request Headers_

```json
{
  "access_token": "<your access token>"
}
```

_Parameter_
```json
{
    "id": 3
}

```

### Responses

_Response (200 - Success)_

```json
{
    "id": 3,
    "title": "Pull Request",
    "category": "Backlog",
    "UserId": 3,
    "createdAt": "2020-12-04T16:32:02+00:00",
    "updatedAt": "2020-12-04T16:32:02+00:00",
}

```

_Response (404 - Not Found)_

```json
{
  "message": "Error Not Found"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "Forbidden Access"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "User not Authenticated"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server error"
}
```

> ## PUT /tasks/:id

Update a tasks

_Request Headers_

```json
{
  "access_token": "<your access token>"
}
```

_Request Body_

```json
{
  "title": "Your task Title",
  "category": "Backlog" || "To-do" || "Doing" || "Done"
}
```

_Parameter_
```json
{
    "id": 3
}

```

### Responses

_Response (200 - Success)_

```json
{
    "id": 3,
    "title": "Your task Title",
    "category": "Doing",
    "UserId": 3,
    "createdAt": "2020-12-04T16:32:02+00:00",
    "updatedAt": "2020-12-04T16:32:02+00:00",
}

```

_Response (404 - Not Found)_

```json
{
  "message": "Error Not Found"
}
```

_Response (400 - Bad Request)_

```json
{
  "message":["Title cannot be empty"]
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "Forbidden Access"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "User not Authenticated"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server error"
}
```

> ## DELETE /tasks/:id

Delete a todo

_Request Headers_

```json
{
  "access_token": "<your access token>"
}
```

_Parameter_
```json
{
    "id": 3
}

```

### Responses

_Response (200 - Success)_

```json
{
    "message": "Successfully delete task"
}

```

_Response (404 - Not Found)_

```json
{
  "message": "Error Not Found"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "Forbidden Access"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "User not Authenticated"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server error"
}
```
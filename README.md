# kanban-app
```
Create kanban-app, using express
* RESTful endpoint for task List's CRUD operation
* JSON formatted response
* Web Server response

```

# USAGE
```
Make sure you have Node.js and npm in your computer and then run `npm install`.
In order to get access to all of the routes, you will need a `JWT(JSON Web Token) Token` which will be generated automatically after you sign in successfully.
Run `nodemon app.js  to start the server.
Run `live-server --host=localhost` to start the client
```

##Restful endpoints
<!-- --- -->
# URL
```
Client URL : http://localhost:8080
Server URL : http://localhost:3000
```

### GET/task

>get all task list

_Request Header_
```
{
  access_token: token
}
```
_Request Body_
```
not needed
```
_Response (200)_
```

[
    {
        "id": 4,
        "title": "Mengerjakan Kanban App",
        "createdAt": "2020-11-30T12:51:36.519Z",
        "updatedAt": "2020-11-30T12:51:36.519Z",
        "CategoryId": 1,
        "OrganizationId": 1,
        "UserId": 3
    },
    {
        "id": 1,
        "title": "Mengerjakan Server",
        "createdAt": "2020-11-30T12:49:21.466Z",
        "updatedAt": "2020-11-30T13:07:23.698Z",
        "CategoryId": 2,
        "OrganizationId": 1,
        "UserId": 3
    }
```

_Response(401- Unauthorized)_
```
{
  "message": "You must login first"
}
```

_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```

### POST/task

>Create new task

__Request Header_
```
{
  access_token: token
}
```
_Request Body_
```
{
  "title": "<title to get insert into>",
  "CategoryId": "<CategoryId to get insert into>",
  "OrganizationId": "<Organization to get insert into>"
}
```
_Response (201 - Created)_
```
    {
        "id": 4,
        "title": "Mengerjakan Kanban App",
        "createdAt": "2020-11-30T12:51:36.519Z",
        "updatedAt": "2020-11-30T12:51:36.519Z",
        "CategoryId": 1,
        "OrganizationId": 1,
        "UserId": 3
    }
```
_Response(400- bad request)_
```
{
  "message": "Validation error: : Validation notEmpty on title failed"
}
```
_Response(401- Unauthorized)_
```
{
  "message": "You must login first"
}
```

_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
### GET/task/:id

>get task by id
_Request Header_
```
{
  access_token: token
}
```
_Request Body_
```
not needed
```
_Response (200)_
```
    {
        "id": 4,
        "title": "Mengerjakan Kanban App",
        "createdAt": "2020-11-30T12:51:36.519Z",
        "updatedAt": "2020-11-30T12:51:36.519Z",
        "CategoryId": 1,
        "OrganizationId": 1,
        "UserId": 3
    }
```

_Response(401- Unauthorized)_
```
{
  "message": "You must login first"
}
```

_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```

_Response(404 - not found)_
```
{
  "message": "error not found"
}
```

```
### PUT/task/:id

>Update task by ID

_Request Header_
```
{
  access_token: token
}
```


_Request Body_
```
{
  "title": "<title to get updated later on>",
  "CategoryId": "<CategoryId to get updated later on>",
  "UserId": "<UserId to get updated later on>"
}
```
_Response(200)_
```
    {
        "id": 4,
        "title": "Mengerjakan Kanban App",
        "createdAt": "2020-11-30T12:51:36.519Z",
        "updatedAt": "2020-11-30T12:51:36.519Z",
        "CategoryId": 1,
        "OrganizationId": 1,
        "UserId": 3
    }
```

_Response(401- Unauthorized)_
```
{
  "message": "You must login first"
}
```

_Response(403- Forbidden)_
```
{
  "message": "you are not authorized"
}
```

_Response(404 - not found)_
```
{
  "message": "error not found"
}
```



_Response(400- bad request)_
```
{
  "message": "Validation error: Validation notEmpty on title failed"
}
```
_Response (500)_
```

{
  "message": "Internal Server Error"
}
```
### PUT/task/:id

>Modify category task by ID

_Request Header_
```
{
  access_token: token
}
```


_Request Body_
```
{
   "CategoryId": "<CategoryId to get updated later on>"
}
```
_Response(200)_
```
{
    {
        "id": 4,
        "title": "Mengerjakan Kanban App",
        "createdAt": "2020-11-30T12:51:36.519Z",
        "updatedAt": "2020-11-30T12:51:36.519Z",
        "CategoryId": 2,
        "OrganizationId": 1,
        "UserId": 3
    }
}
```

_Response(401- Unauthorized)_
```
{
  "message": "You must login first"
}
```

_Response(403- Forbidden)_
```
{
  "message": "you are not authorized"
}
```

_Response(404 - not found)_
```
{
  "message": "error not found"
}
```


_Response (500)_
```

{
  "message": "Internal Server Error"
}
```

```
### DELETE/task/:id

>Delete task by ID

_Request Header_
```
{
  access_token: token
}
```

_Response(200)_
```
{
  "message": "delete success"
}
```

_Response(401- Unauthorized)_
```
{
  "message": "You must login first"
}
```

_Response(403- Forbidden)_
```
{
  "message": "you are not authorized"
}
```

_Response(404 - not found)_
```
{
  "message": "error not found"
}
```

_Response (500)_
```
{
  "message": "Internal Server Error"
}
```

### POST/register

>Create User

_Request Header_
```
not needed
```

_Request Body_
```
{
    "email": "<User's email>",
    "password": "<User's password>"
}
```

_Response(201)_
```
{
  "id": 2,
  "email": "ogy@mail.com",
  "password": "$2a$08$h.kbgDtxJwE/koklvTOWNOZEU6/csi46/RbbIjwfQB6B3cyY/NS.W",
  "updatedAt": "2020-11-27T18:53:16.688Z",
  "createdAt": "2020-11-27T18:53:16.688Z"
}
```
_Response(400- bad request)_
```
{
   "message": "Validation error: min password length is 4, email must be unique, Validation error: Validation isEmail on email failed,\nValidation error: Validation notEmpty on email failed, Validation error: min password length is 4,\nValidation error: Validation isEmail on email failed,\nValidation error: Validation notEmpty on password failed,email must be unique"
}
```


_Response (500)_
```
{
  "message": "Internal Server Error"
}
```

### POST/login

>Login User

_Request Header_
```
not needed
```

_Request Body_
```
{
   
    "email": "<User's email>",
    "password": "<User's password>"
}
```

_Response(200)_
```
{
    "access_token": <token>
}
```
_Response(400- bad request)_
```
{
    "message": "Invalid Account, invalid email or password"
}
```


_Response (500)_
```
{
  "message": "Internal Server Error"
}
```

### POST/google-sign-in

>Google Sign IN User

_Request Header_
```
not needed
```

_Request Body_
```
{
   
    "id_token": <id_token>;
}
```

_Response(200)_
```
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJvZ3lyYWhtYXdhbkBnbWFpbC5jb20iLCJpYXQiOjE2MDY1MjM5ODJ9.67RLPaYnmqyfiEvEnITuq3QsLjX8AEBbpiHUJxaPkrQ"
}
```

_Response (500)_
```
{
  "message": "Internal Server Error"
}


### POST/organization

>Create new organization

__Request Header_
```

```
_Request Body_
```
{
  "name": "<name to get insert into>",
}
```
_Response (201 - Created)_
```
    {
        "id": 1,
        "name": "florence-fox",
        "createdAt": "2020-11-30T12:36:57.885Z",
        "updatedAt": "2020-11-30T12:36:57.885Z"
    }
```
_Response(400- bad request)_
```
{
  "message": "Validation error: : Validation notEmpty on title failed"
}
```

_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
### GET/organization

>GET organization

__Request Header_
```

```
_Request Body_
```
_Response (200)_
```
[
    {
        "id": 1,
        "name": "florence-fox",
        "createdAt": "2020-11-30T12:36:57.885Z",
        "updatedAt": "2020-11-30T12:36:57.885Z"
    }
]

```

_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```

### POST/category

>Create new category

__Request Header_
```
{
  access_token: token
}
```
_Request Body_
```
{
  "title": "<title to get insert into>",
}
```
_Response (201 - Created)_
```
    {
        "id": 1,
        "title": "backlog",
        "createdAt": "2020-11-30T10:15:44.126Z",
        "updatedAt": "2020-11-30T10:15:44.126Z"
    }
```
_Response(400- bad request)_
```
{
  "message": "Validation error: : Validation notEmpty on title failed"
}
```

_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```
### GET/category

>GET category

__Request Header_
```
{
  access_token: token
}
```
_Request Body_
```
_Response (200)_
```
[
  {
        "id": 1,
        "title": "backlog",
        "createdAt": "2020-11-30T10:15:44.126Z",
        "updatedAt": "2020-11-30T10:15:44.126Z",
        "Tasks": [
            {
                "id": 5,
                "title": "pusing bikin tampilan",
                "createdAt": "2020-12-03T08:47:48.037Z",
                "updatedAt": "2020-12-04T07:06:39.889Z",
                "CategoryId": 1,
                "OrganizationId": 1,
                "UserId": 3,
                "User": {
                    "id": 3,
                    "email": "ogy@mail.com",
                    "password": "$2a$10$mf3PV1901mh4nJrCoqnPJOhMDdeL3j4lk24j5zCNAFrc6Y.8Cw9wq",
                    "createdAt": "2020-11-30T12:40:40.432Z",
                    "updatedAt": "2020-11-30T12:40:40.432Z",
                    "OrganizationId": 1
                },
                "Organization": {
                    "id": 1,
                    "name": "florence-fox",
                    "createdAt": "2020-11-30T12:36:57.885Z",
                    "updatedAt": "2020-11-30T12:36:57.885Z"
                }
            },
            {
                "id": 4,
                "title": "Mengerjakan Kanban App",
                "createdAt": "2020-11-30T12:51:36.519Z",
                "updatedAt": "2020-11-30T12:51:36.519Z",
                "CategoryId": 1,
                "OrganizationId": 1,
                "UserId": 3,
                "User": {
                    "id": 3,
                    "email": "ogy@mail.com",
                    "password": "$2a$10$mf3PV1901mh4nJrCoqnPJOhMDdeL3j4lk24j5zCNAFrc6Y.8Cw9wq",
                    "createdAt": "2020-11-30T12:40:40.432Z",
                    "updatedAt": "2020-11-30T12:40:40.432Z",
                    "OrganizationId": 1
                },
                "Organization": {
                    "id": 1,
                    "name": "florence-fox",
                    "createdAt": "2020-11-30T12:36:57.885Z",
                    "updatedAt": "2020-11-30T12:36:57.885Z"
                }
            }
        ]
    },
  ]

```

_Response (500 - Bad Request)_
```
{
  "message": "Internal Server Error"
}
```

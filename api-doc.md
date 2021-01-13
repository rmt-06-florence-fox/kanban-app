# Kanban Apps - API Documentation by normnd.akbr
Kanban App is an application to manage your projects or daily tasks. This app has :
* RESTful endpoint for login and register operation 
* RESTful endpoint for tasks's CRUD operation
* JSON formatted response

&nbsp;

## RESTful Login & Register Endpoints
### POST /register

> Register a new user

_Request Body_
```
{
    email: "user@mail.com",
    password: "12345"
}
```

_Response (201)_
```
{
    message: "User successfully registered",
    {
        id: "1",
        email: "user@mail.com",
    }
}
```

_Response (500)_
```
{
    message: "Internal Server Error"
}
```

### POST /login

> login to application

_Request Body_
```
{
    email: "user@mail.com",
    password: "12345"
}
```

_Response (200)_
```
{
    message: "User Logged in!",
    {
        email: "user@mail.com",
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ1c2VyMkBnbWFpbC5jb20iLCJpYXQiOjE2MDQyMTIzMzR9.tP1dBk7IY0AXtIYHrstuTnm1_o5Pu94Eam4oXK3tICo"
    }
}
```
_Response (404)_
```
{
    message: "Invalid Username/Password!"
}
```

_Response (500)_
```
{
    message: "Internal Server Error"
}
```
&nbsp;

## RESTful CRUD Endpoints
### GET /tasks

> Get all tasks list by all user

_Request Header_
```
{ 
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ1c2VyMkBnbWFpbC5jb20iLCJpYXQiOjE2MDQyMTIzMzR9.tP1dBk7IY0AXtIYHrstuTnm1_o5Pu94Eam4oXK3tICo"
}
```

_Response (200)_
```
[
    {
        id: "1",
        title: "Core Gundam's Head Unit",
        status: "Backlog",
        UserId: "1",
        due_date: "2020-11-28T18:25:43-05:00",
        createdAt: "2020-11-28T18:25:43-05:00",
        updatedAt: "2020-11-28T18:25:43-05:00"
    },
    {
        id: "2",
        title: "Core Gundam's Body Unit",
        status: "Backlog",
        UserId: "1",
        due_date: "2020-11-28T18:25:43-05:00",
        createdAt: "2020-11-28T18:25:43-05:00",
        updatedAt: "2020-11-28T18:25:43-05:00"
    },
    {
        id: "1",
        title: "Core Gundam's Waist Unit",
        status: "Backlog",
        UserId: "1",
        due_date: "2020-11-28T18:25:43-05:00",
        createdAt: "2020-11-28T18:25:43-05:00",
        updatedAt: "2020-11-28T18:25:43-05:00"
    }
]
```

_Response (500)_
```
{
    message: "Internal Server Error
}
```

### GET /tasks/:id

> Get task detail by its id

_Request Header_
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ1c2VyMkBnbWFpbC5jb20iLCJpYXQiOjE2MDQyMTIzMzR9.tP1dBk7IY0AXtIYHrstuTnm1_o5Pu94Eam4oXK3tICo"
}
```

_Request Params_
```
{
    id: "2"
}
```

_Response (200)_
```
{
    id: "2",
    title: "Core Gundam's Body Unit",
    status: "On-Going",
    UserId: "1"
    due_date: "2020-11-28T18:25:43-05:00",
    createdAt: "2020-11-28T18:25:43-05:00",
    updatedAt: "2020-11-28T18:25:43-05:00"
}
```

_Response (404)_
```
{
    message: "Not Found!"
}
```

_Response (500)_
```
{
    message: "Internal Server Error"
}
```

### POST /tasks

> Create new Task

_Request Header_
```
{ 
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ1c2VyMkBnbWFpbC5jb20iLCJpYXQiOjE2MDQyMTIzMzR9.tP1dBk7IY0AXtIYHrstuTnm1_o5Pu94Eam4oXK3tICo"
}
```

_Request Body_
```
{
    title: "Core Gundam's Hand Unit L/R",
    description: "Build Core Gundam's Hand UnitL/R",
    status: "On-Going",
    due_date: "2020-11-28T18:25:43-05:00"
}
```

_Response (201)_
```
[
    {
        id: "4",
        title: "Core Gundam's Hand Unit L/R",
        status: "On-Going",
        UserId: "1",
        due_date: "2020-11-28T18:25:43-05:00",
        createdAt: "2020-11-28T18:25:43-05:00",
        updatedAt: "2020-11-28T18:25:43-05:00"
    }
]
```

_Response (500)_
```
{
    message: "Internal Server Error
}
```

### PUT /tasks/:id

> Edit (update) selected Task data

_Request Header_
```
{ 
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ1c2VyMkBnbWFpbC5jb20iLCJpYXQiOjE2MDQyMTIzMzR9.tP1dBk7IY0AXtIYHrstuTnm1_o5Pu94Eam4oXK3tICo"
}
```

_Request Params_
```
{
    id: "4"
}
```

_Request Body_
```
{
    title: "Core Gundam's Hand Unit L & R",
    status: "On-Going",
    due_date: "2020-11-28T18:25:43-05:00"
}
```

_Response (201)_
```
[
    {
        id: "4",
        title: "Core Gundam's Hand Unit Left & Right",
        status: "On-Going",
        UserId: "1",
        due_date: "2020-11-28T18:25:43-05:00",
        createdAt: "2020-11-28T18:25:43-05:00",
        updatedAt: "2020-11-28T18:25:43-05:00"
    }
]
```

_Response (500)_
```
{
    message: "Internal Server Error
}
```

### PATCH /tasks/:id

> Update/edit tasks status by its id

_Request Header_
```
{ 
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ1c2VyMkBnbWFpbC5jb20iLCJpYXQiOjE2MDQyMTIzMzR9.tP1dBk7IY0AXtIYHrstuTnm1_o5Pu94Eam4oXK3tICo"
}
```

_Request Params_
```
{
    id: "1"
}
```

_Request Body_
```
{
    status: "On-Going"
}
```

_Response (201)_
```
{
    id: "4",
    title: "Core Gundam's Hand Unit Left & Right",
    status: "On-Going",
    UserId: "1",
    due_date: "2020-11-28T18:25:43-05:00",
    createdAt: "2020-11-28T18:25:43-05:00",
    updatedAt: "2020-11-28T18:25:43-05:00"
}
```

_Response (500)_
```
{
    message: "Internal Server Error"
}
```

### DELETE /tasks/:id

> Remove selected task

_Request Header_
```
{ 
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ1c2VyMkBnbWFpbC5jb20iLCJpYXQiOjE2MDQyMTIzMzR9.tP1dBk7IY0AXtIYHrstuTnm1_o5Pu94Eam4oXK3tICo"
}
```

_Response (200)_
```
{
    message: "Deleted Successfully",
    true
}
```

_Response (500)_
```
{
    message: "Internal Server Error
}
```


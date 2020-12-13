# Kanban Documentation

Kanban is an application to manage your project tasks with your team.
This app has : 
* RESTful endpoint for task's CRUD operation
* JSON formatted response

## RESTful endpoints
### POST /login

_Request Params_
```
Not needed
```
_Request Header_
```
Not needed
```

_Request Body_
```
{
  "email": "<your email>",
  "password": "<your password>"
}
```

_Response (200 - OK)_
```
{
  "access_token": "<your access token>",
  "fullName": "<your full name>"
}
```

_Response (401 - Unauthorized)_
```
{
  "message": "Email or password is invalid."
}
```
---
### POST /register

> Create new user

_Request Params_
```
Not needed
```
_Request Header_
```
Not needed
```

_Request Body_
```
{
  "first_name": "<first name to get insert into>",
  "last_name": "<last name to get insert into>",
  "email": "<email to get insert into>",
  "password": "<password to get insert into>"
}
```

_Response (201 - Created)_
```
{
  "id": <given id by system>,
  "email": "<posted email>"
}
```
_Response (400 - Bad Request)_
```
{
  "messages": [
        "Email is required.",
    ]
}
```
_Response (400 - Bad Request)_
```
{
  "messages": [
        "Email is required.",
        "Password is required."
    ]
}
```
---
### POST /tasks

> Create a new task

_Request Params_
```
Not needed
```
_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
{
  "title": "<title to get insert into>",
  "description": "<description to get insert into>",
  "due_date": "<due_date to get insert into>",
  "UserId": "<UserId to get insert into>",
  "CategoryId": "<CategoryId to get insert into>"
}
```
_Response (201 - Created)_
```
{
  "id": <task id>,
  "title": "<task title>",
  "description": "<task description>",
  "due_date": "<task due_date>",
  "UserId": "<task UserId>",
  "CategoryId": "<task CategoryId>",
  "updatedAt": "2020-11-28T09:57:17.359Z",
  "createdAt": "2020-11-28T09:57:17.359Z",
}
```
_Response (400 - Bad Request)_
```
{
  "messages": [
        "Title is required."
    ]
}
```
_Response (400 - Bad Request)_
```
{
  "messages": [
        "Title is required.",
        "Due date must be greater than today."
    ]
}
```
---
### GET /tasks

> Get all tasks

_Request Params_
```
Not needed
```
_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
Not needed
```
_Response (200 - OK)_
```
[
  {
    "id": "<task id>",
    "title": "<task title>",
    "description": "<task description>",
    "due_date": "<task due_date>",
    "UserId": "<task UserId>",
    "CategoryId": "<task CategoryId>",
    "createdAt": "2020-11-25T00:09:34.514Z",
    "updatedAt": "2020-11-25T00:09:34.514Z"
  }
]
```
_Response (401 - Unauthorized)_
```
{
  "message": "Unauthorised Access!"
}
```
---
### GET /tasks/:id

> Get a task with specific id

_Request Params_
```
id=[integer]
```
_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
Not needed
```
_Response (200 - OK)_
```
[
  {
    "id": <task id by request>,
    "title": "<task title>",
    "description": "<task description>",
    "due_date": "<task due_date>",
    "UserId": "<task UserId>",
    "CategoryId": "<task CategoryId>",
    "updatedAt": "2020-11-28T09:57:17.359Z",
    "createdAt": "2020-11-28T09:57:17.359Z",
  }
]
```
_Response (401 - Unuthorized)_
```
{
   "message": "Unauthorized Access!"
}
```
_Response (404 - Not Found)_
```
{
   "message": "Data is not found."
}
```
---
### PUT /tasks/:id

> Update all editable properties of a task with specific id

_Request Params_
```
id=[integer]
```
_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
{
  "title": "<task previous title>",
  "description": "<task previous description>",
  "due_date": "<task previous due_date>",
  "UserId": "<task UserId>",
  "CategoryId": "<task CategoryId>"
}
```
_Response (200 - OK)_
```
{
  "id": <task id>,
  "title": "<task updated title>",
  "description": "<task updated description>",
  "due_date": "<task updated due_date>",
  "UserId": "<task UserId>",
  "CategoryId": "<task CategoryId>",
  "updatedAt": "2020-11-28T09:57:17.359Z",
  "createdAt": "2020-11-28T09:57:17.359Z",
}
```
_Response (400 - Bad Request)_
```
{
  "messages": [
        "Title is required."
    ]
}
```
_Response (400 - Bad Request)_
```
{
  "messages": [
        "Title is required.",
        "Due date must be greater than today."
    ]
}
```
_Response (401 - Unuthorized)_
```
{
   "message": "Unauthorized Access!"
}
```
_Response (404 - Not Found)_
```
{
  "message": "Data is not found."
}
```
---
### PATCH/tasks/:id

> Update a property of a task with specific id 

_Request Params_
```
id=[integer]
```
_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
{
  "CategoryId": "<task previous CategoryId>"
}
```
_Response (200 - OK)_
```
{
  "id": <task id>,
  "title": "<task title>",
  "description": "<task description>",
  "due_date": "<task due_date>",
  "UserId": "<task UserId>",
  "CategoryId": "<task updated CategoryId>"
  "updatedAt": "2020-11-28T09:57:17.359Z",
  "createdAt": "2020-11-28T09:57:17.359Z",
}
```
_Response (401 - Unuthorized)_
```
{
   "message": "Unauthorized Access!"
}
```
_Response (404 - Not Found)_
```
{
  "message": "Data is not found."
}
```
---
### DELETE /tasks/:id

> Delete a task with specific id

_Request Params_
```
id=[integer]
```
_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
Not needed
```
_Response (200 - OK)_
```
{
  "message": "The task has been successfully deleted."
}
```
_Response (404 - Not Found)_
```
{
  "message": "Data is not found."
}
```
---
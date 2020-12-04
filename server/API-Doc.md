# Fancy Todo Documentation

Fancy Todo is an application to manage your task. This app has : 
* RESTful endpoint for todo's CRUD operation
* JSON formatted response
* Qoutes API

# URL Local
```
Client URL : http://localhost:8080
Server URL : http://localhost:3000
```
# URL Deploy
```
Client URL : https://new-khanban.web.app
Server URL : https://new-khanban.herokuapp.com
```

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
### _Success Response_
  _Response (200)_
  ```
  {
    "access_token": "<your access token>"
  }
  ```
### _Errors Response_
  _Response (401)_
  ```
  {
    "msg": "Wrong Email/Password"
  }
  ```
  _Response (500)_
  ```
  {
    "msg": "Internal server error"
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
  "email": "<email to get insert into>",
  "password": "<password to get insert into>"
}
```
### _Success Response_
  _Response (201)_
  ```
  {
    "id": <given id by system>,
    "email": "<posted email>"
  }
  ```
### _Errors Response_
  _Response (500)_
  ```
  {
    "msg": "Internal server error"
  }
  ```
  _Response (400)_
  ```
  {
    "msg": "Password is required!, Password must be more than 6 character"
  }
  ```
  _Response (400)_
  ```
  {
    "msg": "Email is required!, Email must be a format sample@mail.com"
  }
  ```
---
### POST /googleLogin

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
    "token_id": "<token id from google>"
}
```
### _Success Response_
  _Response (200)_
  ```
  {
      "id": "<user id>",
      "email": "<user email>"
      "access_token": "<generated accesss token>"
  }
  ```
### _Errors Response_
  _Response (401)_
  ```
  {
    "msg": "Invalid Email/Password"
  }
  ```
---
### GET /tasks

> Get all task

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
not needed
```
### _Success Response_
_Response (200)_
  ```
  [
    {
      "id": "<task id>",
      "title": "<task title>",
      "category": "<task category>",
      "UserId": "<Id User>"
    }
  ]
  ```
### _Errors Response_
  _Response (500 - Bad Request)_
  ```
  {
    "msg": "Internal server error"
  }
  ```
  _Response (401)_
  ```
  {
    "msg": "Authentication Failed!"
  }
  ```
---
### POST /tasks

> Create new task

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
  "category": "<category to get insert into>"
}
```
### _Success Response_
  _Response (201)_
  ```
  {
    "id": <given id by system>,
    "title": "<posted title>",
    "category": "<posted category>",
    "UserId": "<Id User>"
  }
  ```
### _Errors Response_
  _Response (400)_
  ```
  {
    "msg": "Title is required, Category is required"
  }
  ```
  _Response (401)_
  ```
  {
    "msg": "Authentication Failed!"
  }
  ```
  _Response (500 - Bad Request)_
  ```
  {
    "msg": "Internal server error"
  }
  ```
---
### PUT /tasks/:id

> Update task with specific id

_Request Params_
```
Task's ID
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
  "id": "<task id>",
  "title": "<task previous title>",
  "category": "<task previous category>"
}
```
### _Success Response_
  _Response (200)_
  ```
  {
    "id": <task id>,
    "title": "<task updated title>",
    "description": "<task updated description>",
    "UserId": "<Id User>"
  }
  ```
### _Errors Response_
  _Response (400)_
  ```
  {
    "msg": "Title is required, Category is required"
  }
  ```
  _Response (500)_
  ```
  {
    "msg": "Internal server error"
  }
  ```
  _Response (404)_
  ```
  {
    "msg": "Error not found!"
  }
  ```
  _Response (401)_
  ```
  {
    "msg": "Authentication Failed!"
  }
  ```
  _Response (403)_
  ```
  {
    "msg": "Not Authorized!
  }
  ```
---
### DELETE /tasks/:id

> Delete tasks with specific id

_Request Params_
```
Task's ID
```
_Request Header_
```
{
  "access_token": "<your access token>"
}
```
_Request Body_
```
Tasks's ID
```
### _Success Response_
  _Response (200)_
  ```
  {
    "Task Deleted Successfully"
  }
  ```
### _Success Response_
  _Response (500 )_
  ```
  {
    "msg": "Internal server error"
  }
  ```
  _Response (404)_
  ```
  {
    "msg": "Error not found!"
  }
  ```
  _Response (401)_
  ```
  {
    "msg": "Authentication Failed!"
  }
  ```
  _Response (403)_
  ```
  {
    "msg": "Not Authorized!
  }
---
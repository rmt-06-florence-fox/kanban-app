# KANBAN APP

## URL
```JS
Client : https://kanbanbylitha.web.app/
Server : https://kanban-by-litha.herokuapp.com/
```
#
## ROUTE
### POST /register
- Request body
```JS
  name: `user name`
  email: `user email`
  pasword: `user password`
```
#
##### SUCCESS 
- Response *`(201)`*
```JS
{
  "data": {
    "id": 1,
    "name": "user",
    "email": "user@mail.com",
    "password": "$2a$10$RH...",
    "updatedAt": "2020-12-04T03:04:54.433Z",
    "createdAt": "2020-12-04T03:04:54.433Z"
  }
}
```
#
##### ERROR *`'Validation Error'`*
- Response *`(400)`*
```JS
{
  "messages": [
    {
      "message": "Username can't be empty"
    },
    {
      "message": "Email can't be empty"
    },
    {
      "message": "Email must be formatted example@mail.com"
    },
    {
      "message": "Username can't be empty"
    },
    {
      "message": "Password must be contain minimum 6 characters"
    }
  ]
}
```
#
###### ERROR *`'Internal Server Error'`*
- Response *`(500)`*
```JS
{
    "message": 'Internal Server Error'
}
```
#
### POST /login
- Request body
```JS
  email: `user email`
  pasword: `user password`
```
#
##### SUCCESS 
- Response *(200)*
```JS
{
  "id": 1,
  "email": "user@mail.com",
  "name": "user",
  "access_token": "eyJhb..."
}
```
#
##### ERROR *`'Invalid Account'`*
- Response *(400)*
```JS
{
  "message": "Invalid account !"
}
```
#
##### ERROR *`'Invalid email / password'`*
- Response *(400)*
```JS
{
  "message": "Invalid email / password !"
}
```
#
###### ERROR *`'Internal Server Error'`*
- Response *(500)*
```JS
{
    "message": 'Internal Server Error'
}
```
#
### POST /tasks
- Request Body
```JS
{
  title : `tasks title`,
  category : `tasks category`
}
```
- Request headers
```JS
  access_token = token
```
#
##### SUCCESS
- Response *(201)*
```JS
{
  {
    "id": 25,
    "title": "mengerjakan portofolio kanban",
    "category": "backlog",
    "UserId": 3,
    "updatedAt": "2020-12-04T03:33:07.269Z",
    "createdAt": "2020-12-04T03:33:07.269Z"
  }
}
```
#
##### ERROR *`'Validation Error'`*
- Response *(400)*
```JS
{
  "messages": [
    {
      "message": "Title can't be empty"
    },
    {
      "message": "Category can't be empty"
    }
  ]
}
```
#
###### ERROR *`'Internal Server Error'`*
- Response *(500)*
```JS
{
    "message": 'Internal Server Error'
}
```
#
### GET /tasks
- Request headers
```JS
  access_token = token
```
#
##### SUCCESS
- Response *(200)*
```JS
[
  {
    "id": 25,
    "title": "mengerjakan portofolio kanban",
    "category": "todo",
    "UserId": 3,
    "createdAt": "2020-12-04T03:33:07.269Z",
    "updatedAt": "2020-12-04T03:33:07.269Z",
    "User": {
      "id": 3,
      "name": "user",
      "email": "user@mail.com",
      "password": "$2a$10$C/humfaQb/qIdrlRTaPiv.hsZn/8xhJt/ea2AQvIiciNSAnk9kHhW",
      "createdAt": "2020-12-01T12:38:28.791Z",
      "updatedAt": "2020-12-01T12:38:28.791Z"
    }
  },
  ...
]
```
#
###### ERROR *`'Internal Server Error'`*
- Response *(500)*
```JS
{
    "message": 'Internal Server Error'
}
```
#
### GET /tasks/:id
- Request Params
```JS
  id = [integer]
```
- Request headers
```JS
  access_token = token
```
#
##### SUCCESS
- Response *(200)*
```JS
{
  "id": 25,
  "title": "mengerjakan portofolio kanban",
  "category": "todo",
  "UserId": 3,
  "createdAt": "2020-12-04T03:33:07.269Z",
  "updatedAt": "2020-12-04T03:33:07.269Z"
}
```
#
##### ERROR *`'Unauthorized'`*
- Response *(401)*
``` JS
{
  "message": "You aren't authorized to access this task"
}
```
#
###### ERROR *`'Internal Server Error'`*
- Response *(500)*
```JS
{
    "message": 'Internal Server Error'
}
```
#
### PUT /tasks/:id
- Request Params
```JS
  id = [integer]
```
- Request headers
```JS
  access_token = token
```
- Request body
```JS
{
  title: `task title`,
  category: `task category`
}
```
#
##### SUCCESS
- Response *(200)*
```JS
[
  {
    "id": 25,
    "title": "semangat kerjain kanban ",
    "category": "doing",
    "UserId": 3,
    "createdAt": "2020-12-04T03:33:07.269Z",
    "updatedAt": "2020-12-04T03:49:53.467Z"
  }
]
```
#
##### ERROR *`'Unauthorized'`*
- Response *(401)*
```JS
{
  "message": "You aren't authorized to access this task"
}
```
#
###### ERROR *`'Internal Server Error'`*
- Response *(500)*
```JS
{
    "message": 'Internal Server Error'
}
```
#
### PATCH /tasks/:id
- Request Params
```JS
  id = [integer]
```
- Request headers
```JS
  access_token = token
```
- Request body
```JS
{
  category: `task category`
}
```
#
##### SUCCESS
- Response *(200)*
```JS
[
  {
    "id": 25,
    "title": "semangat kerjain kanban ",
    "category": "done",
    "UserId": 3,
    "createdAt": "2020-12-04T03:33:07.269Z",
    "updatedAt": "2020-12-04T03:58:16.889Z"
  }
]
```
#
##### ERROR *`'Unauthorized'`*
- Response *(401)*
```JS
{
  "message": "You aren't authorized to access this task"
}
```
#
###### ERROR *`'Internal Server Error'`*
- Response *(500)*
```JS
{
    "message": 'Internal Server Error'
}
```
#
### DELETE /tasks/:id
- Request Params
```JS
  id = [integer]
```
- Request headers
```JS
  access_token = token
```
#
##### SUCCESS
- Response *(200)*
```JS
{
  "message": "Successfully deleted this task !"
}
```
#
##### ERROR *`'Unauthorized'`*
- Response *(401)*
```JS
{
  "message": "You aren't authorized to access this task"
}
```
#
###### ERROR *`'Internal Server Error'`*
- Response *(500)*
```JS
{
    "message": 'Internal Server Error'
}
```
#
### POST /googleLogin
> login with google account
- Request Body
```JS
{
  googleToken = "user google token"
}
```
#
##### SUCCESS 
- Response *(200)*
```JS
{
  "id": 2,
  "email": "user@gmail.com",
  "name": "user",
  "access_token": "eyJhb..."
}
```
#
##### ERROR *`'Internal Server Error'`*
- Response *(500)*
```JS
{
  "message": 'Internal Server Error'
}
```
#
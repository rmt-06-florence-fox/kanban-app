# kanban-app

## Restful endpoints

# URL
```
Client URL : http://localhost:8080
Server URL : http://localhost:3000
```

### POST/register
>Create New User

_Request Header_
```
not needed
```

_Request Body_
```
{
    "name": "<User's name>",
    "email": "<User's email>",
    "password": "<User's password>"
}
```

_Response(201 - Created)_
```
{
    "id": 1,
    "email": "bububu@gmail.com"
}
```

_Response(400 - Bad Request)_
```
{
    "message": "Name Is Mandatory!, Please check again your email!, Password Is Mandatory!, 
}
```

_Response (500 - Internal server error)_
```
{
    "message": "Internal server error"
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

_Response(200 - Ok)_
```
{
  "access_token": "<your access token>"
}
```

_Response(400 - Bad Request)_
```
{
    "message": "Invalid Email/Password"
}
```

_Response(404- Not Found)_
```
{
    "message": "Invalid Account!"
}
```

_Response (500 - Internal server error)_
```
{
    "message": "Internal server error"
}
```

### GET/tasks
> Get all tasks

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

_Response(200 - OK)_
```
[
    {
        "id": 1,
        "title": "Futsal with friends",
        "category": "Backlog",
        "UserId": 4,
        "createdAt": "2020-12-02T11:20:20.980Z",
        "updatedAt": "2020-12-02T11:20:20.980Z",
        "User": {
            "id": 4,
            "name": "Bubu",
            "email": "bubu@gmail.com",
            "password": "$2a$10$tQ30nHVtMgsIeuDT7vB2d.u9eW2I769j2Cw/1mKY3rbwAEJVArDCG",
            "createdAt": "2020-12-01T10:27:27.559Z",
            "updatedAt": "2020-12-01T10:27:27.559Z"
        }
    },
    {
        "id": 2,
        "title": "Match Champions League di malam kamis",
        "category": "Todo",
        "UserId": 5,
        "createdAt": "2020-12-02T11:22:55.764Z",
        "updatedAt": "2020-12-02T11:22:55.764Z",
        "User": {
            "id": 5,
            "name": "Cristiano",
            "email": "nonono@gmail.com",
            "password": "$2a$10$nOPKsLbzyNYuwd1em6Wlbusz3HEYTxbhnSVjgqnW60kxgw9ETQx4K",
            "createdAt": "2020-12-02T11:21:44.776Z",
            "updatedAt": "2020-12-02T11:21:44.776Z"
        }
    }
]
```

_Response (401 - Unauthorized)_
```
{
    "message": "Please login first"
}
```

_Response (500 - Internal server error)_
```
{
    "message": "invalid token"
}
```

### POST/tasks
>Create new tasks

_Request Header_
```
{
    "access_token": "<your access token>"
}
```

_Request Body_
```
{
    "title": "<title that user wants to input>",
    "category": "<category that user wants to input>"
}
```

_Response(201 - Created)_
```
{
    "id": 9,
    "title": "Nonton Netflix marathon 1 season",
    "category": "Backlog",
    "UserId": 7,
    "updatedAt": "2020-12-02T14:03:22.009Z",
    "createdAt": "2020-12-02T14:03:22.009Z"
}
```

_Response(400 - Bad Request)_
```
{
    "message": "Title Cannot Be Empty!, Category Cannot Be Empty!"
}
```

_Response (401 - Unauthorized)_
```
{
    "message": "Please login first"
}
```

_Response (500 - Internal server error)_
```
{
    "message": "invalid token"
}
```

### PUT/tasks/:id
>Update existing tasks

_Request Header_
```
{
    "access_token": "<your access token>"
}
```

_Request Body_
```
{
    "title": "<title that user wants to update>",
}
```

_Response(200 - OK)_
```
{
    "id": 4,
    "title": "Ngetes Put",
    "category": "Done",
    "UserId": 7,
    "createdAt": "2020-12-02T11:28:16.853Z",
    "updatedAt": "2020-12-02T12:22:00.549Z"
}
```

_Response (404 - Not Found)_
```
{
    "message": "Data not found!"
}
```

_Response (400 - Bad Request)_
```
{
    "message": "Title Cannot Be Empty!"
}
```

_Response (401 - Unauthorized)_
```
{
    "message": "You are not authorized to access!, Please login first"
}
```

_Response (500 - Internal server error)_
```
{
    "message": "invalid token"
}
```

### PATCH/tasks/:id
>Update category

_Request Header_
```
{
    "access_token": "<your access token>"
}
```

_Request Body_
```
{
    "category":"<category that user wants to update>"
}
```

_Response(200 - OK)_
```
{
    "id": 5,
    "title": "Buka rumah makan padang 5 cabang",
    "category": "Doing",
    "UserId": 7,
    "createdAt": "2020-12-02T12:35:40.463Z",
    "updatedAt": "2020-12-02T14:25:16.310Z"
}
```

_Response (404 - Not Found)_
```
{
    "message": "Data not found!"
}
```

_Response (400 - Bad Request)_
```
{
    "message": "Category Cannot Be Empty!"
}
```

_Response (500 - Internal server error)_
```
{
    "message": "invalid token"
}
```

### DELETE/tasks/:id
> Delete tasks

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

_Response(200 - OK)_
```
{
    "message": "Tasks Success to Delete"
}
```

_Response (404 - Not Found)_
```
{
    "message": "Data not found!"
}
```

_Response (401 - Unauthorized)_
```
{
    "message": "You are not authorized to access!"
}
```

_Response (500 - Internal server error)_
```
{
    "message": "invalid token"
}
```
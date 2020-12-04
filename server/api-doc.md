# kanban-server

​
List of available endpoints:
​
- `POST user/register`
- `POST user/login`
- `POST user/googleLogin`

Routes below need authentication
- `GET tasks/categories`
- `GET tasks/`
- `GET tasks/:id`
- `POST tasks/`

Routes below need authentication and authorization
- `PUT tasks/:id`
- `DELETE tasks/:id`
- `PATCH tasks/:id`


### POST user/register

Request:

- data:

```json
{
  "email": "agnes@mail.com",
  "password": "qweqwe"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "id": 1,
  "email": "agnes@mail.com"
}
```
- status: 500
- body:
  ​

```json
{
  "message": "Internal Server Error"
}
```

### POST user/login

Request:

- data:

```json
{
  "email": "agnes@mail.com",
  "password": "qweqwe"
}
```

Response:

- status: 200
- body:
  ​

```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiYWduZXNwcmF2aWRhQG1haWwuY29tIiwiaWF0IjoxNjA3MDg0NTg1fQ.JnR_tz6kDmSbrvqilGxlIQnU-qOBwdtPsF61Es_cAtM"
}
```
Response:

- status: 401
- body:
  ​

```json
{
    "message": "Invalid email/password"
}
```
Response:

- status: 500
- body:
  ​

```json
{
    "message": "Internal Server Error"
}
```

### GET /tasks/categories
Request:

- headers: access_token

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiYWduZXNwcmF2aWRhQG1haWwuY29tIiwiaWF0IjoxNjA3MDg0NTg1fQ.JnR_tz6kDmSbrvqilGxlIQnU-qOBwdtPsF61Es_cAtM"
}
```


​Response:

- status: 201
- body:
  ​

```json
[
    {
        "id": 1,
        "name": "Backlog",
        "createdAt": "2020-12-01T06:49:46.210Z",
        "updatedAt": "2020-12-01T06:49:46.210Z"
    },
    {
        "id": 2,
        "name": "Todo",
        "createdAt": "2020-12-01T06:49:46.210Z",
        "updatedAt": "2020-12-01T06:49:46.210Z"
    },
    {
        "id": 3,
        "name": "Doing",
        "createdAt": "2020-12-01T06:49:46.210Z",
        "updatedAt": "2020-12-01T06:49:46.210Z"
    },
    {
        "id": 4,
        "name": "Done",
        "createdAt": "2020-12-01T06:49:46.210Z",
        "updatedAt": "2020-12-01T06:49:46.210Z"
    }
]
```
- status: 500
- body:
  ​

```json
{
    "message": "Internal Server Error"
}
```

- status: 401
- body:
  ​

```json
{
    "message": "You must login first"
}
```

### GET /tasks/

Description: Get all current logged in user tasks

Request:

- headers:

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiYWduZXNwcmF2aWRhQG1haWwuY29tIiwiaWF0IjoxNjA3MDg0NTg1fQ.JnR_tz6kDmSbrvqilGxlIQnU-qOBwdtPsF61Es_cAtM"
}
```

Response:

- status: 200
- body:
  ​

```json
[
  {
        "id": 11,
        "name": "Create edit task feature",
        "due_date": "2020-12-23",
        "createdBy": "agnes@mail.com",
        "categoryName": "Todo",
        "categoryId": 2
    },
    {
        "id": 5,
        "name": "Create edit task feature",
        "due_date": "2020-12-26",
        "createdBy": "agnes@mail.com",
        "categoryName": "Todo",
        "categoryId": 2
    },
    {
        "id": 4,
        "name": "Creating logout feature",
        "due_date": "2020-12-16",
        "createdBy": "agnes@mail.com",
        "categoryName": "Todo",
        "categoryId": 2
    },
    {
        "id": 12,
        "name": "Creating logout feature",
        "due_date": "2020-12-25",
        "createdBy": "agnes@mail.com",
        "categoryName": "Doing",
        "categoryId": 3
    }
]
```
- status: 500
- body:
  ​

```json
{
    "message": "Internal Server Error"
}
```

- status: 401
- body:
  ​

```json
{
    "message": "You must login first"
}
```

### GET /tasks/:id

Request:

- headers: access_token

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiYWduZXNwcmF2aWRhQG1haWwuY29tIiwiaWF0IjoxNjA3MDg0NTg1fQ.JnR_tz6kDmSbrvqilGxlIQnU-qOBwdtPsF61Es_cAtM"
}
```

- params: req.params.id

​Response:

- status: 200
- body:
  ​

```json
{
    "id": 3,
    "name": "Create register feature client side",
    "due_date": "2020-12-07",
    "createdBy": "agnes@mail.com",
    "categoryName": "Done",
    "categoryId": 4
}
```

- status: 500
- body:
  ​

```json
{
    "message": "Internal Server Error"
}
```

- status: 401
- body:
  ​

```json
{
    "message": "You must login first"
}
```

- status: 404
- body:
  ​

```json
{
    "message": "Error! Data not found"
}
```

### POST /tasks/

Request:

- headers: access_token

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiYWduZXNwcmF2aWRhQG1haWwuY29tIiwiaWF0IjoxNjA3MDg0NTg1fQ.JnR_tz6kDmSbrvqilGxlIQnU-qOBwdtPsF61Es_cAtM"
}
```

- data: 

```json
{
  "title": "Create register feature client side",
  "due_date": "2020-12-07",
  "UserId": 1,
  "CategoryId": 2
}
```

​Response:

- status: 201
- body:
  ​

```json
{
    "task": "Create register feature client side",
    "due_date": "2020-12-07"
}
```

- status: 500
- body:
  ​

```json
{
    "message": "Internal Server Error"
}
```

- status: 401
- body:
  ​

```json
{
    "message": "You must login first"
}
```

- status: 400
- body:
  ​

```json
{
    "message": [
        "Due date should not be empty"
    ]
}
```

### PUT /tasks/:id

Request:

- headers: access_token

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiYWduZXNwcmF2aWRhQG1haWwuY29tIiwiaWF0IjoxNjA3MDg0NTg1fQ.JnR_tz6kDmSbrvqilGxlIQnU-qOBwdtPsF61Es_cAtM"
}
```

- data: 

```json
{
  "title": "Create register feature client side",
  "due_date": "2020-12-07",
  "UserId": 1,
  "CategoryId": 2
}
```
-params: req.params.id

​Response:

- status: 200
- body:
  ​

```json
{
    "id": 3,
    "Title": "Create register feature",
    "due_date": "2020-11-10",
    "CategoryId": 2,
    "UserId": 1,
    "createdAt": "2020-12-02T15:31:40.488Z",
    "updatedAt": "2020-12-04T12:48:04.735Z"
}
```

- status: 500
- body:
  ​

```json
{
    "message": "Internal Server Error"
}
```

- status: 401
- body:
  ​

```json
{
    "message": "You must login first"
}

{
    "message": "You are not authorized to access this page"
}
```

- status: 404
- body:
  ​

```json
{
    "message": "Error! Data not found"
}
```

### DELETE /tasks/:id

Request:

- headers: access_token

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiYWduZXNwcmF2aWRhQG1haWwuY29tIiwiaWF0IjoxNjA3MDg0NTg1fQ.JnR_tz6kDmSbrvqilGxlIQnU-qOBwdtPsF61Es_cAtM"
}
```

-params: req.params.id

​Response:

- status: 200
- body:
  ​

```json
{
    "message": "Task is successfully deleted"
}
```

- status: 500
- body:
  ​

```json
{
    "message": "Internal Server Error"
}
```

- status: 401
- body:
  ​

```json
{
    "message": "You must login first"
}

{
    "message": "You are not authorized to access this page"
}
```

- status: 404
- body:
  ​

```json
{
    "message": "Error! Data not found"
}
```

### PATCH /tasks/:id

Request:

- headers: access_token

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiYWduZXNwcmF2aWRhQG1haWwuY29tIiwiaWF0IjoxNjA3MDg0NTg1fQ.JnR_tz6kDmSbrvqilGxlIQnU-qOBwdtPsF61Es_cAtM"
}
```

-params: req.params.id

-data

```json
{
  "CategoryId": 2
}
```

​Response:

- status: 200
- body:
  ​

```json
{
    "id": 4,
    "Title": "Creating logout feature",
    "due_date": "2020-12-16",
    "CategoryId": 3,
    "UserId": 1,
    "createdAt": "2020-12-02T16:47:09.243Z",
    "updatedAt": "2020-12-04T12:57:03.690Z"
}
```

- status: 500
- body:
  ​

```json
{
    "message": "Internal Server Error"
}
```

- status: 401
- body:
  ​

```json
{
    "message": "You must login first"
}

{
    "message": "You are not authorized to access this page"
}
```

- status: 404
- body:
  ​

```json
{
    "message": "Error! Data not found"
}
```



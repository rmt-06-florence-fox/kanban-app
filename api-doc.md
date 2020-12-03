# Kanban-Apps

# API-Documentation with Postman

[Link to Postman API-documentation](https://documenter.getpostman.com/view/13589681/TVmLCJ7H)

#### \*Updated 03 Dec 2020, 12:14AM GMT+07:00

#### \*API-Doc with MD on Progress

---

# API-Documentation with Markdown

## POST /register

_Request Body_

```
{
    (REQUIRED) "email": "test@mail.com",
    (REQUIRED) "password": "test"
}
```

_Response (201 - Created)_

```
{
    "id": 1,
    "email": "test@mail.com"
}
```

_Response (400 - Bad Request - Email must unique)_

```
{
    "message": "This Email has been Taken, try another one"
}
```

_Response (400 - Bad Request - Email & Password cannot be empty)_

```
{
    "message": [
      "User.email cannot be null",
      "User.password cannot be null"
    ]
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "Internal Server Error"
}
```

---

## POST /login

_Request Body_

```
{,
    (REQUIRED) "email": "test@mail.com",
    (REQUIRED) "password": "test"
}
```

_Response (200 - Ok)_

```
{
    "access_token": "/token from login/"
}
```

_Response (400 - Invalid Account or Password)_

```
{
    "message": "Invalid Account Or Password"
}
```

_Response (400 - Email or Password cannot be empty)_

```
{
    "message": "Email or Password Cannot be Empty"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "Internal Server Error"
}
```

---

## POST /googleLogin

_Request Body_

```
{,
    (REQUIRED) "googleToken": "/Token from Google/"
}
```

_Response (200 - Ok)_

```
{
    "access_token": "/token from login/"
}
```

_Response (401 - No Google Token)_

```
{
    "message": "Unauthorized User - No Google Token"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "Internal Server Error"
}
```

---

## POST /tasks

_Request Headers_

```
{
    (REQUIRED) "access_token": "/token from login/"
}
```

_Request Body_

```
{
    (REQUIRED) "title": "Contoh Judul",
    (REQUIRED) "description": "Contoh Deskripsi"
}
```

_Response (201 - Created)_

```
{
    "id": 1,
    "title": "Contoh Judul",
    "description": "Contoh Deskripsi",
    "UserId": 1,
    "updatedAt": "2020-12-01T09:19:36.583Z",
    "createdAt": "2020-12-01T09:19:36.583Z",
    "category": "backlog"
}
```

_Response (400 - Bad Request)_

```
{
    "message": [
      "Task.title cannot be null",
      "Task.description cannot be null"
    ]
}
```

_Response (401 - Unauthorized - No Access Token)_

```
{
    "message": "Please Login First"
}
```

_Response (404 - Not Found - Invalid Access Token)_

```
{
    "message": "Invalid Account Or Password"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "Internal Server Error"
}
```

---

## GET /tasks

_Request Headers_

```
{
    (REQUIRED) "access_token": "/token from login/"
}
```

_Response (200 - Ok)_

```
[
  {
    "id": 1,
    "title": "Ganti Judul",
    "description": "Ini juga ganti",
    "category": "backlog",
    "UserId": 1,
    "createdAt": "2020-11-30T14:05:36.610Z",
    "updatedAt": "2020-12-01T09:10:38.915Z"
  },
  {
    "id": 3,
    "title": "Judul 2",
    "description": "Ini deskripsi",
    "category": "backlog",
    "UserId": 2,
    "createdAt": "2020-12-01T09:19:36.583Z",
    "updatedAt": "2020-12-01T09:19:36.583Z"
  },
  {
    "id": 4,
    "title": "Judul 2",
    "description": Contoh Judul 2,
    "category": "backlog",
    "UserId": 2,
    "createdAt": "2020-12-01T09:19:51.774Z",
    "updatedAt": "2020-12-01T09:19:51.774Z"
  }
]
```

_Response (401 - No Access Token)_

```
{
    "message": "Please Login First"
}
```

_Response (404 - Invalid Access Token)_

```
{
    "message": "Invalid Account or Password"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "Internal Server Error"
}
```

---

## GET /tasks/:id

_Request Headers_

```
{
    (REQUIRED) "access_token": "/token from login/"
}
```

_Response (200 - Ok)_

```
{
    "id": 1,
    "title": "Ganti Judul",
    "description": "Ini juga ganti",
    "category": "backlog",
    "UserId": 1,
    "createdAt": "2020-11-30T14:05:36.610Z",
    "updatedAt": "2020-12-01T09:10:38.915Z"
}
```

_Response (401 - No Access Token)_

```
{
    "message": "Please Login First"
}
```

_Response (404 - Invalid Access Token)_

```
{
    "message": "Invalid Account or Password"
}
```

_Response (404 - Task Not Found)_

```
{
    "message": "Task Not Found"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "Internal Server Error"
}
```

---

## PATCH /tasks/:id

_Request Headers_

```
{
    (REQUIRED) "access_token": "/token from login/"
}
```

_Request Body_

```
{
    (REQUIRED) "category": "done"
}
```

_Response (200 - Ok)_

```
{
    "id": 1,
    "title": "Ganti Judul",
    "description": "Ini juga ganti",
    "category": "done",
    "UserId": 1,
    "createdAt": "2020-11-30T14:05:36.610Z",
    "updatedAt": "2020-12-01T09:25:03.687Z"
}
```

_Response (401 - Unauthorized)_

```
{
    "message": "You dont have authorization for this Task"
}

```

_Response (401 - Unauthorized - No Access Token)_

```
{
    "message": "Please Login First"
}
```

_Response (400 - Bad Request)_

```
{
    "message": "Category Cannot be Empty"
}
```

_Response (404 - Task Not Found)_

```
{
    "message": "Task Not Found"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "Internal Server Error"
}
```

---

## PUT /tasks/:id

_Request Headers_

```
{
    (REQUIRED) "access_token": "/token from login/"
}
```

_Request Body_

```
{
    (REQUIRED) "title": "Ganti Judul",
    (REQUIRED) "description": "Ini juga ganti",
    (REQUIRED) "category": "done"
}
```

_Response (200 - Ok)_

```
{
    "id": 1,
    "title": "Ganti Judul",
    "description": "Ini juga ganti lagi",
    "category": "done",
    "UserId": 1,
    "createdAt": "2020-11-30T14:05:36.610Z",
    "updatedAt": "2020-12-03T04:40:17.648Z"
}
```

_Response (401 - Unauthorized)_

```
{
    "message": "You dont have authorization for this Task"
}
```

_Response (401 - Unauthorized - No Access Token)_

```
{
    "message": "Please Login First"
}
```

_Response (404 - Task Not Found)_

```
{
    "message": "Task Not Found"
}
```

_Response (404 - Invalid Access Token)_

```
{
    "message": "Invalid Account or Password"
}
```

_Response (400 - Bad Request)_

```
{
    "message": [
      "Title Cannot be Empty",
      "Description Cannot be Empty",
      "Category Cannot be Empty"
    ]
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "Internal Server Error"
}
```

---

## DELETE /tasks/:id

_Request Headers_

```
{,
    (REQUIRED) "access_token": "/token from login/"
}
```

_Response (200 - Ok)_

```
{
    "message": "Task Success To Delete"
}
```

_Response (404 - Task Not Found)_

```
{
    "message": "Task Not Found"
}
```

_Response (401 - Unauthorized)_

```
{
    "message": "You dont have authorization for this Task"
}
```

_Response (401 - Unauthorized - No Access Token)_

```
{
    "message": "Please Login First"
}
```

_Response (404 - Invalid Access Token)_

```
{
    "message": "Invalid Account Or Password"
}
```

_Response (500 - Internal Server Error)_

```
{
    "message": "Internal Server Error"
}
```

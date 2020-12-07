# KANBANKU App

## **Register User**

Register user on server.

- **URL**

  /register

- **Method:**

  `POST`

- **Request Headers**

  None

- **URL Params**

  None

- **Data Params**

  **Required:**

  `email=[string]`
  `password=[string]`

- **Success Response:**

  - **Code:** 201 CREATED <br />
    **Content:**
    `{ 
        "id": 1, 
        "email": "bima@mail.com" 
    }`

- **Error Response:**

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal server error!" }`

###############################################################



## **Login User**

Login user on server.

- **URL**

  /login

- **Method:**

  `POST`

- **Request Headers**

  None

- **URL Params**

  None

- **Data Params**

  **Required:**

  `email=[string]`
  `password=[string]`

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**
    ```
    {
      "access_token": "<your access token>"
    }
    ```

- **Error Response:**

  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg : "Invalid email or password!" }`

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal server error!" }`

###############################################################


## **Add Task**

Add Task.

- **URL**

  /tasks

- **Method:**

  `POST`

- **Request Headers**

  ```
  {
   "access_token": "<your access token>"
  }
  ```

- **URL Params**

  None

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**
    ```
    {
    "id": 55,
    "title": "Cuci motor ",
    "category": "TODO",
    "UserId": 1,
    "updatedAt": "2020-12-04T11:18:37.988Z",
    "createdAt": "2020-12-04T11:18:37.988Z"
}
    ```

- **Error Response:**

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ msg : "title and category can not be empty!" }`

  OR
  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg : "Invalid email or password!" }`

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal server error!" }`

###############################################################


- **GET Task**

> see all the Tasks

- **URL**

  /tasks/:id

- **Method:**

  `GET`

- **_Request Header_**

```
{
  "accesstoken": "<your access token>"
}
```

- **_Request Body_**

```
not needed
```

- **_Response (200)_**

```
[
    {
        "id": 1,
        "title": "tes",
        "category": "testing",
        "UserId": 1,
        "createdAt": "2020-12-02T16:46:55.808Z",
        "updatedAt": "2020-12-02T16:46:55.808Z",
        "User": {
            "id": 1,
            "email": "bima@mail.com",
            "password": "$2a$10$lMiOThjKWfD9fhPR4Ma60.qK74xhiEmD4KO8yK1O9Lhpu.8VC1oVy",
            "createdAt": "2020-12-01T01:38:24.225Z",
            "updatedAt": "2020-12-01T01:38:24.225Z"
        }
    },
    {
        "id": 46,
        "title": "nonton tv",
        "category": "BACKLOG",
        "UserId": 1,
        "createdAt": "2020-12-04T00:19:13.619Z",
        "updatedAt": "2020-12-04T00:19:13.619Z",
        "User": {
            "id": 1,
            "email": "bima@mail.com",
            "password": "$2a$10$lMiOThjKWfD9fhPR4Ma60.qK74xhiEmD4KO8yK1O9Lhpu.8VC1oVy",
            "createdAt": "2020-12-01T01:38:24.225Z",
            "updatedAt": "2020-12-01T01:38:24.225Z"
        }
    }
]
```

- **_Response (500 - Internal server error)_**

```
{
  "errors": "internal server error"
}
```

###############################################################

- **EDIT Task by id**

> Edit a specific Task by id

- **URL**

  /tasks/:id

- **Method:**

  `PUT`

- **_Request Header_**

```
{
  "accesstoken": "<your access token>"
}
```

- **_Request Params_**

```
None
```

- **_Response (200)_**

```

{
  "id": 1,
  "title": "tes",
  "category": "testing",
  "UserId": 1,
  "createdAt": "2020-12-02T16:46:55.808Z",
  "updatedAt": "2020-12-02T16:46:55.808Z",
  "User": {
      "id": 1,
      "email": "bima@mail.com",
      "password": "$2a$10$lMiOThjKWfD9fhPR4Ma60.qK74xhiEmD4KO8yK1O9Lhpu.8VC1oVy",
      "createdAt": "2020-12-01T01:38:24.225Z",
      "updatedAt": "2020-12-01T01:38:24.225Z"
  }
},
```

- **Error Response:**

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ msg : "it is not yours, you do not have authorization!" }`

  OR
  - **Code:** 404 BAD REQUEST <br />
    **Content:** `{ msg : "Task Not Found!" }`

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal server error!" }`


###############################################################

## **DELETE Tasks **

delete a tasks.

- **URL**

  /tasks/:id

- **Method:**

  `DELETE`

- **Request Headers**

  None

- **URL Params**

  None

- **Success Response:**

  - **Code:** 201 CREATED <br />
    **Content:**
    {
    "deleted success"
    }

- **Error Response:**

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ msg : "it is not yours, you do not have authorization!" }`

  OR
  - **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg : "Invalid email or password!" }`

  OR

  - **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "Internal server error!" }`

###############################################################

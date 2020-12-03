# Kanban App

* **URL**
    /tasks
    
* **Method:**
    `POST`

*  **URL Params**

   **Required:**
    None

*  **HEADERS**
    {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtb3phcnRAbWFpbC5jb20iLCJpYXQiOjE2MDYyMDQ4MjJ9.uNDT6RdhmGOMf0jxd3NpQUjlzjPiMVUow81TCo9-rmc"
    }


* **Data Params**

    None

* **Success Response:**
    *   **Code:** 201 
        **Content:** {
            "id": 7,
            "title": "memancing kemakmuran ",
            "CategoryId": "1",
            "UserId": "1",
            "updatedAt": "2020-11-23T12:21:44.420Z",
            "createdAt": "2020-11-23T12:21:44.420Z"
        }

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR 
    **Content:** {"message": "Internal Server Error"}



* **URL**
    /tasks
    
* **Method:**
    `GET`

*  **URL Params**

   **Required:**
    None

*  **HEADERS**
    {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtb3phcnRAbWFpbC5jb20iLCJpYXQiOjE2MDYyMDQ4MjJ9.uNDT6RdhmGOMf0jxd3NpQUjlzjPiMVUow81TCo9-rmc"
    }


* **Data Params**

    None

* **Success Response:**
    *   **Code:** 201 
        **Content:** {
            
            
            {
            "id": 7,
            "title": "memancing kemakmuran ",
            "CategoryId": "1",
            "UserId": "1",
            "updatedAt": "2020-11-23T12:21:44.420Z",
            "createdAt": "2020-11-23T12:21:44.420Z"

            },
            {
            "id": 8,
            "title": "memancing keributan ",
            "CategoryId": "2",
            "UserId": "1",
            "updatedAt": "2020-11-23T12:21:44.420Z",
            "createdAt": "2020-11-23T12:21:44.420Z"

            },
            {
            "id": 9,
            "title": "memancing kebaikan ",
            "CategoryId": "3",
            "UserId": "1",
            "updatedAt": "2020-11-23T12:21:44.420Z",
            "createdAt": "2020-11-23T12:21:44.420Z"

            }
        }

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR 
    **Content:** {"message": "Internal Server Error"}


* **URL**
    /tasks/:id
    
* **Method:**
    `PUT`

*  **URL Params**

   **Required:**
    `id=[integer]`

*  **HEADERS**
    {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtb3phcnRAbWFpbC5jb20iLCJpYXQiOjE2MDYyMDQ4MjJ9.uNDT6RdhmGOMf0jxd3NpQUjlzjPiMVUow81TCo9-rmc"
    }


* **Data Params**

    None

* **Success Response:**
    *   **Code:** 201 
        **Content:** {
            "id": 7,
            "title": "meraih kemakmuran ",
            "CategoryId": "2",
            "UserId": "1",
            "updatedAt": "2020-11-23T12:21:44.420Z",
            "createdAt": "2020-11-23T12:21:44.420Z"
        }

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR 
    **Content:** {"message": "Internal Server Error"}

    * **URL**
    /login
    
* **Method:**
    `POST`

*  **URL Params**

   **Required:**

*  **HEADERS**


* **Request Data**
```json
    {
    "email": "string",
    "password": "string"
    }
```
    None

* **Success Response:**
    *   **Code:** 201 
        **Content:** {
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtb3phcnRAbWFpbC5jb20iLCJpYXQiOjE2MDYyMDQ4MjJ9.uNDT6RdhmGOMf0jxd3NpQUjlzjPiMVUow81TCo9-rmc"
        }

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR 
    **Content:** {"message": "Internal Server Error"}


        * **URL**
    /register
    
* **Method:**
    `POST`

*  **URL Params**

   **Required:**

*  **HEADERS**


* **Request Data**
```json
    {
    "email": "string",
    "password": "string"
    }
```
    None

* **Success Response:**
    *   **Code:** 201 
        **Content:** 
        user: {
            email: string,
            password: string
        }

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR 
    **Content:** {"message": "Internal Server Error"}



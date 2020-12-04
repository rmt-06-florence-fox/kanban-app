# kanban-app

## Demo App
* [Client](https://jarooda-kanban-app.web.app/)
* [Server](https://jarooda-kanban-db.herokuapp.com/)

## Api Documentation
* [Api Doc](https://documenter.getpostman.com/view/13590441/TVmPAx6L)

**User - Register**
----

* **URL**

    /register

* **Method:**

    `POST`
  
*  **URL Params**

    None

* **Data Params**

    **Required:**
 
    `email=[string]`<br />
    `password=[string]`


* **Success Response:**

    * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
        "id": 1,
        "email": "contoh@mail.com"
    }
    ```
 
* **Error Response:**

    * **Code:** 400 Bad Request <br />
    **Content:** `["Email Required","Password Required"]`

    OR

    * **Code:** 400 Bad Request <br />
    **Content:** `{ "errors": "Email Already Registered" }`

    OR

    * **Code:** 400 Bad Request <br />
    **Content:** `[ "Password Must More Than 6 Characters" ]`

    OR

    * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message": "Internal Server Error" }`


**User - Login**
---
* **URL**

    /login

* **Method:**

    `POST`
  
*  **URL Params**

    None

* **Data Params**

    **Required:**
 
    `email=[string]`<br />
    `password=[string]`


* **Success Response:**

    * **Code:** 200 <br />
    **Content:** 
    ```javascript
    { 
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJjb250b2hAbWFpbC5jb20iLCJpYXQiOjE2MDcwODIyMjR9.-Rxzo2WXnJ67UtmJe7CHQNFysjxo2HGDR7RFXPTShys", 
        "email": "contoh@mail.com" 
    }
    ```
 
* **Error Response:**

    * **Code:** 400 Bad Request <br />
    **Content:** `{"message": "Wrong Email / Password"}`

    OR

    * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message": "Internal Server Error" }`

**User - Google Login**
---
* **URL**

    /googleLogin

* **Method:**

    `POST`
  
*  **URL Params**

    None

* **Data Params**

    **Required:**
 
    `google_token=[string]`


* **Success Response:**

    * **Code:** 200 <br />
    **Content:** 
    ```javascript
    { 
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJlZG1vbmRkYW50ZXM0NTFAZ21haWwuY29tIiwiaWF0IjoxNjA3MDgyNDA2fQ.92uIaiR70btelVS8pb_DZFR1CZYt1JTtBUVGxt7hLRU", 
        "email": "edmonddantes451@gmail.com" 
    }
    ```
 
* **Error Response:**

    * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message": "Internal Server Error" }`


**Task - Fetch Data**
---
* **URL**

    /tasks

* **Method:**

    `GET`
  
*  **URL Params**

    None

* **Data Params**

    **Required Header:**
 
    `access_token=[string]`


* **Success Response:**

    * **Code:** 200 <br />
    **Content:** 
    ```javascript {
  "tasks": [
    {
      "id": 3,
      "title": "Edmond",
      "category": "Completed",
      "UserId": 3,
      "createdAt": "2020-12-04T11:53:42.612Z",
      "updatedAt": "2020-12-04T11:53:42.612Z",
      "UserEmail": "edmonddantes451@gmail.com"
    },
    {
      "id": 2,
      "title": "Edmond",
      "category": "Todo",
      "UserId": 3,
      "createdAt": "2020-12-04T11:53:33.250Z",
      "updatedAt": "2020-12-04T11:53:33.250Z",
      "UserEmail": "edmonddantes451@gmail.com"
    },
    {
      "id": 1,
      "title": "contoh",
      "category": "Backlog",
      "UserId": 1,
      "createdAt": "2020-12-04T11:48:50.006Z",
      "updatedAt": "2020-12-04T11:48:50.006Z",
      "UserEmail": "contoh@mail.com"
    }
  ]
}
    ```
 
* **Error Response:**

    * **Code:** 401 Unauthorized <br />
    **Content:** `{"message": "Please Login First"}`

    OR

    * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message": "Internal Server Error" }`

**Task - Add Data**
---
* **URL**

    /tasks

* **Method:**

    `POST`
  
*  **URL Params**

    None

* **Data Params**

    **Required Header:**
 
    `access_token=[string]`

    **Required Body:**
 
    `title=[string]`<br />
    `category=[string]`


* **Success Response:**

    * **Code:** 200 <br />
    **Content:** 
    ```javascript 
    {
    "task": {
        "id": 1,
        "title": "contoh",
        "category": "Backlog",
        "UserId": 1,
        "updatedAt": "2020-12-04T11:48:50.006Z",
        "createdAt": "2020-12-04T11:48:50.006Z"
        }
    }
    ```
 
* **Error Response:**

    * **Code:** 401 Unauthorized <br />
    **Content:** `{"message": "Please Login First"}`

    OR

    * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message": "Internal Server Error" }`

**Task - Edit Data**
---
* **URL**

    /tasks/:id

* **Method:**

    `PUT`
  
*  **URL Params**

    `id=[integer]`

* **Data Params**

    **Required Header:**
 
    `access_token=[string]`

    **Required Body:**
 
    `title=[string]`<br />
    `category=[string]`


* **Success Response:**

    * **Code:** 200 <br />
    **Content:** 
    ```javascript {
    "task": {
        "id": 1,
        "title": "Mengganti Todo Contoh",
        "category": "Done",
        "UserId": 1,
        "createdAt": "2020-12-04T11:48:50.006Z",
        "updatedAt": "2020-12-04T11:59:40.542Z"
        }
    }
    ```
 
* **Error Response:**

    * **Code:** 404 Not Found <br />
    **Content:** `{"message": "Error Not Found"}`

    OR

    * **Code:** 401 Unauthorized <br />
    **Content:** `{"message": "Please Login First"}`

    OR

    * **Code:** 401 Unauthorized <br />
    **Content:** `{"message": "You're Not Authorized To Edit This"}`

    OR

    * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message": "Internal Server Error" }`

**Task - Patch Data**
---
* **URL**

    /tasks/:id

* **Method:**

    `PATCH`
  
*  **URL Params**

    `id=[integer]`

* **Data Params**

    **Required Header:**
 
    `access_token=[string]`

    **Required Body:**
 
    `category=[string]`


* **Success Response:**

    * **Code:** 200 <br />
    **Content:** 
    ```javascript 
    {
  "task": {
        "id": 1,
        "title": "contoh",
        "category": "Done",
        "UserId": 1,
        "createdAt": "2020-12-04T11:48:50.006Z",
        "updatedAt": "2020-12-04T11:56:56.887Z"
        }
    }
    ```
 
* **Error Response:**

    * **Code:** 404 Not Found <br />
    **Content:** `{"message": "Error Not Found"}`

    OR

    * **Code:** 401 Unauthorized <br />
    **Content:** `{"message": "Please Login First"}`

    OR

    * **Code:** 401 Unauthorized <br />
    **Content:** `{"message": "You're Not Authorized To Edit This"}`

    OR

    * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message": "Internal Server Error" }`


**Task - Delete Data**
---
* **URL**

    /tasks/:id

* **Method:**

    `DELETE`
  
*  **URL Params**

    `id=[integer]`

* **Data Params**

    **Required Header:**
 
    `access_token=[string]`

* **Success Response:**

    * **Code:** 200 <br />
    **Content:** 
    ```javascript 
    {
        "message": "Task Deleted Successfully"
    }
    ```
 
* **Error Response:**

    * **Code:** 404 Not Found <br />
    **Content:** `{"message": "Error Not Found"}`

    OR

    * **Code:** 401 Unauthorized <br />
    **Content:** `{"message": "Please Login First"}`

    OR

    * **Code:** 401 Unauthorized <br />
    **Content:** `{"message": "You're Not Authorized To Edit This"}`

    OR

    * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message": "Internal Server Error" }`

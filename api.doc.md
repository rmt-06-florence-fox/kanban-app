RESTfull API Doc

**Register User**
----
  Returns user to database.

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**

  None


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{"name" : "efrizal", "email" : "efrizal@gmail.com", "password" :  "$2a$08$vueqmQNrAvPlSGV5t180aOEPPYr9i0CKg..gNlsDroc380bb9z.eC" }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `[{ "message": "email is required" }, { "message" : "input must be a valid email address" },{ "message": "password is required" }, { "message" : "email is already used" }]`

  OR

  * **Code:** 500 <br />
    **Content:** `{ "message": "Internal server error" }`

<!-- --------------------------------------------- -->

**Login User**
----
  -

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**

  None


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJlZnJpemFsc3kwNDI0QGdtYWlsLmNvbSIsImlhdCI6MTYwNjMwNzYzMn0._6oN91LbjFUQomwt-9QxAcnUzXPY62UFUHKlB2eTeco"}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `[{ "message": "email is required" }, { "message": "password is required" }, { "message" : "Data is missing/Access Denied" }]`

  OR

  * **Code:** 500 <br />
    **Content:** `{ "message": "Internal server error" }`

    <!-- --------------------------------------------- -->

**Show All Tasks**
----
  show all databases belong to user while logged in

* **URL**

  /tasks

* **Method:**

  `GET`
  
*  **URL Params**

  None

* **Header Params**

  **Required:**
 
   `access_token=[string]`


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{"task": []}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "message": "Data is missing/Access Denied" }`

  OR

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ "message": "Access denied, please login first" }`

  OR

  * **Code:** 500 <br />
    **Content:** `{ "message": "Internal server error" }`


**Create Tasks**
----
  Create belong to user while logged in

* **URL**

  /tasks

* **Method:**

  `POST`
  
*  **URL Params**

  None

* **Header Params**

  **Required:**
 
   `access_token=[string]`


* **Data Params**

  **Required:**
 
   `title=[string]`
   `category=[string]`


* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{"task": { "id": 13, "title": "Take a rest", category:"Backlog"}}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `[{ "message": "title is required"}]`

  OR

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ "message": "Access denied, please login first" }`

  OR

  * **Code:** 500 <br />
    **Content:** `{ "message": "Internal server error" }`



**Get One Tasks**
----
  Show one data belong to user while logged in

* **URL**

  /tasks/:id

* **Method:**

  `GET`
  
*  **URL Params**

  `id=[integer]`

* **Header Params**

  **Required:**
 
   `access_token=[string]`


* **Data Params**
 
  None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{"task": { "id": 13, "title": "Take a rest", category:"Backlog"}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "message": "Data is missing/Access Denied" }`

  OR

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ "message": "Access denied, please login first" }`

  OR

  * **Code:** 500 <br />
    **Content:** `{ "message": "Internal server error" }`



**Update Tasks**
----
  Update task data belong to user while logged in

* **URL**

  /tasks/:id

* **Method:**

  `PUT`
  
*  **URL Params**

  `id=[integer]`

* **Header Params**

  **Required:**
 
   `access_token=[string]`


* **Data Params**

  **Required:**
 
   `title=[string]`
   `category=[string]`


* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{"task": { "id": 13, "title": "Take a rest", category:"Backlog"}}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `[{ "message": "title is required"}]`

  OR

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ "message": "Access denied, please login first" }`

  OR

  * **Code:** 500 <br />
    **Content:** `{ "message": "Internal server error" }`



    **Delete Tasks**
----
  Delete belong to user while logged in

* **URL**

  /tasks/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

  `id=[integer]`

* **Header Params**

  **Required:**
 
   `access_token=[string]`


* **Data Params**

  None


* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `{message: 'task succes to delete'}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "message": "Data is missing/Access Denied" }`

  OR

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ "message": "Access denied, please login first" }`

  OR

  * **Code:** 500 <br />
    **Content:** `{ "message": "Internal server error" }`

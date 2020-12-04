**Register User**
----
  Returns json data about a single user that has been created.

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   

* **Data Params**

   `email=[string]`
   `password=string`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
    ```json
      {
         "data": {
            "id": 10,
            "email": "test100@gmail.com",
            "password": "$2a$10$YZ5wyu9vdGEVj.4w/IxZ1OJW.3kK6t621iNV.VnPPA7OSojg7/X4i",
            "updatedAt": "2020-12-04T13:21:14.844Z",
            "createdAt": "2020-12-04T13:21:14.844Z"
      }
    ```
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** 
      ```json 
         {
            "message": "Email Already In Use!"
         }
      ```
      OR
      ```json
         {
            "message": "Password must be at least 6 characters"
         }
      ```

  OR

  * **Code:** 500 UNAUTHORIZED <br />
    **Content:**
      ```json
         {
            "message":"Server Error"
         }
      ```




**Login User**
----
  Returns json data of an access token and userId.

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   

* **Data Params**

   `email=[string]`
   `password=string`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```json
      {
         "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoidGVzdDEwMEBnbWFpbC5jb20iLCJpYXQiOjE2MDcwODg0ODd9.1lCnIyabNMOnkKxZhNWbL0E3L8wTUyx4ZZlYrDxPzEw",
         "userId": 10
      }
    ```
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** 
      ```json 
         {
            "message": "Wrong email/password"
         }
      ```
      OR
      ```json
         {
            "message": "Password must be at least 6 characters"
         }
      ```

  OR

  * **Code:** 500 UNAUTHORIZED <br />
    **Content:**
      ```json
         {
            "message":"Server Error"
         }
      ```


**Google Login User**
----
  Returns json data about a single user that has been created.

* **URL**

  /googleLogin

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   

* **Data Params**

   `googleToken=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```json
      {
         "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoidGVzdDEwMEBnbWFpbC5jb20iLCJpYXQiOjE2MDcwODg0ODd9.1lCnIyabNMOnkKxZhNWbL0E3L8wTUyx4ZZlYrDxPzEw",
         "userId": 10
      }
    ```
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** 
      ```json 
         {
            "message": "Wrong email/password"
         }
      ```
      OR
      ```json
         {
            "message": "Password must be at least 6 characters"
         }
      ```

  OR

  * **Code:** 500 UNAUTHORIZED <br />
    **Content:**
      ```json
         {
            "message":"Server Error"
         }
      ```


**Fetch Tasks**
----
  Returns json data of all tasks.

* **URL**

  /tasks

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 

* **Headers**
   **Required:**
   `access_token=[string]`

* **Data Params**


* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
    ```json
      {  
         "data": [
            {
                  "id": 4,
                  "title": "coding2",
                  "CategoryId": 2,
                  "UserId": 1,
                  "createdAt": "2020-12-01T06:10:32.375Z",
                  "updatedAt": "2020-12-01T06:10:32.375Z"
            },
            {
                  "id": 5,
                  "title": "coding2",
                  "CategoryId": 2,
                  "UserId": 1,
                  "createdAt": "2020-12-01T06:10:46.078Z",
                  "updatedAt": "2020-12-01T06:10:46.078Z"
            },
            {
                  "id": 6,
                  "title": "dari sini",
                  "CategoryId": 2,
                  "UserId": 1,
                  "createdAt": "2020-12-02T22:46:13.164Z",
                  "updatedAt": "2020-12-02T22:46:13.164Z"
            },
         ]
      }
    ```
 
* **Error Response:**

  * **Code:** 401 <br />
    **Content:** 
      ```json 
         {
            "message": "You must login first"
         }
      ```
  OR

  * **Code:** 500 UNAUTHORIZED <br />
    **Content:**
      ```json
         {
            "message":"Server Error"
         }
      ```

**Create Task**
----
  Returns json data of created task.

* **URL**

  /tasks

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 

* **Headers**
   **Required:**
   `access_token=[string]`

* **Data Params**
   `title=[string]`
   `CategoryId=[integer]`
   `UserId=[integer]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
    ```json
      {  
         "data": {
               "id": 4,
               "title": "coding2",
               "CategoryId": 2,
               "UserId": 1,
               "createdAt": "2020-12-01T06:10:32.375Z",
               "updatedAt": "2020-12-01T06:10:32.375Z"
            },       
      }
    ```
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** 
      ```json 
         {
            "message": "You must login first"
         }
      ```
      OR
      ```json
         {
            "message": "Description must be at least 10 characters"
         }
      ```
  OR

  * **Code:** 500 UNAUTHORIZED <br />
    **Content:**
      ```json
         {
            "message":"Server Error"
         }
      ```

**Delete Task**
----
  Returns json data of deleted task.

* **URL**

  /tasks/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
   `id=[integer]`

* **Headers**
   **Required:**
   `access_token=[string]`

* **Data Params**
   `title=[string]`
   `CategoryId=[integer]`
   `UserId=[integer]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
    ```json
      {  
         "data": {
               "id": 4,
               "title": "coding2",
               "CategoryId": 2,
               "UserId": 1,
               "createdAt": "2020-12-01T06:10:32.375Z",
               "updatedAt": "2020-12-01T06:10:32.375Z"
         },
         "message":"Resource Deleted Successfully"       
      }
    ```
 
* **Error Response:**

  * **Code:** 401 <br />
    **Content:** 
      ```json 
         {
            "message": "You must login first"
         }
      ```
  OR

  * **Code:** 404 <br />
    **Content:** 
      ```json 
         {
            "message": "Not Found"
         }
      ```
   
   OR
  * **Code:** 500 UNAUTHORIZED <br />
    **Content:**
      ```json
         {
            "message":"Server Error"
         }
      ```


**Update Task**
----
  Returns json data of updated task.

* **URL**

  /tasks/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
   `id=[integer]`

* **Headers**
   **Required:**
   `access_token=[string]`

* **Data Params**
   `title=[string]`
   `CategoryId=[integer]`
   `UserId=[integer]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
    ```json
      {  
         "data": {
               "id": 4,
               "title": "coding2",
               "CategoryId": 2,
               "UserId": 1,
               "createdAt": "2020-12-01T06:10:32.375Z",
               "updatedAt": "2020-12-01T06:10:32.375Z"
         },
      }
    ```
 
* **Error Response:**

  * **Code:** 401 <br />
    **Content:** 
      ```json 
         {
            "message": "You must login first"
         }
      ```
  OR

  * **Code:** 404 <br />
    **Content:** 
      ```json 
         {
            "message": "Not Found"
         }
      ```
   
   OR
  * **Code:** 500 UNAUTHORIZED <br />
    **Content:**
      ```json
         {
            "message":"Server Error"
         }
      ```






----
  Returns json data about a single user that has been created.

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   

* **Data Params**

   `email=[string]`
   `password=string`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
    ```json
      {
         "data": {
            "id": 10,
            "email": "test100@gmail.com",
            "password": "$2a$10$YZ5wyu9vdGEVj.4w/IxZ1OJW.3kK6t621iNV.VnPPA7OSojg7/X4i",
            "updatedAt": "2020-12-04T13:21:14.844Z",
            "createdAt": "2020-12-04T13:21:14.844Z"
      }
    ```
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** 
      ```json 
         {
            "message": "Email Already In Use!"
         }
      ```
      OR
      ```json
         {
            "message": "Password must be at least 6 characters"
         }
      ```

  OR

  * **Code:** 500 UNAUTHORIZED <br />
    **Content:**
      ```json
         {
            "message":"Server Error"
         }
      ```



**Fetch Categories**
----
  Returns json data of all categories.

* **URL**

  /categories

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 

* **Headers**
   **Required:**
   `access_token=[string]`

* **Data Params**


* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
    ```json
      {  
         "data": [
            {
               "id":1,
               "name":"Backlog"
            },
            {
               "id":2,
               "name":"Todo"
            },
            {
               "id":3,
               "name":"Doing"
            },
            {
               "id":3,
               "name":"Done"
            },
         ]
      }
    ```
 
* **Error Response:**

  * **Code:** 401 <br />
    **Content:** 
      ```json 
         {
            "message": "You must login first"
         }
      ```
  OR

  * **Code:** 500 UNAUTHORIZED <br />
    **Content:**
      ```json
         {
            "message":"Server Error"
         }
      ```


**Create Categories**
----
  Returns json data of created category.

* **URL**

  /categories

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 

* **Headers**
   **Required:**
   `access_token=[string]`

* **Data Params**
   `name=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
    ```json
      {  
         "id":100,
         "name":"important"    
      }
    ```
 
* **Error Response:**

  * **Code:** 401 <br />
    **Content:** 
      ```json 
         {
            "message": "You must login first"
         }
      ```
      OR
      ```json
         {
            "message": "Title must be at least 2 characters"
         }
      ```
  OR

  * **Code:** 500 UNAUTHORIZED <br />
    **Content:**
      ```json
         {
            "message":"Server Error"
         }
      ```

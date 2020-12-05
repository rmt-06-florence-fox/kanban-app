# fancy-todo

**REGISTER USER**
----
  <_Register User _>

* **URL**

  `/register`

* **Method:**

  `POST`
  
*  **URL Params**

    Required: 

    `none`

* **Data Params**

  `firstName=[string] lastname=[string] email=[string] password=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```json
        {
          "data": {
              "id": 3,
              "name": "ted ",
              "email": "tedgeorge@gmail.com",
              "password": "$2a$10$CMcHoIRAkbovafwaYVqa4uisAyjCkz0B4Lpqvzp/3mE8LTnvxB5RC",
              "updatedAt": "2020-11-26T15:11:16.352Z",
              "createdAt": "2020-11-26T15:11:16.352Z"
              }
        }
    ```
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** 
    ```json
        {
            "message": [
                "name cannot be empty",
                "email cannot be empty",
                "password cannot be empty",
                
            ]
        }
    ```

  * **Code:** 500 <br />
    **Content:** 
    ```json
        { 
            "message" : "internal server error" 
        }
    ```


**LOGIN USER**
----
  <_LOGIN User _>

* **URL**

  `/login`

* **Method:**

  `POST`
  
*  **URL Params**

    Required: 

    `none`

* **Data Params**

  `email=[string] password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
        {
          "access_token":"slkfjalfjakljflajflakj"
        }
    ```
 
* **Error Response:**

  * **Code:** 404 <br />
    **Content:** 
    ```json
        {
            "message": "Email/password salah."
        }
    ```

  * **Code:** 500 <br />
    **Content:** 
    ```json
        { 
            "message" : "internal server error" 
        }
    ```

**SHOW ALL TASK**
----
  <_SHOW TASK _>

* **URL**

  `/task`

* **Method:**

  `GET`

*  **Headers**

  `access_token=[string]`
  
*  **URL Params**

    Required: 

    `none`

* **Data Params**

  `none`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
    [
      {
        "id": 9,
        "name": "manjat pohon toge",
        "description": "manjat pohon sekolah",
        "category": "Doing",
        "createdAt": "2020-11-25T16:01:28.995Z",
        "updatedAt": "2020-11-25T16:01:28.996Z",
        "UserId": 3
      }
    ]
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** 
    ```json
        {
            "message": "internal server error"
        }
    ```

  OR

  * **Code:** 401 UNAUTHORIZE <br />
    **Content:** 
    ```json
        {
            "message": "please login first"
        }
    ```


**SHOW ALL TASK BY CATEGORY**
----
  <_SHOW TASK _>

* **URL**

  `/task`

* **Method:**

  `GET`

*  **Headers**

  `access_token=[string]`
  
*  **URL Params**

    Required: 

    `id =[integer]`

* **Data Params**

  `category =[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      [
        {
          "id": 9,
          "name": "manjat pohon toge",
          "description": "manjat pohon sekolah",
          "category": "Doing",
          "createdAt": "2020-11-25T16:01:28.995Z",
          "updatedAt": "2020-11-25T16:01:28.996Z",
          "UserId": 3
        }
    ]
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** 
    ```json
        {
            "message": "internal server error"
        }
    ```



**DELETE TASK**
----
  <_DELETE TASK _>

* **URL**

  `/task/:id`

* **Method:**

  `DELETE`

*  **Headers**

  `access_token=[string]`
  
*  **URL Params**

    Required: 

    `id =[integer]`

* **Data Params**

  `none`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
        "message": "task success to delete"
      }
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** 
    ```json
        {
            "message": "internal server error"
        }
    ```


  * **Code:** 404  <br />
    **Content:** 
    ```json
        {
            "message": "id not found!"
        }
    ```

  * **Code:** 401  <br />
    **Content:** 
    ```json
        {
            "message": "you are not authorize with this task"
        }
    ```

**UPDATE TASK CATEGORY**
----
  <_UPDATE TASK CATEGORY _>

* **URL**

  `/task/:id`

* **Method:**

  `PATCH`

*  **Headers**

  `access_token=[string]`
  
*  **URL Params**

    Required: 

    `id =[integer]`

* **Data Params**

  `category =[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
          "id": 9,
          "name": "manjat pohon toge",
          "description": "manjat pohon sekolah",
          "category": "Doing",
          "createdAt": "2020-11-25T16:01:28.995Z",
          "updatedAt": "2020-11-25T16:01:28.996Z",
          "UserId": 3
      }
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** 
    ```json
        {
            "message": "internal server error"
        }
    ```


  * **Code:** 404  <br />
    **Content:** 
    ```json
        {
            "message": "id not found!"
        }
    ```

  * **Code:** 401  <br />
    **Content:** 
    ```json
        {
            "message": "you are not authorize with this todo"
        }
    ```

**UPDATE TASK**
----
  <_UPDATE TASK _>

* **URL**

  `/task/:id`

* **Method:**

  `PUT`

*  **Headers**

  `access_token=[string]`
  
*  **URL Params**

    Required: 

    `id =[integer]`

* **Data Params**

  `name=[string] description=[string] category =[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
          "id": 9,
          "name": "manjat pohon toge",
          "description": "manjat pohon sekolah",
          "category": "Doing",
          "createdAt": "2020-11-25T16:01:28.995Z",
          "updatedAt": "2020-11-25T16:01:28.996Z",
          "UserId": 3
      }
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** 
    ```json
        {
            "message": "internal server error"
        }
    ```


  * **Code:** 404  <br />
    **Content:** 
    ```json
        {
            "message": "id not found!"
        }
    ```

  * **Code:** 401  <br />
    **Content:** 
    ```json
        {
            "message": "you are not authorize with this todo"
        }
    ```

  * **Code:** 400  <br />
    **Content:** 
    ```json
        {
            "message": "date must be greater than now"
        }
    ```


**CREATE TASK**
----
  <_CREATE TASK _>

* **URL**

  `/task`

* **Method:**

  `POST`

*  **Headers**

  `access_token=[string]`
  
*  **URL Params**

    Required: 

    `none`

* **Data Params**

  `name=[string] description=[string] category =[string] UserId=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
          "id": 9,
          "name": "manjat pohon toge",
          "description": "manjat pohon sekolah",
          "category": "Doing",
          "createdAt": "2020-11-25T16:01:28.995Z",
          "updatedAt": "2020-11-25T16:01:28.996Z",
          "UserId": 3
      }
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** 
    ```json
        {
            "message": "internal server error"
        }
    ```


  * **Code:** 401  <br />
    **Content:** 
    ```json
        {
            "message": "please login first"
        }
    ```

  * **Code:** 400  <br />
    **Content:** 
    ```json
        {
            "message": [
              "name cannot be empty",
              "description cannot be empty",
              ]
        }
    ```
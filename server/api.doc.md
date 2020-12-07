# User

**Register User**
----
  Add new User in database

* **URL**

  `/register`

* **Method:**

  `POST` 

**Request :**

**Data Params**
```json
  {
    "name" : "yunim",
    "email" : "yuyu@gmail.com",
    "password" : "pw"
  }
  ```

**Success Response:**

  * **Code:** 201 CREATED <br />
  {
    "id": 1,
    "email": "yuyu@gmail.com"
}


**Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **message** 
    ```json
      {
        "message" : "error message"
      }
    ```

  **OR**
  * **Code:** 500 INTERNAL SERVER ERROR<br />




**User Login**
----
  User login

* **URL**

  `/login`

* **Method:**

  `POST` 

**Request :**

**Data Params**
```json
  {
  
    "email" : "yuyu@gmail.com",
    "password" : "pw"
  }
```


**Success Response:**

  * **Code:** 200 OK <br />
  **Content:** 
  ```json
    {
      "access_token"
    }
  ```


**Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **message** 
    ```json
      {
        "message" : "error message"
      }
    ```

  **OR**
  * **Code:** 401 UNAUTHORIZED<br />

  **OR**

  * **Code:** 500 INTERNAL SERVER ERROR<br />


**User Google Login**
----
  User Google login

* **URL**

  `/googleLogin`

* **Method:**

  `POST` 

**Request :**

**Header Params**
```json
  {
    "google_access_token"
  }
```


**Success Response:**

  * **Code:** 200 OK <br />
  **Content:** 
  ```json
    {
      "access_token"
    }
  ```


**Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **message** 
    ```json
      {
        "message" : "error message"
      }
    ```

  **OR**
  * **Code:** 401 UNAUTHORIZED<br />

  **OR**

  * **Code:** 500 INTERNAL SERVER ERROR<br />




# Task
**Get All Task**
----
  Get all task data
* **URL**
  `/tasks`
* **Method:**
  
  `GET` 
**Request :**
**Header Params**
```json
  {
    "access_token"
  }
```
**Success Response:**
  * **Code:** 200 OK <br />
  **Content:** 
  ```json
  [
    {
        "id": 4,
        "title": "mandi",
        "category": "Backlog",
        "UserId": 1,
        "CategoryId": 2,
        "Category": {
            "name": "Todo"
        },
        "User": {
            "name": "YUYU"
        }
    }
  ]
  ```
**Error Response:**
  * **Code:** 400 BAD REQUEST <br />
    **message** 
    ```json
      {
        "message" : "error message"
      }
    ```
    
  **OR**
  * **Code:** 401 UNAUTHORIZED<br />
  **OR**
  * **Code:** 500 INTERNAL SERVER ERROR<br />

**Add New Task**
----
  Create new Task
* **URL**
  `/tasks`
* **Method:**
  
  `POST` 
**Request :**
**Header Params**
```json
  {
    "access_token"
  }
```
**Data Params**
```json
  {

    "title": "mandi",
    "CategoryId": 2,

}
```
**Success Response:**
  * **Code:** 200 OK <br />
  **Content:** 
  ```json
  {
    "id": 4,
    "title": "mandi",
    "category": "Backlog",
    "CategoryId": 2,
    "UserId": 1,
    "updatedAt": "2020-12-01T12:09:00.604Z",
    "createdAt": "2020-12-01T12:09:00.604Z"
}
**Error Response:**
  * **Code:** 400 BAD REQUEST <br />
    **message** 
    ```json
      {
        "message" : "error message"
      }
    ```
    
  **OR**
  * **Code:** 401 UNAUTHORIZED<br />
  **OR**
  * **Code:** 500 INTERNAL SERVER ERROR<br />



**Edit Task**
----
  Edit Task Title
* **URL**
  `/tasks/:id`
* **Method:**
  
  `PUT` 
**Request :**
**URL Params**
  **Required :**
  
  `id `
**Header Params**
```json
  {
    "access_token"
  }
```
**Data Params**
```json
  {
    "title" : "Task title",
  }
```
**Success Response:**
  * **Code:** 200 OK <br />
**Error Response:**
  * **Code:** 400 BAD REQUEST <br />
    **message** 
    ```json
      {
        "message" : "error message"
      }
    ```
    
  **OR**
  * **Code:** 401 UNAUTHORIZED<br />
  ```json
      {
        "message" :   "You Dont Have Permission to Do this Action"
      }
    ```

  **OR**
  * **Code:** 500 INTERNAL SERVER ERROR<br />


  
**Delete Task**
----
  Delete task by Id
* **URL**
  `/tasks/:id`
* **Method:**
  

 *DELETE*
**Request :**
**URL Params**
  **Required :**
  
  `id,access_token`
**Header Params**
```json
  {
    "access_token"
  }
```
**Success Response:**
  * **Code:** 200 OK <br />
```json
  {
    "message": "Task deleted"
  } 
```
**Error Response:**
  * **Code:** 400 BAD REQUEST <br />
    **message** 
    ```json
      {
        "message" : "error message"
      }
    ```
    
  **OR**
  * **Code:** 401 UNAUTHORIZED<br />
  ```json
      {
        "message" :   "You Dont Have Permission to Do this Action"
      }
    ```

  **OR**
  * **Code:** 500 INTERNAL SERVER ERROR<br />


**Change Task Category**
----
  Change task category
* **URL**
  `/tasks/:id`
* **Method:**
  
  `PATCH` 
**Request :**
**URL Params**
  **Required :**
  
  `id = [Integer]`
**Header Params**
```json
  {
    "access_token"
  }
```
**Data Params**
```json
  {
    "CategoryId" : "1",
  }
```
**Success Response:**
  * **Code:** 200 OK <br />
**Error Response:**
  * **Code:** 400 BAD REQUEST <br />
    **message** 
    ```json
      {
        "message" : "error message"
      }
    ```
    
  **OR**
  * **Code:** 401 UNAUTHORIZED<br />
  **OR**
  * **Code:** 500 INTERNAL SERVER ERROR<br />
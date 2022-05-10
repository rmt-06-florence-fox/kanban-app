# kanban-app

* Web: <br />
https://web-danbam-ykp.web.app/
---- 

* Document API Postman: <br />
https://documenter.getpostman.com/view/13054000/TVmLBxhn
---- 

List of available endpoints:
* POST /register    
* POST /login
* POST /googleLogin
* GET /tasks
* POST /tasks
* PATCH /tasks/:id
* PUT /tasks/:id
* DELETE /tasks/:id
* GET /categories
* POST /categories
* PATCH /categories/:id
* DELETE /categories/:id

----
**Register**
----
Register to the app

* **URL**    
  
    /register

* **Method**
    
    `POST`

* **Data Params**

    ```javascript
    {
        email: 'string',
        password: 'string'
    }
    ```

* **Success Response**
    * **Code:** 201 <br />
      **Content:**
      ```javascript
      {
        id: integer,
        email: 'string',
      }
      ```
* **Error Response**
    * **Code:** 400 <br />
      **Content**
      ```javascript
      {
          msg: errors
      }
      ```
        OR
    * **Code:** 500 <br />
      **Content**
      ```javascript
      {
          msg: 'Internal Server Error'
      }
      ```
* **Sample Call**
    ```javascript
        axios({
            method: 'POST',
            url: `/register`,
            data: payload
        })
    ```
----

**Login**
----
Login to the app

* **URL**    
  
    /login

* **Method**
    
    `POST`

* **Data Params**

    ```javascript
    {
        email: 'string',
        password: 'string'
    }
    ```

* **Success Response**
    * **Code:** 200 <br />
      **Content:**
      ```javascript
      {
          access_token: 'string',
      }
      ```
* **Error Response**
    * **Code:** 401 <br />
      **Content**
      ```javascript
      {
          msg: 'username or password is incorrect'
      }
      ```
        OR
    * **Code:** 500 <br />
      **Content**
      ```javascript
      {
          msg: 'Internal Server Error'
      }
      ```
* **Sample Call**
    ```javascript
        axios({
            method: 'POST',
            url: `/login`,
            data: payload
        })
    ```
----

**Read Tasks**
----
Returns all task in the database

* **URL**    
  
    /tasks

* **Method**
    
    `GET`

* **Data Params**
    * **Headers**
    ```javascript
        access_token = 'string'
    ```

* **Success Response**
    * **Code:** 200 <br />
      **Content:**
      ```javascript
      [
        {
            "title": "string",
            "UserId": integer,
            "CategoryId": interger,
            "createdAt": "string",
            "updatedAt": "string"
        },
        {

        }
        ...
      ]
      ```
* **Error Response**
    * **Code:** 401 <br />
      **Content**
      ```javascript
      {
          msg: 'Authentication required'
      }
      ```
        OR
    * **Code:** 500 <br />
      **Content**
      ```javascript
      {
          msg: 'Internal Server Error'
      }
      ```
* **Sample Call**
    ```javascript
        axios({
            method: 'GET',
            url: '/tasks',
            headers: {
                access_token
            }
        })
    ```
----

**Add Task**
----
Add a new task into the database

* **URL**    
  
    /tasks

* **Method**
    
    `POST`

* **Data Params**
    * **Headers**
    ```javascript
        access_token = 'string'
    ```
    * **Data**
    ```javascript
    {
        title: 'string',
        CategoryId: integer
    }
    ```

* **Success Response**
    * **Code:** 200 <br />
      **Content:**
      ```javascript
        {
          "task": {
              "title": "string",
              "CategoryId": integer,
              "UserId": integer,
              "updatedAt": "string",
              "createdAt": "string"
          }
        }
      ```
* **Error Response**
    * **Code:** 400 <br />
      **Content**
      ```javascript
      {
          msg: errors
      }
      ```
        OR
    * **Code:** 401 <br />
      **Content**
      ```javascript
      {
          msg: 'Authentication required'
      }
      ```
        OR
    * **Code:** 500 <br />
      **Content**
      ```javascript
      {
          msg: 'Internal Server Error'
      }
      ```
* **Sample Call**
    ```javascript
        axios({
            method: 'POST',
            url: '/tasks',
            headers: {
                access_token
            },
            data: payload
        })
    ```
----

**Move Task's Category**
----
Change a task's category

* **URL**    
  
    /tasks/:id

* **Method**
    
    `PATCH`

* **Data Params**
    * **Headers**
    ```javascript
        access_token = 'string'
    ```
    * **Data**
    ```javascript
    {
        category: 'string'
    }
    ```

* **Success Response**
    * **Code:** 200 <br />
      **Content:**
      ```javascript
      {
    "category": [
        {
            "title": "string",
            "UserId": integer,
            "CategoryId": integer,
            "createdAt": "string",
            "updatedAt": "string"
        }
    ]
      }
      ```
* **Error Response**
    * **Code:** 401 <br />
      **Content**
      ```javascript
      {
          msg: 'You are not authorized'
      }
      ```
        OR
    * **Code:** 404 <br />
      **Content**
      ```javascript
      {
          msg: 'move category failed'
      }
      ```
        OR
    * **Code:** 500 <br />
      **Content**
      ```javascript
      {
          msg: 'Internal Server Error'
      }
      ```
* **Sample Call**
    ```javascript
        axios({
            method: 'PATCH',
            url: `/tasks/${payload.id}`,
            headers: {
                access_token
            },
            data: {
                category: payload.category
            }
        })
    ```
----

**Delete Task**
----
Delete A Task

* **URL**    
  
    /tasks/:id

* **Method**
    
    `DELETE`

* **Data Params**
    * **Headers**
    ```javascript
        access_token = 'string'
    ```

* **Success Response**
    * **Code:** 200 <br />
      **Content:**
      ```javascript
      [
          integer,
          {
              id: integer,
              title: 'string',
              description: 'string',
              category: 'string'
              UserId: integer
          }
      ]
      ```
* **Error Response**
    * **Code:** 401 <br />
      **Content**
      ```javascript
      {
          msg: 'You are not authorized'
      }
      ```
    * **Code:** 404 <br />
      **Content**
      ```javascript
      {
          msg: 'delete task failed'
      }
      ```
        OR
    * **Code:** 500 <br />
      **Content**
      ```javascript
      {
          msg: 'Internal Server Error'
      }
      ```
* **Sample Call**
    ```javascript
        axios({
            method: 'DELETE',
            url: `tasks/${id}`,
            headers: {
                access_token
            }
        })
    ```
----

**Edit A Task**
----
Edit A Task's Data

* **URL**    
  
    /tasks/:id

* **Method**
    
    `PUT`

* **Data Params**
    * **Headers**
    ```javascript
        access_token = 'string'
    ```
    * **Data**
    ```javascript
    {
        title: 'string',
        description: 'string'
    }
    ```

* **Success Response**
    * **Code:** 200 <br />
      **Content:**
      ```javascript
      {
        "task": [
            {
                "title": "string",
                "UserId": integer,
                "CategoryId": integer,
                "createdAt": "string",
                "updatedAt": "string"
            }
        ]
    }
      ```
* **Error Response**
    * **Code:** 401 <br />
      **Content**
      ```javascript
      {
          msg: 'You are not authorized'
      }
      ```
    * **Code:** 404 <br />
      **Content**
      ```javascript
      {
          msg: 'Task is not found'
      }
      ```
        OR
    * **Code:** 500 <br />
      **Content**
      ```javascript
      {
          msg: 'Internal Server Error'
      }
      ```
* **Sample Call**
    ```javascript
        axios({
            method: 'PUT',
            url: `/tasks/${payload.id}`,
            headers: {
                access_token
            },
            data: {
                title: 'string',
                description: 'string'
            }
        })
    ```
----
# kanban-app
**Register**
----
  if you want to log in to view the contents of the web app. You must login first. But if you don't have an account, you can register first

* **URL**

  <_https://arfafa-kanban.herokuapp.com/register_>

* **Method**

  POST

* **Data Params**

  * email
  
  * password

* **Success Response**
    
    ```json
    {
        "id": 1,
        "email": "arfafa@mail.com"
    }
    ```
* **Bad Response**

    if the email is not filled
    ```json
    {
        "msg": "Email can't be empty"
    }
    ```

    if the password is not filled
    ```json
    {
        "msg": "Password can't be empty"
    }
    ```

**Login**
----
  If you already have an account, you can immediately fill in your data

* **URL**

  <_https://arfafa-kanban.herokuapp.com/login>

* **Method**

  POST

* **Data Params**

  * email
  
  * password

* **Success Response**
    
    ```json
    {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhcmZhZmFAbWFpbC5jb20iLCJpYXQiOjE2MDcwODY5NzJ9.pUvjVReoFGfyQLNWb4tdNsKCBnItdWAhcNlcbnQjDe0"
    }
    ```
* **Bad Response**

    if the email or password is not filled
    ```json
    {
        "msg": "Data Not Found"
    }
    ```

**Get All Task**
----
  Get all the data

* **URL**

  <_https://arfafa-kanban.herokuapp.com/task>

* **Method**

  GET

* **Success Response**
    
    ```json
    {
        "id": 1,
        "title": "afafa",
        "category": "Backlog",
        "UserId": 1,
        "createdAt": "2020-12-04T08:44:32.038Z",
        "updatedAt": "2020-12-04T08:44:32.038Z",
        "User": {
            "email": "kira@mail.com"
        }
    }
    ```
* **Bad Response**

    If the data does not exist
    ```json
    {
        "msg": "Data Not Found"
    }
    ```
**Get Task By Id**
----
  Get spesific task by id

* **URL**

  <_https://arfafa-kanban.herokuapp.com/task/:id>

  **Required:**
 
   `id=[integer]`

* **Method**

  GET

* **Success Response**
    
    ```json
    {
        "id": 1,
        "title": "afafa",
        "category": "Backlog",
        "UserId": 1,
        "createdAt": "2020-12-04T08:44:32.038Z",
        "updatedAt": "2020-12-04T08:44:32.038Z",
        "User": {
            "email": "kira@mail.com"
        }
    }
    ```
* **Bad Response**

    If the data does not exist
    ```json
    {
        "msg": "Data Not Found"
    }
    ```

    Users can only see their own data
    ```json
    {
        "msg": "You not autorization"
    }
    ```
**Create Task**
----

* **URL**

  <_https://arfafa-kanban.herokuapp.com/task>

* **Method**

  POST

* **Data Params**

  * title
  
  * category

  * UserId => Automatically filled with user data who is creating a task

* **Success Response**
    
    ```json
    {
        "id": 1,
        "title": "testing",
        "category": "Todo",
        "UserId": 1,
        "updatedAt": "2020-12-04T07:25:20.468Z",
        "createdAt": "2020-12-04T07:25:20.468Z"
    }
    ```
* **Bad Response**

    if the title is not filled
    ```json
    {
        "msg": "title can't be empty"
    }
    ```

    if the category is not filled
    ```json
    {
        "msg": "Category can't be empty"
    }
    ```
**Edit Task**
----

* **URL**

  <_https://arfafa-kanban.herokuapp.com/task/:id>

  **Required:**
 
   `id=[integer]`

* **Method**

  PUT

* **Success Response**
    
    ```json
    {
        "id": 1,
        "title": "testing213",
        "category": "Backlog",
        "UserId": 1,
        "createdAt": "2020-12-03T22:36:41.423Z",
        "updatedAt": "2020-12-04T13:33:06.874Z"
    }
    ```
* **Bad Response**

    if the title is not filled
    ```json
    {
        "msg": "title can't be empty"
    }
    ```

    if the category is not filled
    ```json
    {
        "msg": "Category can't be empty"
    }
    ```

    If the data does not exist
    ```json
    {
        "msg": "Data Not Found"
    }
    ```

    Users can only see their own data
    ```json
    {
        "msg": "You not autorization"
    }
    ```
**Delete Task**
----

* **URL**

  <_https://arfafa-kanban.herokuapp.com/task/:id>

  **Required:**
 
   `id=[integer]`

* **Method**

  DELETE

* **Success Response**
    
    ```json
    {
        "msg": "Success Delete"
    }
    ```
* **Bad Response**

    If the data does not exist
    ```json
    {
        "msg": "Data Not Found"
    }
    ```

    Users can only see their own data
    ```json
    {
        "msg": "You not autorization"
    }
    ```
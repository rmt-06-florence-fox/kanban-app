# kanban-app
Kanban App is an agile project management tool designed help visualize work and limit work-in progress

**RESTful Endpoints**
---
- `POST /register/`
- `POST /login/`
- `GET /tasks/`
- `GET /tasks/:id`
- `POST /tasks`
- `PUT /tasks/:id`
- `PATCH /tasks/:id`
- `DELETE /tasks/:id`

**Register Account**
---
    Return json data about user account.

* **URL**

    `/register/`

* **Method:**

    `POST`

* **Header:**

    None

* **URL Params**

    None

* **Data Params**

  **Required:**

    `email=[string]` <br />
    `password=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
    ```json
    {
        "id": 1,
        "name": "taufiq",
        "email": "taufiq@mail.com"
    }
    ```

* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:**
    ```json
    {
        "message": "email must be unique"
    }
    ```

    OR 

  * **Code:** 400 Bad Request <br />
    **Content:**
    ```json
    {
        "message": "Name is Required"
    }
    ```

    OR 

  * **Code:** 400 Bad Request <br />
    **Content:**
    ```json
    {
        "message": "Email format is invalid"
    }
    ```

    OR 

  * **Code:** 400 Bad Request <br />
    **Content:**
    ```json
    {
        "message": "Password is required"
    }
    ```

    OR 

  * **Code:** 400 Bad Request <br />
    **Content:**
    ```json
    {
        "message": "Password must be 6 - 32 characters"
    }
    ```


**Login Account**
---
    Return access_token.

* **URL**

    `/login/`

* **Method:**

    `POST`

* **Header:**

    None

* **URL Params**

    None

* **Data Params**

  **Required:**

    `email=[string]` <br />
    `password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```json
    {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0YXVmaXFAbWFpbC5jb20iLCJpYXQiOjE2MDY4MjkwNDZ9.7M_k9nE7Bw0DzCaTA4DCIKu8RNDhGF7vG70Zps29Prc"
    }
    ```

* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:**
    ```json
    {
        "message": "Invalid Account"
    }
    ```

    OR 

  * **Code:** 400 Bad Request <br />
    **Content:**
    ```json
    {
        "message": "Invalid Email/Password"
    }
    ```

**Create Task**
---
    Add Task data to database.

* **URL**

    `/tasks/:id/`

* **Method:**

    `POST`

* **Header:**

    `access_token:  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0YXVmaXFAbWFpbC5jb20iLCJpYXQiOjE2MDY4MjkwNDZ9.7M_k9nE7Bw0DzCaTA4DCIKu8RNDhGF7vG70Zps29Prc`

* **URL Params**

    None

* **Data Params**

  **Required:**

    `title=[string]` <br />
    `description=[string]` <br />
    `point=[integer]` <br />
    `assignedto=[string]` <br />
    `status=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
    ```json
    {
        "id": 1,
        "title": "Add user login form",
        "description": "Form login with google sign in",
        "point": 20,
        "assignedto": "Cocoa",
        "status": "Backlog",
        "UserId": 1,
        "createdBy": "taufiq",
        "updatedAt": "2020-12-01T13:33:15.625Z",
        "createdAt": "2020-12-01T13:33:15.625Z"
    }
    ```

* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:**
    ```json
    {
        "message": "Please Login First"
    }
    ```

    OR

  * **Code:** 401 Unauthorized <br />
    **Content:**
    ```json
    {
        "message": "invalid token"
    }
    ```

    OR

  * **Code:** 400 Bad Request <br />
    **Content:**
    ```json
    {
        "message": "Title is required"
    }
    ```

    OR 

  * **Code:** 400 Bad Request <br />
    **Content:**
    ```json
    {
        "message": "Description is required"
    }
    ```

    OR 

  * **Code:** 400 Bad Request <br />
    **Content:**
    ```json
    {
        "message": "Point is required"
    }
    ```

    OR 

  * **Code:** 400 Bad Request <br />
    **Content:**
    ```json
    {
        "message": "Assigned To is required"
    }
    ```

    OR 

  * **Code:** 400 Bad Request <br />
    **Content:**
    ```json
    {
        "message": "Status is required"
    }
    ```


**Show Task**
---
    Return json data about Task.

* **URL**

    `/tasks/`

* **Method:**

    `GET`

* **Header:**

    `access_token:  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0YXVmaXFAbWFpbC5jb20iLCJpYXQiOjE2MDY4MjkwNDZ9.7M_k9nE7Bw0DzCaTA4DCIKu8RNDhGF7vG70Zps29Prc`

* **URL Params**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
    ```json
    {
    "task": [
            {
                "id": 1,
                "title": "Add user login form",
                "description": "Form login with google sign in",
                "point": 30,
                "assignedto": "Cocoa",
                "status": "Doing",
                "UserId": 1,
                "createdBy": "taufiq",
                "createdAt": "2020-12-01T13:33:15.625Z",
                "updatedAt": "2020-12-01T14:01:15.207Z"
            },
            {
                "id": 2,
                "title": "Create Kanban Layout",
                "description": "Kanban Card, Navbar and Categories",
                "point": 30,
                "assignedto": "Cocoa",
                "status": "Backlog",
                "UserId": 1,
                "createdBy": "taufiq",
                "createdAt": "2020-12-01T14:13:33.565Z",
                "updatedAt": "2020-12-01T14:13:33.565Z"
            }
        ]
    }
    ```

* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:**
    ```json
    {
        "message": "Please Login First"
    }
    ```

    OR

  * **Code:** 401 Unauthorized <br />
    **Content:**
    ```json
    {
        "message": "invalid token"
    }
    ```


**Find by Id Task**
---
    Show task by selected id.

* **URL**

    `/tasks/:id`

* **Method:**

    `GET`

* **Header:**

    `access_token:  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0YXVmaXFAbWFpbC5jb20iLCJpYXQiOjE2MDY4MjkwNDZ9.7M_k9nE7Bw0DzCaTA4DCIKu8RNDhGF7vG70Zps29Prc`

* **URL Params**

    **Required:**

    `id=[integer]`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```json
    {
        "task": {
            "id": 2,
            "title": "Create Kanban Layout",
            "description": "Kanban Card, Navbar and Categories",
            "point": 30,
            "assignedto": "Cocoa",
            "status": "Backlog",
            "UserId": 1,
            "createdBy": "taufiq",
            "createdAt": "2020-12-01T14:13:52.693Z",
            "updatedAt": "2020-12-01T14:13:52.693Z"
        }
    }
    ```

* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:**
    ```json
    {
        "message": "Please Login First"
    }
    ```

    OR

  * **Code:** 401 Unauthorized <br />
    **Content:**
    ```json
    {
        "message": "invalid token"
    }
    ```

    OR

  * **Code:** 401 Unauthorized <br />
    **Content:**
    ```json
    {
        "message": "You are not authorized to access this page"
    }
    ```

    OR

  * **Code:** 404 Error Not Found <br />
    **Content:**
    ```json
    {
        "message": "Error Not Found"
    }
    ```


**Update Task**
---
    Update task.

* **URL**

    `/tasks/:id`

* **Method:**

    `PUT`

* **Header:**

    `access_token:  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0YXVmaXFAbWFpbC5jb20iLCJpYXQiOjE2MDY4MjkwNDZ9.7M_k9nE7Bw0DzCaTA4DCIKu8RNDhGF7vG70Zps29Prc`

* **URL Params**

    **Required:**

    `id=[integer]`

* **Data Params**

    **Required:**

    `title=[string]` <br />
    `description=[string]` <br />
    `point=[integer]` <br />
    `assignedto=[string]` <br />
    `status=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```json
    {
        "task": {
            "id": 1,
            "title": "Add user login form",
            "description": "Form login with google sign in",
            "point": 30,
            "assignedto": "Cocoa",
            "status": "Doing",
            "UserId": 1,
            "createdBy": "taufiq",
            "createdAt": "2020-12-01T13:33:15.625Z",
            "updatedAt": "2020-12-01T13:58:09.266Z"
        }
    }
    ```

* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:**
    ```json
    {
        "message": "Please Login First"
    }
    ```

    OR

  * **Code:** 401 Unauthorized <br />
    **Content:**
    ```json
    {
        "message": "invalid token"
    }
    ```

    OR

  * **Code:** 401 Unauthorized <br />
    **Content:**
    ```json
    {
        "message": "You are not authorized to access this page"
    }
    ```

    OR

  * **Code:** 404 Error Not Found <br />
    **Content:**
    ```json
    {
        "message": "Error Not Found"
    }
    ```

    OR

  * **Code:** 400 Bad Request <br />
    **Content:**
    ```json
    {
        "message": "Title is required"
    }
    ```

    OR 

  * **Code:** 400 Bad Request <br />
    **Content:**
    ```json
    {
        "message": "Description is required"
    }
    ```

    OR 

  * **Code:** 400 Bad Request <br />
    **Content:**
    ```json
    {
        "message": "Point is required"
    }
    ```

    OR 

  * **Code:** 400 Bad Request <br />
    **Content:**
    ```json
    {
        "message": "Assigned To is required"
    }
    ```

    OR 

  * **Code:** 400 Bad Request <br />
    **Content:**
    ```json
    {
        "message": "Status is required"
    }
    ```


**Update Status Task**
---
    Update status task.

* **URL**

    `/tasks/:id`

* **Method:**

    `PATCH`

* **Header:**

    `access_token:  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0YXVmaXFAbWFpbC5jb20iLCJpYXQiOjE2MDY4MjkwNDZ9.7M_k9nE7Bw0DzCaTA4DCIKu8RNDhGF7vG70Zps29Prc`

* **URL Params**

    **Required:**

    `id=[integer]`

* **Data Params**

    **Required:**

    `title=[string]` <br />
    `description=[string]` <br />
    `point=[integer]` <br />
    `assignedto=[string]` <br />
    `status=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```json
    {
        "task": {
            "id": 2,
            "title": "Create Kanban Layout",
            "description": "Kanban Card, Navbar and Categories",
            "point": 30,
            "assignedto": "Cocoa",
            "status": "Done",
            "UserId": 1,
            "createdBy": "taufiq",
            "createdAt": "2020-12-01T14:25:39.564Z",
            "updatedAt": "2020-12-01T14:26:23.286Z"
        }
    }
    ```

* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:**
    ```json
    {
        "message": "Please Login First"
    }
    ```

    OR

  * **Code:** 401 Unauthorized <br />
    **Content:**
    ```json
    {
        "message": "invalid token"
    }
    ```

    OR

  * **Code:** 401 Unauthorized <br />
    **Content:**
    ```json
    {
        "message": "You are not authorized to access this page"
    }
    ```

    OR

  * **Code:** 404 Error Not Found <br />
    **Content:**
    ```json
    {
        "message": "Error Not Found"
    }
    ```

    OR

  * **Code:** 400 Bad Request <br />
    **Content:**
    ```json
    {
        "message": "Status is required"
    }
    ```

**Delete Task**
---
    Delete task.

* **URL**

    `/tasks/:id`

* **Method:**

    `DELETE`

* **Header:**

    `access_token:  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0YXVmaXFAbWFpbC5jb20iLCJpYXQiOjE2MDY4MjkwNDZ9.7M_k9nE7Bw0DzCaTA4DCIKu8RNDhGF7vG70Zps29Prc`

* **URL Params**

    **Required:**

    `id=[integer]`

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```json
    {
        "message": "Task successfuly deleted"
    }
    ```

* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:**
    ```json
    {
        "message": "Please Login First"
    }
    ```

    OR

  * **Code:** 401 Unauthorized <br />
    **Content:**
    ```json
    {
        "message": "invalid token"
    }
    ```

    OR

  * **Code:** 401 Unauthorized <br />
    **Content:**
    ```json
    {
        "message": "You are not authorized to access this page"
    }
    ```

    OR

  * **Code:** 404 Error Not Found <br />
    **Content:**
    ```json
    {
        "message": "Error Not Found"
    }
    ```
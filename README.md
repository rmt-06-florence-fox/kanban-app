# Kanban Web App
Documentation for **Kanbund**. A simple web-based Kanban-style list-making application.


# Link

#### Client
```
https://kanban-wypratama.web.app/
https://kanban-wypratama.firebaseapp.com/
```

#### Server
```
https://kanban-app-wypratama.herokuapp.com/
```

##  API Documentation

 `POST`   **/register**

`https://kanban-app-wypratama.herokuapp.com/register`

| Body | |
|--|--|
| username | *Admin_Kanban*
| email | *admin@kanban.com* |
| password| *123456* |

**Example**
*  **Status 200 OK**
	> {
			    "access_token": "token string"
		}			

*  **500 Internal Server Error**
	>   {
"errors":  [ "Username can't be empty",
"Please enter valid email address",
"Password can't be empty"]
}
 

---

`POST`   **/login**

`https://kanban-app-wypratama.herokuapp.com/login`

| Body | |
|--|--|
| email| *admin@kanban.com*
| password| *123456* |

**Example**
*  **Status 200 OK**
	> {
    "access_token": "token string"
}
>
*  **500 Internal Server Error**
	>   {
"message":  "Email/Password don't match"
}
> 
---

`POST`   **/google-login**

`https://kanban-app-wypratama.herokuapp.com/google-login`

| Body | |
|--|--|
| id_token| "*id_token_string*"

**Example**
*  **Status 200 OK**
	> {
    "access_token": "token string"
}
>
---

> 

`GET`   **/task**

`https://kanban-app-wypratama.herokuapp.com/task`

| Headers| |
|--|--|
| access_token| "*token string*"

**Example**
* **Status 200 OK**
	> [
    {
        "id": 1,
        "title": "Bikin Web",
        "description": "Bikin Web yang bagus ga harus keren harus edgy gapake mahal",
        "OrganizationId": 1,
        "CategoryId": 1,
        "UserId": 6,
        "createdAt": "2020-12-02T16:24:28.538Z",
        "updatedAt": "2020-12-02T16:24:28.538Z",
        "User": {
            "id": 6,
            "username": "Admin Kanban",
            "email": "admin@kanban.com",
            "password": "$2a$08$fyNtwWM4RHDZrOTFCRlFlOiY3fJtJqVNaveVyPWdVAxOpw10HcM7u",
            "OrganizationId": 1,
            "createdAt": "2020-12-02T13:43:23.590Z",
            "updatedAt": "2020-12-02T13:43:23.590Z"
        },
        "Category": {
            "id": 1,
            "name": "Back Log",
            "OrganizationId": 1,
            "createdAt": "2020-12-02T16:07:30.056Z",
            "updatedAt": "2020-12-02T16:07:30.056Z"
        },
        "Organization": {
            "id": 1,
            "name": "Kanbund FF",
            "createdAt": "2020-12-02T16:01:22.508Z",
            "updatedAt": "2020-12-02T16:01:22.508Z"
        }
    },
    {
        "id": 2,
        "title": "Masak",
        "description": "Nasi yang enak sekali",
        "OrganizationId": 1,
        "CategoryId": 1,
        "UserId": 6,
        "createdAt": "2020-12-02T16:24:28.538Z",
        "updatedAt": "2020-12-02T16:24:28.538Z",
        "User": {
            "id": 6,
            "username": "Admin Kanban",
            "email": "admin@kanban.com",
            "password": "$2a$08$fyNtwWM4RHDZrOTFCRlFlOiY3fJtJqVNaveVyPWdVAxOpw10HcM7u",
            "OrganizationId": 1,
            "createdAt": "2020-12-02T13:43:23.590Z",
            "updatedAt": "2020-12-02T13:43:23.590Z"
        },
        "Category": {
            "id": 1,
            "name": "Back Log",
            "OrganizationId": 1,
            "createdAt": "2020-12-02T16:07:30.056Z",
            "updatedAt": "2020-12-02T16:07:30.056Z"
        },
        "Organization": {
            "id": 1,
            "name": "Kanbund FF",
            "createdAt": "2020-12-02T16:01:22.508Z",
            "updatedAt": "2020-12-02T16:01:22.508Z"
        }
    },
    {
        "id": 3,
        "title": "Kanban",
        "description": "bikin website kanban harus yang keren ya",
        "OrganizationId": 1,
        "CategoryId": 2,
        "UserId": 6,
        "createdAt": "2020-12-02T16:24:28.538Z",
        "updatedAt": "2020-12-02T16:24:28.538Z",
        "User": {
            "id": 6,
            "username": "Admin Kanban",
            "email": "admin@kanban.com",
            "password": "$2a$08$fyNtwWM4RHDZrOTFCRlFlOiY3fJtJqVNaveVyPWdVAxOpw10HcM7u",
            "OrganizationId": 1,
            "createdAt": "2020-12-02T13:43:23.590Z",
            "updatedAt": "2020-12-02T13:43:23.590Z"
        },
        "Category": {
            "id": 2,
            "name": "To Do",
            "OrganizationId": 1,
            "createdAt": "2020-12-02T16:07:30.056Z",
            "updatedAt": "2020-12-02T16:07:30.056Z"
        },
        "Organization": {
            "id": 1,
            "name": "Kanbund FF",
            "createdAt": "2020-12-02T16:01:22.508Z",
            "updatedAt": "2020-12-02T16:01:22.508Z"
        }
    },
    {
        "id": 4,
        "title": "Fancy To Do",
        "description": "bikin webapp buat list to do",
        "OrganizationId": 1,
        "CategoryId": 2,
        "UserId": 6,
        "createdAt": "2020-12-02T16:24:28.538Z",
        "updatedAt": "2020-12-02T16:24:28.538Z",
        "User": {
            "id": 6,
            "username": "Admin Kanban",
            "email": "admin@kanban.com",
            "password": "$2a$08$fyNtwWM4RHDZrOTFCRlFlOiY3fJtJqVNaveVyPWdVAxOpw10HcM7u",
            "OrganizationId": 1,
            "createdAt": "2020-12-02T13:43:23.590Z",
            "updatedAt": "2020-12-02T13:43:23.590Z"
        },
        "Category": {
            "id": 2,
            "name": "To Do",
            "OrganizationId": 1,
            "createdAt": "2020-12-02T16:07:30.056Z",
            "updatedAt": "2020-12-02T16:07:30.056Z"
        },
        "Organization": {
            "id": 1,
            "name": "Kanbund FF",
            "createdAt": "2020-12-02T16:01:22.508Z",
            "updatedAt": "2020-12-02T16:01:22.508Z"
        }
    },
    {
        "id": 5,
        "title": "Ecommerce",
        "description": "bikin website e-commerce",
        "OrganizationId": 1,
        "CategoryId": 3,
        "UserId": 6,
        "createdAt": "2020-12-02T16:24:28.538Z",
        "updatedAt": "2020-12-02T16:24:28.538Z",
        "User": {
            "id": 6,
            "username": "Admin Kanban",
            "email": "admin@kanban.com",
            "password": "$2a$08$fyNtwWM4RHDZrOTFCRlFlOiY3fJtJqVNaveVyPWdVAxOpw10HcM7u",
            "OrganizationId": 1,
            "createdAt": "2020-12-02T13:43:23.590Z",
            "updatedAt": "2020-12-02T13:43:23.590Z"
        },
        "Category": {
            "id": 3,
            "name": "Doing",
            "OrganizationId": 1,
            "createdAt": "2020-12-02T16:07:30.056Z",
            "updatedAt": "2020-12-02T16:07:30.056Z"
        },
        "Organization": {
            "id": 1,
            "name": "Kanbund FF",
            "createdAt": "2020-12-02T16:01:22.508Z",
            "updatedAt": "2020-12-02T16:01:22.508Z"
        }
    },
    {
        "id": 6,
        "title": "Bikin Kopi",
        "description": "Gilux mix yang rasanya mantep tenan",
        "OrganizationId": 1,
        "CategoryId": 2,
        "UserId": 9,
        "createdAt": "2020-12-02T16:24:28.538Z",
        "updatedAt": "2020-12-02T16:24:28.538Z",
        "User": {
            "id": 9,
            "username": "tesuser",
            "email": "tes@user2.com",
            "password": "$2a$08$5.Fot.d3ZMXGoU1YGawk8.doEYE/UDeyTxv0cdQw4GG5638BrFmMa",
            "OrganizationId": 1,
            "createdAt": "2020-12-02T15:11:58.437Z",
            "updatedAt": "2020-12-02T15:11:58.437Z"
        },
        "Category": {
            "id": 2,
            "name": "To Do",
            "OrganizationId": 1,
            "createdAt": "2020-12-02T16:07:30.056Z",
            "updatedAt": "2020-12-02T16:07:30.056Z"
        },
        "Organization": {
            "id": 1,
            "name": "Kanbund FF",
            "createdAt": "2020-12-02T16:01:22.508Z",
            "updatedAt": "2020-12-02T16:01:22.508Z"
        }
    },
    {
        "id": 7,
        "title": "Bikin Mie",
        "description": "Yang instan pake telor",
        "OrganizationId": 1,
        "CategoryId": 2,
        "UserId": 9,
        "createdAt": "2020-12-02T16:24:28.538Z",
        "updatedAt": "2020-12-02T16:24:28.538Z",
        "User": {
            "id": 9,
            "username": "tesuser",
            "email": "tes@user2.com",
            "password": "$2a$08$5.Fot.d3ZMXGoU1YGawk8.doEYE/UDeyTxv0cdQw4GG5638BrFmMa",
            "OrganizationId": 1,
            "createdAt": "2020-12-02T15:11:58.437Z",
            "updatedAt": "2020-12-02T15:11:58.437Z"
        },
        "Category": {
            "id": 2,
            "name": "To Do",
            "OrganizationId": 1,
            "createdAt": "2020-12-02T16:07:30.056Z",
            "updatedAt": "2020-12-02T16:07:30.056Z"
        },
        "Organization": {
            "id": 1,
            "name": "Kanbund FF",
            "createdAt": "2020-12-02T16:01:22.508Z",
            "updatedAt": "2020-12-02T16:01:22.508Z"
        }
    }
]

*  **400 Bad Request**
	>{
"error":  "Need login to access"
}
>

---

`POST`   **/task**

`https://kanban-app-wypratama.herokuapp.com/task`

Creating task will return created task on success

| Headers| |
|--|--|
| access_token| "*token string*"

| Body| |
|--|--|
| title| "*Make an API Doc*"
| Description| "*Make a new API doc for Kanban Server*"
| CategoryId| "*1*"
| OrganizationId| "*2*"

**Example**
* **Status 200 OK**
	>  {
"id":  18,
"title":  "Make an API Doc",
"description":  "Make a new API doc for Kanban Server",
"CategoryId":  1,
"OrganizationId":  2,
"UserId":  6,
"updatedAt":  "2020-12-05T17:15:34.157Z",
"createdAt":  "2020-12-05T17:15:34.157Z"
}
* **400Bad Request**
	>{
"error":  "Need login to access"
}
---

`GET`   **/task/:id**

`https://kanban-app-wypratama.herokuapp.com/task/1`

| Headers| |
|--|--|
| access_token| "*token string*"


**Example**
* **Status 200 OK**
	>  {
"id":  18,
"title":  "Make an API Doc",
"description":  "Make a new API doc for Kanban Server",
"OrganizationId":  2,
"CategoryId":  1,
"UserId":  6,
"createdAt":  "2020-12-05T17:15:34.157Z",
"updatedAt":  "2020-12-05T17:15:34.157Z"
}
* **400Bad Request**
	>{
"error":  "Need login to access"
}

---

`PUT`   **/task/:id**

`https://kanban-app-wypratama.herokuapp.com/task/18`

| Headers| |
|--|--|
| access_token| "*token string*"

| Body| |
|--|--|
| title| "*Make an API Doc*"
| Description| "*Make a new API doc for Kanban Server*"
| CategoryId| "*1*"


**Example**
* **Status 200 OK**
	>  {
"id":  18,
"title":  "Make an API Doc",
"description":  "Make a new API doc for Kanban Server Edited",
"OrganizationId":  2,
"CategoryId":  1,
"UserId":  6,
"createdAt":  "2020-12-05T17:15:34.157Z",
"updatedAt":  "2020-12-05T17:15:34.157Z"
}
* **400Bad Request**
	>{
"error":  "Need login to access"
}
* **401 Unauthorized**
	> {
"error":  "Not Authorized"
}

---

`PATCH`   **/task/:id**

`https://kanban-app-wypratama.herokuapp.com/task/18`

| Headers| |
|--|--|
| access_token| "*token string*"

| Body| |
|--|--| 
| CategoryId| "*2*"


**Example**
* **Status 200 OK**
	>  {
"id":  18,
"title":  "Make an API Doc",
"description":  "Make a new API doc for Kanban Server Edited",
"OrganizationId":  2,
"CategoryId":  2,
"UserId":  6,
"createdAt":  "2020-12-05T17:15:34.157Z",
"updatedAt":  "2020-12-05T17:15:34.157Z"
}
* **400Bad Request**
	>{
"error":  "Need login to access"
}
* **401 Unauthorized**
	> {
"error":  "Not Authorized"
}

---

`DELETE`   **/task/:id**

`https://kanban-app-wypratama.herokuapp.com/task/18`

| Headers| |
|--|--|
| access_token| "*token string*"


**Example**
* **Status 200 OK**
	>  {
"message":  "item deleted"
}
* **400 Bad Request**
	>{
"error":  "Need login to access"
}
* **401 Unauthorized**
	> {
"error":  "Not Authorized"
}

---

`GET`   **/user**

Return active user's data

`https://kanban-app-wypratama.herokuapp.com/user`

| Headers| |
|--|--|
| access_token| "*token string*"


**Example**
* **Status 200 OK**
	> {
"id":  6,
"username":  "Admin Kanban",
"OrganizationId":  1
}
* **400 Bad Request**
	>{
"error":  "Need login to access"
}

---

`PATCH`   **/user/:id**

Used to update user organization

`https://kanban-app-wypratama.herokuapp.com/user/6`

| Headers| |
|--|--|
| access_token| "*token string*"

| Body| |
|--|--|
| OrganizationId| "*1*"


**Example**
* **Status 200 OK**
	> {
"id":  6,
"username":  "Admin Kanban",
"OrganizationId":  1
}
* **400 Bad Request**
	>{
"error":  "Need login to access"
}



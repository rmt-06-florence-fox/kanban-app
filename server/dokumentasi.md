*Sign in
Users sign in

URL
/users/sign-in

Method:
POST

URL Params
None

Headers
none

Req Body:
email: string
password: string

Data Params
None

Success Response:
Code: 201
Content: {
    "email": string,
    "id": integer
}
Error Response:

Code: 500 INTERNAL SERVER ERROR
Content: { error : "INTERNAL SERVER ERROR." }

*Sign up
Users sign up

URL
/users/sign-up

Method:
POST

URL Params
None

Headers
none

Req Body:
email: string
password: string

Data Params
None

Success Response:
Code: 201
Content: {
    "access_token": string,
}
Error Response:

Code: 500 INTERNAL SERVER ERROR
Content: { error : "INTERNAL SERVER ERROR." }

*Google sign in
Users sign in through third party api (google)

URL
/users/googleSignIn

Method:
POST

URL Params
None

Headers
none

Req Body:
email: string
password: string

Data Params
None

Success Response:
Code: 201
Content: {
    "access_token": string,
}
Error Response:

Code: 500 INTERNAL SERVER ERROR
Content: { error : "INTERNAL SERVER ERROR." }

*Create Task
Create json data about a single task.

URL
/tasks

Method:
POST

URL Params
None

Headers
required:
access_token

Data Params
None

Success Response:
Code: 201
Content: {
    "id": 5,
    "title": "add CRUD",
    "description": "menambahkan fitur CRUD pada aplikasi",
    "progress": "backlog",
    "updatedAt": "2020-10-27T11:25:23.840Z",
    "createdAt": "2020-10-27T11:25:23.840Z",
    "UserId": 1
}
Error Response:

Code: 400 BAD REQUEST
Content: { error : "<field> Harus Terisi!" }
OR

Code: 500 INTERNAL SERVER ERROR
Content: { error : "INTERNAL SERVER ERROR." }

*Delete task
Delete json data about a single task.

URL
/tasks/:id

Method:
DELETE

URL Params
id:[integer]

Headers
required:
access_token

Data Params
None

Success Response:
Code: 204
Content: {"Data success to delete"}

Error Response:
Code: 500 INTERNAL SERVER ERROR
Content: { error : "INTERNAL SERVER ERROR." }

Code: 401 NOT AUTHORIZED
Content: { message : "sorry, you are not authorized." }

*Show task
Returns json data about a single task.

URL
/tasks/:id

Method:
GET

URL Params
Required:
id=[integer]

Headers
required:
access_token

Data Params
None

Success Response:
Code: 200
Content: {
    "id": 5,
    "title": "add CRUD",
    "description": "menambahkan fitur CRUD pada aplikasi",
    "progress": "done",
    "updatedAt": "2020-10-27T11:25:23.840Z",
    "createdAt": "2020-10-27T11:25:23.840Z",
    "UserId": 1
}
Error Response:
Code: 500 INTERNAL SERVER ERROR
Content: { error : "500 INTERNAL SERVER ERROR." }

*Update task
Changing the status of one task.

URL
/tasks/:id

Method:
PATCH

URL Params
required:
id=[integer]

Headers
required:
access_token

Data Params
None

Success Response:
Code: 200
Content: {
    "id": 5,
    "title": "add CRUD",
    "description": "menambahkan fitur CRUD pada aplikasi",
    "progress": "done",
    "updatedAt": "2020-10-27T11:25:23.840Z",
    "createdAt": "2020-10-27T11:25:23.840Z",
    "UserId": 1
}
Error Response:

Code: 500 INTERNAL SERVER ERROR
Content: { error : "INTERNAL SERVER ERROR." }

Code: 401 NOT AUTHORIZED
Content: { message : "sorry, you are not authorized." }

*Get task
Get all list of task.

URL
/tasks

Method:
GET

URL Params
none

Headers
required:
access_token

Data Params
None

Success Response:
Code: 200
Content:
        {
            "id": 4,
            "title": "add LOGIN",
            "description": "menambahkan fitur LOGIN pada aplikasi",
            "progress": "development",
            "updatedAt": "2020-10-27T11:25:23.840Z",
            "createdAt": "2020-10-27T11:25:23.840Z",
            "UserId": 1
        },
        {
            "id": 5,
            "title": "add CRUD",
            "description": "menambahkan fitur CRUD pada aplikasi",
            "progress": "backlog",
            "updatedAt": "2020-10-27T11:25:23.840Z",
            "createdAt": "2020-10-27T11:25:23.840Z",
            "UserId": 1
        }
Error Response:

Code: 500 INTERNAL SERVER ERROR
Content: { error : "INTERNAL SERVER ERROR." }


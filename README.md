# kanban-app
Kanban apps let you visualize, organize and manage work in the best possible way.

** RESTful Endpoints **
----
- `POST /register`
- `POST /login`
- `POST /tasks`
- `GET /tasks`
- `PUT /tasks/:id`
- `DELETE /tasks/:id`

** Register User **
----
    Write a new User data to database

** URL **
----
`http://localhost:3000/register`

** Method: **
----
`POST`

** Header: **
----
none

** Required Data Body: **
----
{
    "email": "arifmr@gmail.com",
    "password": "das123asd"
}


**  Success Response:  ** 
----
Code: 200
Content:
{
    "email": "arifmr@gmail.com",
    "id": 1
}

** Error Response: **
----
Code: 400 BAD REQUEST
Content:
{
    "message": [
        "Email must not be empty",
        "Email must be an email formatted",
        "Password must not be empty"
    ]
}


** Login User **
----
    Return json data about access_token

** URL **
----
`http://localhost:3000/login`

** Method: **
----
`POST`

** Header: **
----
none

** Required Data Body: **
----
{
    "email": "arifmr@gmail.com",
    "password": "das123asd"
}


**  Success Response:  ** 
----
Code: 200
Content:
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhcmlmbXJAZ21haWwuY29tIiwiaWF0IjoxNjA3MDI0NTA4fQ.EYZq9Vokv53rERYxaiXbtXzMxAFYS3ascaeHZoUN2F8"
}

** Error Response: **
----
Code: 400 BAD REQUEST
Content: 
{
    "status": 400,
    "message": "Invalid email/password"
}



** Add Task **
----
    Write a new task to database

** URL **
----
`http://localhost:3000/tasks`

** Method: **
----
`POST`

** Header: **
----
`access token`: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhcmlmbXJAZ21haWwuY29tIiwiaWF0IjoxNjA3MDI0ODc5fQ.52lpTN_ZlfIOTajzmq3gsgRbyQlvT4BruHKAXJ1ppLk"

** Required Data Body: **
----
{
    "title": "Nugas",
    "category": "Back-Log"
}


**  Success Response:  ** 
----
Code: 200
Content:
{
    "id": 1,
    "title": "Nugas",
    "category": "Back-Log",
    "UserId": 1,
    "updatedAt": "2020-12-03T19:49:40.367Z",
    "createdAt": "2020-12-03T19:49:40.367Z"
}

** Error Response: **
----
Code: 401 UNAUTHORIZED
Content: 
{
    "status": 401,
    "message": "Please Login First"
}

OR

Code: 400 BAD REQUEST
Content:
{
    "message": [
        "Title must not be empty",
        "Category must not be empty"
    ]
}



** GET Task **
----
    Return json data about all tasks

** URL **
----
`http://localhost:3000/tasks`

** Method: **
----
`GET`

** Header: **
----
`access token`: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhcmlmbXJAZ21haWwuY29tIiwiaWF0IjoxNjA3MDI0ODc5fQ.52lpTN_ZlfIOTajzmq3gsgRbyQlvT4BruHKAXJ1ppLk"

** Required Data Body: **
----
none


**  Success Response:  ** 
----
Code: 200
Content:
[
    {
        "id": 1,
        "title": "Tidur",
        "category": "Done",
        "createdAt": "2020-12-03T19:49:40.367Z",
        "updatedAt": "2020-12-03T20:05:05.707Z",
        "UserId": 1,
        "User": {
            "email": "arifmr@gmail.com"
        }
    },
    {
        "id": 2,
        "title": "Makan",
        "category": "Back-Log",
        "createdAt": "2020-12-03T20:25:42.155Z",
        "updatedAt": "2020-12-03T20:25:42.155Z",
        "UserId": 1,
        "User": {
            "email": "arifmr@gmail.com"
        }
    },
    {
        "id": 3,
        "title": "Minum",
        "category": "Back-Log",
        "createdAt": "2020-12-03T20:27:52.824Z",
        "updatedAt": "2020-12-03T20:27:52.824Z",
        "UserId": 1,
        "User": {
            "email": "arifmr@gmail.com"
        }
    },
    {
        "id": 4,
        "title": "Ngoding",
        "category": "Doing",
        "createdAt": "2020-12-03T20:28:05.391Z",
        "updatedAt": "2020-12-03T20:28:05.391Z",
        "UserId": 1,
        "User": {
            "email": "arifmr@gmail.com"
        }
    },
    {
        "id": 5,
        "title": "Mandi",
        "category": "To-Do",
        "createdAt": "2020-12-03T20:28:24.651Z",
        "updatedAt": "2020-12-03T20:28:24.651Z",
        "UserId": 1,
        "User": {
            "email": "arifmr@gmail.com"
        }
    }
]

** Error Response: **
----
Code: 401 UNAUTHORIZED
Content: 
{
    "status": 401,
    "message": "Please Login First"
}




** Update Task **
----
    Update a task and then send it to the database

** URL **
----
`http://localhost:3000/tasks/1`

** Method: **
----
`PUT`

** Header: **
----
`access token`: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhcmlmbXJAZ21haWwuY29tIiwiaWF0IjoxNjA3MDI0ODc5fQ.52lpTN_ZlfIOTajzmq3gsgRbyQlvT4BruHKAXJ1ppLk"

** Required Data Body: **
----
{
    "title": "Tidur",
    "category": "Done"
}


**  Success Response:  ** 
----
Code: 200
Content:
{
    "id": 1,
    "title": "Tidur",
    "category": "Done",
    "createdAt": "2020-12-03T19:49:40.367Z",
    "updatedAt": "2020-12-03T20:05:05.707Z",
    "UserId": 1
}

** Error Response: **
----
Code: 401 UNAUTHORIZED
Content: 
{
    "status": 401,
    "message": "Please Login First"
}

OR

Code: 400 BAD REQUEST
Content:
{
    "message": [
        "Title must not be empty",
        "Category must not be empty"
    ]
}

OR

Code: 404 DATA NOT FOUND
Content:
{
    "status": 404,
    "message": "Data Not Found"
}



** Delete Task **
----
    Remove a task data from the database

** URL **
----
`http://localhost:3000/tasks/1`

** Method: **
----
`DELETE`

** Header: **
----
`access token`: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhcmlmbXJAZ21haWwuY29tIiwiaWF0IjoxNjA3MDI0ODc5fQ.52lpTN_ZlfIOTajzmq3gsgRbyQlvT4BruHKAXJ1ppLk"

** Required Data Body: **
----
none


**  Success Response:  ** 
----
Code: 200
Content:
[
    {
        "id": 1,
        "title": "Nugas",
        "category": "Back-Log",
        "createdAt": "2020-12-03T19:49:40.367Z",
        "updatedAt": "2020-12-03T19:49:40.367Z",
        "UserId": 1
    }
]

** Error Response: **
----
Code: 401 UNAUTHORIZED
Content: 
{
    "status": 401,
    "message": "Please Login First"
}

OR

Code: 404 DATA NOT FOUND
Content:
{
    "status": 404,
    "message": "Data Not Found"
}
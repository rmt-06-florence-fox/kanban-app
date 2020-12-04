# kanban-app

## Users Routes

### POST /register : Create new user

    - Request Header
        Not required.

    - Request Body

        {
            "email": "<user's email>",
            "password": "<user's password>"
        }

    - Response 201: Created
        {
            "email": "<user's email>",
            "id": "<id given by system>"
        }

    - Response 400: Bad Request
        [
            {
                "message": "Email field must be in email format! e.g: yourname@example.com"
            },
            {
                "message": "Email field can't be empty!"
            }
        ]

    - Response 500: Internal server error
        {
            "message": "Internal Server Error. <show error>"
        }

### POST /login : login to user's account

    - Request Header
        Not required.

    - Request Body
        {
            "email": "<user's email>",
            "password": "<user's password>"
        }

    - Response 200: OK
        {
            "access_token": "<user's token>"
        }

    - Response 400: Bad Request
        {
            "message": "Invalid email/password"
        }

    - Response 500: Internal server error
        {
            "message": "Internal Server Error"
        }

### POST /googleLogin : login via google

    - Request Body
        {
            "googleToken": "<google user's id_token>"
        }

    - Response 200: OK
        {
            "access_token": "<user's token>"
        }

    - Response 500: Internal server error
        {
            "message": "Internal Server Error."
        }

## Tasks Routes

### POST /tasks : Create new task list

    - Request Header
        {
            "access_token":"<access token>"
        }


    - Request Body
        {
            "title": "<task title>",
            "description": "<description of task>",
            "category": "<category of task>",
        }

    - Response 201: Created
        {
            "id": <given id by system>,
            "title": "<posted task title>",
            "description": "<posted description>",
            "category": "<posted category>",
            "createdAt": "<date given by system>",
            "updatedAt": "<date given by system>"
        }

    - Response 400: Bad Request
        [
            {
                "message": "Title is required!"
            },
            {
                "message": "Description is required!"
            },
            {
                "message": "Category is required!"
            }
        ]

    - Response 401: Unauthorized
        {
            "message": "Please Login First"
        }

    - Response 500: Internal server error
        {
            "message": `Internal Server Error.`
        }

### GET /tasks : show all task lists.

    - Request Header
        {
            "access_token":"<access token>"
        }

    - Request Body
        Not required.

    - Response 200: OK
        [
            {
                "id": 1,
                "title": "Let's code edited ",
                "description": "Build simple tasks app",
                "status": "On progress",
                "due_date": "2020-11-25",
                "UserId": 1,
                "createdAt": "2020-11-25T06:38:58.520Z",
                "updatedAt": "2020-11-25T08:26:26.594Z"
            },
            {
                "id": 2,
                "title": "Belajar coding",
                "description": "Belajar coding sangat menyenangkan",
                "status": "Coming soon",
                "due_date": "2020-11-28",
                "UserId": 1,
                "createdAt": "2020-11-27T16:47:03.402Z",
                "updatedAt": "2020-11-27T16:47:03.402Z"
            }
        ]

    - Response 401: Unauthorized
        {
            "message": "Please Login First"
        }
    - Response 500: Internal server error
        {
            "message": `Internal Server Error. <show error>`
        }

### GET /tasks/:id : show a selected task list based on id

    - Request Header
        {
            "access_token":"<access token>"
        }

    - Request Parameter
        {
            "id": <selected task list id>
        }

    - Request Body
        Not required.

    - Response 200: OK
        {
            "id": 1,
            "title": "Let's code edited ",
            "description": "Build simple tasks app",
            "status": "On progress",
            "due_date": "2020-11-25",
            "UserId": 1,
            "createdAt": "2020-11-25T06:38:58.520Z",
            "updatedAt": "2020-11-25T08:26:26.594Z"
        }

    - Response 401: Unauthorized
        {
            "message": "Please Login First"
        }

    - Response 404: Not Found
        {
            message: `Error not found.`
        }

    - Response 500: Internal server error
        {
            "message": `Internal Server Error.`
        }

### PUT /tasks/:id : update a task list

    - Request Header
        {
            "access_token":"<access token>"
        }

    - Request Parameter
        {
            "id": <selected task list id>
        }

    - Request Body
        {
            "title": "<task title>",
            "description": "<description of task>",
            "status": "<status of task completion>",
            "due_date": "<deadline of task>"
        }

    - Response 200: OK
        {
            "id": <selected task list id>,
            "title": "<updated task title>",
            "description": "<updated description>",
            "status": "<updated status>",
            "due_date": "<updated deadline of task>",
            "createdAt": "<date given by system>",
            "updatedAt": "<date given by system>"
        }

    - Response 401: Unauthorized
        {
            "message": "Please Login First"
        }

    - Response 404: Not Found
        {
            "message": `Error not found.`
        }

    - Response 400: Bad Request
        [
            {
                "message": "Title field can't be empty!"
            },
            {
                "message": "Description field can't be empty!"
            },
            {
                "message": "Status field can't be empty!"
            },
            {
                "message": "Due date field can't be empty!"
            },
            {
                "message": "Please use date format MM/DD/YYYY!"
            },
            {
                "message": "Due Date can be filled with date after today."
            }
        ]

    - Response 500: Internal server error
        {
            "message": `Internal Server Error.`
        }

### PATCH /tasks/:id : update status a task list

    - Request Header
        {
            "access_token":"<access token>"
        }

    - Request Parameter
        {
            "id": <selected task list id>
        }

    - Request Body
        {
            "status": "<status of task completion>",
        }

    - Response 200: OK
        {
            "id": 1,
            "title": "Let's code edited v.1",
            "description": "Build simple tasks app",
            "status": "Coming soon",
            "due_date": "2020-11-28",
            "UserId": 1,
            "createdAt": "2020-11-25T06:38:58.520Z",
            "updatedAt": "2020-11-27T17:24:30.543Z"
        }

    - Response 401: Unauthorized
        {
            "message": "Please Login First"
        }

    - Response 404: Not Found
        {
            "message": `Error not found.`
        }

    - Response 400: Bad Request
        [
            {
                "message": "Status field can't be empty!"
            }
        ]

    - Response 500: Internal server error
        {
            "message": `Internal Server Error.`
        }

### DELETE /tasks/:id : delete a selected task list based on id

    - Request Header
        {
            "access_token":"<access token>"
        }

    - Request Parameter
        {
            "id": <selected task list id>
        }

    - Request Body
        Not required.

    - Response 200: OK
        {
            "message": "task success to delete"
        }

    - Response 401: Unauthorized
        {
            "message": "Please Login First"
        }

    - Response 404: Not Found
        {
            "message": `Error not found.`
        }

    - Response 500: Internal server error
        {
            "message": `Internal Server Error.`
        }

## Calendar Routes

### GET /calendar

    - Request Header
        {
            "access_token":"<access token>"
        }

    - Response 200: OK
        [
            {
                "name": "New Year's Day",
                "description": "New Year’s Day is the first day of the year, or January 1, in the Gregorian calendar.",
                "country": {
                    "id": "id",
                    "name": "Indonesia"
                },
                "date": {
                    "iso": "2020-01-01",
                    "datetime": {
                        "year": 2020,
                        "month": 1,
                        "day": 1
                    }
                },
                "type": [
                    "National holiday"
                ],
                "locations": "All",
                "states": "All"
            },
            {
                "name": "Chinese Lunar New Year's Day",
                "description": "Chinese New Year is the first day of the Chinese calendar, which is a lunisolar calendar mainly used for traditional celebrations.",
                "country": {
                    "id": "id",
                    "name": "Indonesia"
                },
                "date": {
                    "iso": "2020-01-25",
                    "datetime": {
                        "year": 2020,
                        "month": 1,
                        "day": 25
                    }
                },
                "type": [
                    "National holiday"
                ],
                "locations": "All",
                "states": "All"
            }
        ]

    - Response 401: Unauthorized
        {
            "message": "Please Login First"
        }

    - Response 500: Internal server error
        {
            "message": `Internal Server Error.`
        }

API DOCUMENTATION VIA POSTMAN (https://documenter.getpostman.com/view/13590780/TVmMgdUs)

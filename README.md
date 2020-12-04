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
                "title": "membuat kanban-app",
                "description": "membuat kanban app dari awal hingga akhir",
                "category": "Backlog",
                "UserId": 1,
                "createdAt": "2020-12-02T23:25:14.483Z",
                "updatedAt": "2020-12-02T23:25:14.483Z"
            },
            {
                "id": 2,
                "title": "mengerjakan kanban-app",
                "description": "mengerjakan bagian server kanban app dari awal hingga akhir",
                "category": "Todo",
                "UserId": 1,
                "createdAt": "2020-12-02T23:29:10.696Z",
                "updatedAt": "2020-12-02T23:29:10.696Z"
            },
            {
                "id": 4,
                "title": "kanban-app",
                "description": "done bagian server dan client kanban app dari awal hingga akhir",
                "category": "Done",
                "UserId": 1,
                "createdAt": "2020-12-02T23:30:08.981Z",
                "updatedAt": "2020-12-02T23:30:08.981Z"
            },
            {
                "id": 3,
                "title": "finishing kanban-app",
                "description": "finishing bagian server dan client kanban app dari awal hingga akhir",
                "category": "Doing",
                "UserId": 1,
                "createdAt": "2020-12-02T23:29:42.948Z",
                "updatedAt": "2020-12-02T23:29:42.948Z"
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
            "title": "membuat kanban-app",
            "description": "membuat kanban app dari awal hingga akhir",
            "category": "Backlog",
            "UserId": 1,
            "createdAt": "2020-12-02T23:25:14.483Z",
            "updatedAt": "2020-12-02T23:25:14.483Z"
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
            "category": "<category of task>",
        }

    - Response 200: OK
        {
            "id": <selected task list id>,
            "title": "<updated task title>",
            "description": "<updated description>",
            "category": "<updated category>",
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
                "message": "Category field can't be empty!"
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

API DOCUMENTATION VIA POSTMAN (https://documenter.getpostman.com/view/13590780/TVmMgdUs)

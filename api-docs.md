# Kanban-Alfa

​
List of available endpoints:
​
- `POST /register`
- `POST /login`
- `POST /googleLogin`
- `POST /tasks`
- `GET /tasks`
- `GET /tasks/:id`
- `PUT /tasks/:id`
- `PATCH /tasks/:id`
- `DELETE /tasks/:id`

### POST /register

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "id": "integer",
  "email": "string"
}
```

- status: 400
- body:
  ​

```json
{
    "msg": "Email Has Been Taken"
}
```



### POST /login

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
    "access_token": "jwt string",
    "UserId": "integer"
}
```
- status: 400
- body:
  ​

```json
{
    "msg": "Invalid email/password"
}
```

### POST /googleLogin

Request:

- data:

```json
{
  "token": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
    "access_token": "jwt string",
    "UserId": "integer"
}
```

### GET /tasks


Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
{
    "allTask": [
        {
            "id": 2,
            "state": "Backlog",
            "title": "MINUM",
            "due_date": "2020-12-25T00:00:00.000Z",
            "UserId": 1,
            "createdAt": "2020-12-03T07:14:42.274Z",
            "updatedAt": "2020-12-03T15:35:32.746Z"
        }
    ]
}
```
- status: 500
- body:

```json
{
    "msg": "invalid token"
}
```

### POST /tasks


Request:

- headers: access_token (string)

- data:
```json
{
    "state" : "Done",
    "title" : "DUDUK",
    "due_date" : null //not required
}
```

Response:

- status: 201
- body:

```json
{
    "newTask": {
        "id": 12,
        "state": "Done",
        "title": "DUDUK",
        "due_date": null,
        "UserId": 4,
        "updatedAt": "2020-12-04T13:14:38.829Z",
        "createdAt": "2020-12-04T13:14:38.829Z"
    }
}
```
- status: 500
- body:

```json
{
    "msg": "insert one state"
}
```

### GET /tasks/:id

Params:
- id : integer

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
{
    "oneTask": {
        "id": 12,
        "state": "Done",
        "title": "DUDUK",
        "due_date": null,
        "UserId": 4,
        "createdAt": "2020-12-04T13:14:38.829Z",
        "updatedAt": "2020-12-04T13:14:38.829Z"
    }
}
```

### PUT /tasks/:id

Params:
- id : integer

Request:

- headers: access_token (string)

- data : 

```json
{
    "state" : "Done",
    "title" : "DUDUK"
}
```

Response:

- status: 200
- body:

```json
{
    "editedTask": [
        1,
        [
            {
                "id": 12,
                "state": "Done",
                "title": "DUDUK",
                "due_date": null,
                "UserId": 4,
                "createdAt": "2020-12-04T13:14:38.829Z",
                "updatedAt": "2020-12-04T13:17:36.061Z"
            }
        ]
    ]
}
```

### PATCH /tasks/:id

Params:
- id : integer

Request:

- headers: access_token (string)

- data : 
```json
{
    "state" : "Done"
}
```

Response:

- status: 200
- body:

```json
{
    "patchedTask": [
        1,
        [
            {
                "id": 12,
                "state": "Done",
                "title": "DUDUK",
                "due_date": null,
                "UserId": 4,
                "createdAt": "2020-12-04T13:14:38.829Z",
                "updatedAt": "2020-12-04T13:21:42.911Z"
            }
        ]
    ]
}
```

### DELETE /tasks/:id

Params:
- id : integer

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
{
    "msg": "task deleted"
}
```

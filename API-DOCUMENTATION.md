List of available endpoints:
​

---
- `POST /login`
- `POST /register`
- `GET /categories`
- `POST /categories`
- `DELETE /categories`
- `POST /tasks`
- `GET /tasks/:id`
- `PUT /tasks/:id`
- `PATCH /tasks/:id`
- `DELETE /tasks/:id`
---
### POST /login

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Success Response:

- status: 200
- body:
  ​

```json
{
  "access_token": "jsonwebtoken string"
}
```

Error Response:

- status: 400
- body:
  ​

```json
{
  "message": "Invalid Email"
}
```
OR
```json
{
  "message": "Invalid Password"
}
```
### POST /register

Request:

- data:

```json
{
  "name": "string",
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
  "id": 2,
  "email": "test@gmail.com"
}
```

### GET /categories

description:
get all categories including tasks

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
{
  "category": [
        {
            "id": 41,
            "name": "Todo",
            "createdAt": "2020-12-17T18:40:33.600Z",
            "updatedAt": "2020-12-17T18:40:33.600Z",
            "Tasks": [
                {
                    "id": 61,
                    "name": "Belajar",
                    "UserId": 18,
                    "CategoryId": 41,
                    "createdAt": "2020-12-17T18:40:44.995Z",
                    "updatedAt": "2020-12-17T18:40:44.995Z"
                }
            ]
        },
        {
            "id": 42,
            "name": "Ongoing",
            "createdAt": "2020-12-17T18:40:38.192Z",
            "updatedAt": "2020-12-17T18:40:38.192Z",
            "Tasks": []
        }
    ]
}
```

### POST /categories

description:
add new category

Request:
- headers: access_token (string)
- data:

```json
{
  "name": "string"
}
```

Response:

- status: 200
- body:

```json
{
    "id": 3,
    "name": "Finish",
    "updatedAt": "2020-12-17T18:46:58.205Z",
    "createdAt": "2020-12-17T18:46:58.205Z"
}
```

### DELETE /categories/:id

description:
to delete category

Request:

- headers: access_token (string)
- params:
  - id: "integer" required

Success Response:

- status: 200
- body:

```json
{
  "message": "Category success to delete"
}
```
Error Response:

- status: 404
- body:

```json
{
  "message": "Id not found"
}
```
### POST /tasks

description: add new task

Request:

- headers: access_token (string)
- data:

```json
{
  "name": "string",
  "CategoryId": "integer"
}
```
Response:

- status: 201
- body:

```json
{
    "id": 10,
    "name": "Membuat REST API",
    "UserId": 2,
    "CategoryId": 5,
    "updatedAt": "2020-12-17T18:57:43.776Z",
    "createdAt": "2020-12-17T18:57:43.776Z"
}
```

### GET /tasks/:id

description: get task by id

Request:

- headers: access_token (string)
- params:
  - id: "integer" required

Success Response:

- status: 200
- body:

```json
{
    "task": {
        "id": 10,
        "name": "Membuat REST API",
        "UserId": 2,
        "CategoryId": 5,
        "createdAt": "2020-12-17T18:57:43.776Z",
        "updatedAt": "2020-12-17T18:57:43.776Z"
    }
}
```
Error Response:

- status: 404
- body:

```json
{
    "message": "Data not found"
}
```
### PUT /tasks/:id

description: to update task name and category

Request:

- headers: access_token (string)
- params:
  - id: "integer" required
- data:

```json
{
  "name": "string",
  "CategoryId": "integer"
}
```

Success Response:

- status: 200
- body:

```json
{
    "id": 10,
    "name": "Membuat REST API Doc",
    "UserId": 2,
    "CategoryId": 6,
    "createdAt": "2020-12-17T18:57:43.776Z",
    "updatedAt": "2020-12-17T18:57:43.776Z"
}
```
Error Response:

- status: 404
- body:

```json
{
    "message": "Id not found"
}
```
### PATCH /tasks/:id

description: to update category

Request:

- headers: access_token (string)
- params:
  - id: "integer" required
- data:

```json
{
  "CategoryId": "integer"
}
```

Success Response:

- status: 200
- body:

```json
{
    "id": 10,
    "name": "Membuat REST API Doc",
    "UserId": 2,
    "CategoryId": 2,
    "createdAt": "2020-12-17T18:57:43.776Z",
    "updatedAt": "2020-12-17T18:57:43.776Z"
}
```
Error Response:

- status: 404
- body:

```json
{
    "message": "Id not found"
}
```
### DELETE /tasks/:id

description: to delete task

Request:

- headers: access_token (string)
- params:
  - id: "integer" required

Success Response:

- status: 200
- body:

```json
{
    "message": "Task success to delete"
}
```
Error Response:

- status: 404
- body:

```json
{
    "message": "Id not found"
}
```

# Kanban App

DEMO
[Kanban App](https://kanbanapp-24c17.web.app/)

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /task`
- `GET /task`
- `PUT /task/:id`
- `DELETE /task/:id`

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
  "access_token": "string"
}
```

### POST /tasks

Request:

- headers: access_token

- data:

```json
{
  "name": "Coding",
  "description": "Coding server configuration ",
  "category": "Development"
}
```

​Response:

- status: 201
- body:
  ​

```json
{
  "tasks": {
    "id": 1,
    "name": "Coding",
    "description": "Coding server configuration",
    "category": "Development",
    "userId": 1,
    "updatedAt": "2020-12-04T03:47:14.916Z",
    "createdAt": "2020-12-04T03:47:14.916Z"
  }
}
```

### GET /tasks

Description: Get all task

Request:

- headers:
  - access_token: string

Response:

- status: 200
- body:
  ​

```json
[
    {
    "id": 1,
    "name": "Coding",
    "description": "Coding server configuration",
    "category": "Development",
    "userId": 1,
    "updatedAt": "2020-12-04T03:47:14.916Z",
    "createdAt": "2020-12-04T03:47:14.916Z"
  },
    {
    "id": 2,
    "name": "Debugging",
    "description": "Debugging server controller",
    "category": "Backlog",
    "userId": 1,
    "updatedAt": "2020-12-04T03:47:14.916Z",
    "createdAt": "2020-12-04T03:47:14.916Z"
  },
    ...
]
```

### PUT /tasks/:id

description:
Edit one task category

Request:

- headers: access_token

- data:

```json
{
  "id": 1,
  "name": "Coding",
  "description": "Coding server configuration"
}
```

​Response:

- status: 200
- body:
  ​

```json
{
  {
    "id": 1,
    "name": "Coding",
    "description": "Coding server configuration",
    "updatedAt": "2020-12-04T03:47:14.916Z",
    "createdAt": "2020-12-04T03:47:14.916Z"
  }
}
```

### DELETE /tasks/:id

description:
Delete one task from selected category

Request:

- headers: access_token

- data:

```json
{
  "id": 1
}
```

​Response:

- status: 200
- body:
  ​

```json
{
  "message": "delete success"
}
```

# My-Gallery

​
List of available endpoints:
​
- `POST /user/register`
- `POST /user/login`
- `GET /tasks`

### POST /user/register

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

### POST /user/login

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
    "access_token": "jwt string"
}
```

### GET /tasks

description: 
  get all current tasks 

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
{
  "photos": [
    {
      "id": 1,
      "imageUrl": "https://unsplash.com/photos/yC-Yzbqy7PY",
      "UserId": 1,
      "createdAt": "2020-06-12T16:22:40.469Z",
      "updatedAt": "2020-06-12T16:22:40.469Z"
    }
  ]
}
```

### POST /tasks

description: 
  create new tasks 

Request:

- headers: access_token (string)
- body: {
  title (string)
  category (string)
}

Response:

- status: 201
- body:

```json
{
  "Sucessfully added task"
}
```

### PUT /tasks

description: 
  update tasks 

Request:

- headers: access_token (string)
- body: {
  title (string)
  category (string)
}

Response:

- status: 200
- body:

```json
{
  "Sucessfully upated task"
}
```

### DELETE /tasks

description: 
  delete tasks 

Request:

- headers: access_token (string)

Response:

- status: 201
- body:

```json
{
  "Sucessfully deleted task"
}
```
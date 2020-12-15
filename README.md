# kanban-app


# .env
```
SECRET=rahasiaumum
GID=491928560190-5j444ikfnl28j4ksdan45bfvdaa5hvbd.apps.googleusercontent.com
G_PASS=bebasajalah
```

# deploy site
```
{
    client: "https://kanban-61d47.web.app",
    server: "https://kanban-sky.herokuapp.com"
}
```


### POST /tasks
> create task

_request headers_
```
{
    "access_token": "<from your access_token>"
}
```

_request body_
```
{
    "title": "<insert your title>"
}
```

_response (201)_
```
{
    "id": <id auto increment from table Tasks>,
    "title": "<from your enter title>",
    "UserId": <from loggedInUser by id>,
    "updatedAt": "<from New Date()>",
    "createdAt": "<from New Date()>",
    "CategoryId": <from hook(CategoryId auto assign to 1)>
}
```

_response (400 - bad request)_
```
{
    "status": 400,
    "message": "Failed to decode param '%'"
}
```
---

### GET /tasks 
> Show All Task

_request headers_
```
{
    "access_token": "<from your access_token>"
}
```

_request body_
```
no required
```

_response (200)_
```
[
    {
        "id": <id auto increment from table Tasks>,
        "title": "<your title>",
        "UserId": <from loggedInUser by id>,
        "CategoryId": <from hook(CategoryId auto assign to 1)>,
        "createdAt": "<from New Date()>",
        "updatedAt": "<from New Date()>",
        "User": {
            "id": <id auto increment from table Users>,
            "name": "<your name>",
            "email": "<your email>",
            "password": "<your password>",
            "createdAt": "<from New Date()>",
            "updatedAt": "<from New Date()>"
        },
        "Category": {
            "id": <id auto increment from table Categories>,
            "categoryName": "<your categoryName>",
            "createdAt": "<from New Date()>",
            "updatedAt": "<from New Date()>"
        }
    }
]
```

_response (400 - bad request)_
```
{
    "status": 400,
    "message": "Failed to decode param '%'"
}
```
---

### PUT /tasks/:id
> update task by id

_request headers_
```
{
    "access_token": "<from your access_token>"
}
```

_request body_
```
{
  "title": "<insert title>",
  "CategoryId": "<select CategoryId by CategoryName>"
}
```

_response (200)_
```
{
    "id": <id from table Tasks>,
    "title": "<your insert title>",
    "UserId": <from loggedInUser by id>,
    "CategoryId": <your select CategoryId>,
    "createdAt": "<from New Date()>",
    "updatedAt": "<from New Date()>"
}
```

_response (400 - bad request)_
```
{
    "status": 400,
    "message": "Failed to decode param '3%'"
}
```
---

### PATCH /tasks/:id
> update category by id

_request headers_
```
{
    "access_token": "<from your access_token>"
}
```

_request body_
```
{
    "CategoryId": "<select CategoryId by CategoryName>"
}
```

_response (200)_
```
{
    "id": <id from table Tasks>,
    "title": "<your insert title>",
    "UserId": <from loggedInUser by id>,
    "CategoryId": <your select CategoryId>,
    "createdAt": "<from New Date()>",
    "updatedAt": "<from New Date()>"
}
```

_response (400 - bad request)_
```
{
    "status": 400,
    "message": "Failed to decode param '3%'"
}
```
---

### DELETE /tasks/:id
> update category by id

_request headers_
```
{
    "access_token": "<from your access_token>"
}
```

_request body_
```
no required
```

_response (200)_
```
{
    "message": `task with id: ${+req.params.id}, success to deleted`
}
```

_response (400 - bad request)_
```
{
    "status": 400,
    "message": "Failed to decode param '1%'"
}
```

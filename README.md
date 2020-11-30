# kanban-app

Simple kanban app built with Vue.js, Express, Sequelize

### DEPLOY SITE: 
* https://kanban-trolle.herokuapp.com/ (SERVER)
* https://kanban-trolle.web.app/ (CLIENT)

#

## API DOCUMENTATION:

#

#### POST /signup

_Request Body_
```
{
    "name": "coba",
    "email": "coba@mail.com",
    "password": "cobacoba"
}
```

_Response (201 - Created)_
```
{
    "id": 1
    "name": "coba",
    "email": "coba@mail.com"
    "password" : "$2a$09$8B0PlxKr/70fdMHm8kgg3e8aoADBT.sWyq0ntcvHmd3M44eo4rKqi"
}

```

_Response (400 - Bad Request)_
```
{
    "message": "Email has been already used"
}

```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}

```
#
#### POST /signin

_Request Body_
```
{
    "email": "coba@mail.com",
    "password": "cobacoba"
}
```

_Response (200)_
```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJjb2JhQG1haWwuY29tIiwiaWF0IjoxNjA2NDQ1NDY5fQ.sduE7JVaPB1ZcQ9GssXufBpHOjxYx2jicV9ADiAoR6o"
}

```

_Response (400 - Bad Request)_
```
{
    "message": "Email or password is incorrect"
}

```

_Response (500 - Internal Server Error)_
```
{
    "message": "Internal Server Error"
}

```
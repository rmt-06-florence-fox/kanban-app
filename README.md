# kanban-app


## 1.User Register
* URL
  /register

* Method
 `POST`

* URL Params
  None

* Data Params

```

  email: "email",
  password: "password"

headers:{access_token}

```

* Success Response
  Code: `201 Created`
  Content: 
  ```
  
    id: id,
    email: email
  
  ```

* Error Response
  code: `500 Internal Server Error`
  content:
  ```
  {
    msg: 'Internal Server Error'
  }
  ```

## 2.User Login
* URL
  /Login

* Method
 `POST`

* URL Params
  None

* Data Params

```
  email: "email"
  password: "password"


```

* Success Response
  Code: `201 Created`
  Content: 
  ```
  
    access_token : "access_token"
  
  ```

* Error Response
  code: `400 Bad Request`
  content:
  ```
  
    msg: "Wrong email/password"
  
  ```

  code: `400 Bad Request`
  content:
  ```
  
    msg: "Wrong email/password"
  
  ```

  code: `500 Internal Server Error`
  content:
  ```
  {
    msg: `Internal server error`
  }
  ```



## 3. Oath
* URL
  /googleLogin

* Method
 `POST`

* URL Params
  None

* Data Params

```
  GoogleAccount

```

* Success Response
  Code: `200 OK`
  Content: 
  ```
  
    access_token: "access_token"
  
  ```

* Error Response
  code: `500 Internal Server Error`
  content:
  ```
  
    msg: "Internal Server Error"
  
  ```

## 4. Create Task
* URL
  /tasks/

* Method
 `POST`

* URL Params
  None

* Data Params

  title: "title",
  description: "description",
  category: backlog/todo/doing/done,
  deadline: "deadline"

```
headers:{access_token}

```

* Success Response
  Code: `200 OK`
  Content: 
  ```
  title: "title",
  description: "description",
  category: backlog/todo/doing/done,
  deadline: "deadline"

  ```

* Error Response
  code: `500 Internal Server Error`
  content:
  ```
  
    msg: "Internal Server Error"
  
  ```
## 5. Get All Task
* URL
  /tasks/

* Method
 `GET`

* URL Params
  None

* Data Params
```
none

headers:{access_token}

```

* Success Response
  Code: `200 OK`
  Content: 
  ```
  title: "title",
  description: "description",
  category: backlog/todo/doing/done,
  deadline: "deadline"
  ```

* Error Response
  code: `500 Internal Server Error`
  content:
  ```
  
    msg: "Internal Server Error"
  
  ```
## 6. Get Task by Id
* URL
  /tasks/:id

* Method
 `GET`

* URL Params
  
```
id: "id"

```

* Data Params

```

headers:{access_token}

```

* Success Response
  Code: `200 OK`
  Content: 
  ```
  title: "title",
  description: "description",
  category: backlog/todo/doing/done,
  deadline: "deadline"
  ```

* Error Response
  code: `500 Internal Server Error`
  content:
  ```
  
    msg: "Internal Server Error"
  
  ```
## 7. Edit Task by Id
* URL
  /tasks/:id

* Method
 `PUT`

* URL Params
```
id: "id"

```

* Data Params

```

  title: "title",
  description: "description",
  category: backlog/todo/doing/done,
  deadline: "deadline"

  headers:{access_token}

```

* Success Response
  Code: `200 OK`
  Content: 
  ```
  title: "title",
  description: "description",
  category: backlog/todo/doing/done,
  deadline: "deadline"
  ```

* Error Response
  code: `500 Internal Server Error`
  content:
  ```
  
    msg: "Internal Server Error"
  
  ```

  ## 8. Edit Category by Id
* URL
  /tasks/:id

* Method
 `PATCH`

* URL Params
 ```
id: "id"
```

* Data Params

```
  category: backlog/todo/doing/done,

  headers:{access_token}

```

* Success Response
  Code: `200 OK`
  Content: 
  ```
  id: "id"
  title: "title",
  description: "description",
  category: backlog/todo/doing/done,
  deadline: "deadline"
  ```

* Error Response
  code: `500 Internal Server Error`
  content:
  ```
  
    msg: "Internal Server Error"
  
  ```
## 9. Delete Task
* URL
  /tasks/:id

* Method
 `DELETE`

* URL Params


```
id: "id"
```
* Data Params

```


  headers:{access_token}

```

* Success Response
  Code: `200 OK`
  Content: 
  ```
  task: "task is deleted
  ```

* Error Response
  code: `500 Internal Server Error`
  content:
  ```
  
    msg: "Internal Server Error"
  
  ```


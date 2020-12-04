# Kanban-App

### POST SignUp

##### request

```
- data
{
	email: string,
	password: string
}
```

##### response

```
- status (200)
{
	id: integer,
	email: string
}

- status (500)
{
	msg: string
}
```

### POST SignIn

##### request

```
- data
{
	email: string,
	password: string
}
```

##### response

```
- status (200)
{
	access_token: string
}

- status (500)
{
	msg: string
}
```

### POST Task

##### request

```
- headers
{
	access_token: string
}

- data
{
	title: string,
	description: string
}
```

##### response

```
- status (200)
{
	title: string,
	description: string,
	UserId: integer
}

- status (500)
{
	msg: string
}
```

### GET Task

##### request

```
- headers
{
	access_token: string
}
```

##### response

```
- status (200)
{
	id: integer,
	title: string,
	description: string,
	category: string,
	UserId: integer
}
```

### GET Task Id

##### request

```
- headers
{
	access_token: string
}

- params
{
	TaskId: integer
}
```

##### response

```
- status (200)
{
	id: integer,
	title: string,
	description: string,
	category: string,
	UserId: integer
}
```

### PATCH Task Id

##### request

```
- headers
{
	access_token: string
}

- params
{
	TaskId: integer
}
```

##### response

```
- status (200)
{
	id: integer,
	title: string,
	description: string,
	category: string,
	UserId: integer
}
```

### PUT Task Id

##### request

```
- headers
{
	access_token: string
}

- params
{
	TaskId: integer
}

- body
{
	title: string,
	description: string,
	category: string
}
```

##### response

```
- status (200)
{
	id: integer,
	title: string,
	description: string,
	category: string,
	UserId: integer
}
```

### DELETE Task Id

##### request

```
- headers
{
	access_token: string
}

- params
{
	TaskId: integer
}
```

##### response

```
- status (200)
{
	msg: string
}
```


## dotenv

```
SECRET=aezakmi
```
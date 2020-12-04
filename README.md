# **KANBAN APP**
___


## **Register**
___
* **URL**
- * https://kanban-app-p2.herokuapp.com/register
* **Method:**
* - **POST**
* **URL Params**
>**Required**

* **Data Params**
* - **Required**
* > email = [string][unique]
 password = [string]
* **Success Response**
- * **code:201**
- * **content:**
```
{
    "email": "coba@mail.com"
}
```
* **Error Response**
- * **code:400**
- * **content:**
```
{
    "message": [
        "email require",
        "please insert your correct email",
        "Please Insert Your Password"
    ]
}
```
* **Error Response**
- * **code:500**
- * **content:**
```
{
    "message": 'internal server eror'
}
```
## **Login**
___
* **URL**
* - https://kanban-app-p2.herokuapp.com/register
* **Method:**
* - **POST**
* **Data Params**
* > email = [string]
password = [string]
* **Success Response**
- * **code:200**
- * **content:**
 ```
 {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJjb2JhQG1haWwuY29tIiwiaWF0IjoxNjA2Nzg1OTUyfQ.h1An6Swgb_C47qN7V1fHi9Xg62KqTEbI1ibRVZnQhuc"
}
```
* **Error Response**
- * **code:**
- * **content:**
 
* **Sample Call**
## **Get All Task**
___
* **URL**
- * https://kanban-app-p2.herokuapp.com/task
* **Method:**
* - **GET**
* **headers**
>**Required**
access_token = [string]

* **Success Response**
- * **code:200**
- * **content:**
```
{
    "task": [
        {
            "id": 1,
            "title": "membuat crud Task pada server",
            "Category": ongoing,
            "createdAt": "2020-12-01T05:17:24.872Z",
            "updatedAt": "2020-12-01T05:17:24.872Z",
            "User": "coba@mail.com"
        },
        {
            "id": 2,
            "title": "membuat crud Task pada server",
            "Category": "done",
            "createdAt": "2020-12-01T05:17:47.413Z",
            "updatedAt": "2020-12-01T05:17:47.413Z",
            "User": "coba@mail.com"
        }
    ]
}
```
* **Error Response**
- * **code:401**
- * **content:**
```
{
    "message": "please login"
}
```
- * **code:500**
- * **content:**
```
{
    "message": "internal server eror"
}
```
## **Add New Task**
___
* **URL**
* - https://kanban-app-p2.herokuapp.com/task
* **Method:**
* - **POST**
* **headers**
>**Required**
access_token = [string]

* **Success Response**
- * **code:200**
- * **content:**
```
{
    "newTask": {
        "id": 2,
        "title": "membuat crud Task pada server",
        "Category": "done",
        "UserId": 1,
        "updatedAt": "2020-12-01T05:17:47.413Z",
        "createdAt": "2020-12-01T05:17:47.413Z"
    }
}
```
* **Error Response**
- * **code:401**
- * **content:**
 ```
 {
    "message": "please login"
}
 ```
 - * **code:500**
- * **content:**
 ```
 {
    "message": "internal server eror"
}
 ```
## **Replace task**
___
* **URL**
* - https://kanban-app-p2.herokuapp.com/task/:id
* **Method:**
* - **PUT**
* **URL Params**
* - **Required:**
* - > id = [integer]
* **Headers**
* - **Required:**
* - > access_token = [string]

* **Data Params**
* - **Required:**
* - > title = [string]
* - > category = [string]
* **Success Response**
- * **code:200**
- * **content:**
```
{
    "message": "Succes Edit Task"
}
```
* **Error Response**
- * **code:401**
- * **content:**
 ```
{
    "message": "Unauhtorize access"
}
```
- * **code:404**
- * **content:**
 ```
{
    "message": "Data not found
}
```

## **Modified Task**
___
* **URL**
* - https://kanban-app-p2.herokuapp.com/task/:id
* **Method:**
* - **PATCH**
* **URL Params**
* - **Required:**
* - > id = [integer]
* **Headers**
* - **Required:**
* - > access_token = [string]

* **Data Params**
* - **Required:**
* - > category = [string]
* **Success Response**
- * **code:200**
- * **content:**
```
{
    "message": "Succes Modified"
}
```
* **Error Response**
- * **code:401**
- * **content:**
 ```
{
    "message": "Unauhtorize access"
}
```
- * **code:404**
- * **content:**
 ```
{
    "message": "Data not found
}
```
- * **code:401**
- * **content:**
 ```
{
    "message": "Please Login"
}
```
- * **code:500**
- * **content:**
 ```
{
    "message": "Internal Server error"
}
```
 
 ## **Delete Task**
___
* **URL**
* - https://kanban-app-p2.herokuapp.com/task/:id
* **Method:**
* - **Delete**
* **URL Params**
* - **Required:**
* - > id = [integer]
* **Headers**
* - **Required:**
* - > access_token = [string]

* **Success Response**
- * **code:200**
- * **content:**
```
{
    "message": "Succes delete task"
}
```
* **Error Response**
- * **code:401**
- * **content:**
 ```
{
    "message": "Unauhtorize access"
}
```
- * **code:404**
- * **content:**
 ```
{
    "message": "Data not found
}
```
- * **code:401**
- * **content:**
 ```
{
    "message": "Please Login"
}
```
- * **code:500**
- * **content:**
 ```
{
    "message": "Internal Server error"
}
```

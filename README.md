# kanban-app
# **KANBAN APP**
___

## **End Point**
___
* **URL**
* **Method:**
* **URL Params**
>**Required**

* **Data Params**
* **Success Response**
- * **code:**
- * **content:**
* **Error Response**
- * **code:**
- * **content:**
 
* **Sample Call**

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
* **URL Params**
>**Required**

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

**Title**
----
  <_Additional information about your API call. Try to use verbs that match both request type (fetching vs modifying) and plurality (one vs multiple)._>
  Client: https://robby-kanban.web.app/
  Server: https://robby-kanban.herokuapp.com/

* **URL**

  https://robby-kanban.herokuapp.com/register

* **Method:**

  `POST`
  
*  **URL Params**

   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._> 

   **Required:**
 
   first_name: string,
   last_name: string,
   email: string,
   password: string

   **Optional:**
 
  

* **Data Params**

  <_If making a post request, what should the body payload look like? URL Params rules apply here too._>

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 201 <br />
    **Content:** `{
                    "email": "robbykansas@student.com",
                    "id": 4
                }`
 
* **Error Response:**

  <!-- { status: 401, message: 'invalid email/password' } -->

  OR

  <!-- * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Email Invalid" }` -->

* **URL**

  https://robby-kanban.herokuapp.com/login

* **Method:**

  `POST`
  
*  **URL Params**

   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._> 

   **Required:**
 
   email:string,
   password:string

   **Optional:**
 
  

* **Data Params**

  <_If making a post request, what should the body payload look like? URL Params rules apply here too._>

* **Success Response:**
  status: 201
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvYmJ5QHN0dWRlbnQuY29tIiwiaWQiOjEsImlhdCI6MTYwNzA4ODQ3M30.I-oIeLjphmnT0_MKi57kW0X_VnZOF27nu9kRSlgrkng"
    }
 
* **Error Response:**

  { status: 401, message: 'invalid email/password' }

  OR

  status: 401
{
    "message": "invalid account"
}

* **URL**

  https://robby-kanban.herokuapp.com/tasks/

* **Method:**

  `GET`
  
*  **URL Params**



   **Required:**
 


   **Optional:**
 
  

* **Data Params**

  <_If making a post request, what should the body payload look like? URL Params rules apply here too._>

* **Success Response:**
  status: 200
[
    {
        "id": 1,
        "title": "kanban",
        "category": "Doing",
        "desc": "add kanban",
        "UserId": 1,
        "createdAt": "2020-12-04T11:26:41.716Z",
        "updatedAt": "2020-12-04T11:26:41.716Z",
        "User": {
            "id": 1,
            "first_name": "Robby",
            "last_name": "Kansas",
            "email": "robby@student.com",
            "password": "$2a$08$/zwquivaF.m0UevfXQZmnuGVCh6SCAPU1OTrJbixmqblCoxqcZTW.",
            "createdAt": "2020-12-04T11:24:27.296Z",
            "updatedAt": "2020-12-04T11:24:27.296Z"
        }
    },
    {
        "id": 2,
        "title": "fetch",
        "category": "Backlog",
        "desc": "add fetch",
        "UserId": 1,
        "createdAt": "2020-12-04T12:18:48.933Z",
        "updatedAt": "2020-12-04T12:19:00.109Z",
        "User": {
            "id": 1,
            "first_name": "Robby",
            "last_name": "Kansas",
            "email": "robby@student.com",
            "password": "$2a$08$/zwquivaF.m0UevfXQZmnuGVCh6SCAPU1OTrJbixmqblCoxqcZTW.",
            "createdAt": "2020-12-04T11:24:27.296Z",
            "updatedAt": "2020-12-04T11:24:27.296Z"
        }
    }
]
 
* **Error Response:**

    status 500
{
    "message": "internal server error"
}

* **URL**

  https://robby-kanban.herokuapp.com/login

* **Method:**

  `POST`
  
*  **URL Params**

   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._> 

   **Required:**
 
   email:string,
   password:string

   **Optional:**
 
  

* **Data Params**

  <_If making a post request, what should the body payload look like? URL Params rules apply here too._>

* **Success Response:**
  status: 201
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvYmJ5QHN0dWRlbnQuY29tIiwiaWQiOjEsImlhdCI6MTYwNzA4ODQ3M30.I-oIeLjphmnT0_MKi57kW0X_VnZOF27nu9kRSlgrkng"
    }
 
* **Error Response:**

  { status: 401, message: 'invalid email/password' }

  OR

  status: 401
{
    "message": "invalid account"
}


* **URL**

  https://robby-kanban.herokuapp.com/tasks/

* **Method:**

  `POST`
  
*  **URL Params**

   

   **Required:**
 
    title:string,
    category:string,
    desc:string

   **Optional:**
 
  

* **Data Params**

  <_If making a post request, what should the body payload look like? URL Params rules apply here too._>

* **Success Response:**
  status: 201
{
    "id": 1,
    "title": "kanban",
    "category": "Doing",
    "desc": "add kanban",
    "UserId": 1,
    "updatedAt": "2020-12-04T11:26:41.716Z",
    "createdAt": "2020-12-04T11:26:41.716Z"
}
 
* **Error Response:**

    status 500
{
    "message": "internal server error"
}



* **URL**

  https://robby-kanban.herokuapp.com/tasks/:id

* **Method:**

  `PUT`
  
*  **URL Params**

    id:integer
   

   **Required:**
 
    title:string,
    category:string,
    desc:string

   **Optional:**
 
  

* **Data Params**

  <_If making a post request, what should the body payload look like? URL Params rules apply here too._>

* **Success Response:**
  status: 200
{
    "id": 1,
    "title": "kanban-edit",
    "category": "Doing",
    "desc": "add kanban",
    "UserId": 1,
    "createdAt": "2020-12-04T11:26:41.716Z",
    "updatedAt": "2020-12-04T13:38:02.180Z"
}
 
* **Error Response:**

    status 500
{
    "message": "internal server error"
}

    OR

    status 401
{
    "message": "you aren't authorized to access this Task"
}

* **URL**

  https://robby-kanban.herokuapp.com/tasks/:id

* **Method:**

  `GET`
  
*  **URL Params**

    id:integer
   

   **Required:**
 
    

   **Optional:**
 
  

* **Data Params**

  <_If making a post request, what should the body payload look like? URL Params rules apply here too._>

* **Success Response:**
  status: 200
{
    "id": 1,
    "title": "kanban-edit",
    "category": "Doing",
    "desc": "add kanban",
    "UserId": 1,
    "createdAt": "2020-12-04T11:26:41.716Z",
    "updatedAt": "2020-12-04T13:38:02.180Z"
}
 
* **Error Response:**

    status 500
{
    "message": "internal server error"
}

    OR
    
    status 401
{
    "message": "you aren't authorized to access this Task"
}

* **URL**

  https://robby-kanban.herokuapp.com/tasks/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

    id:integer
   

   **Required:**
 
    

   **Optional:**
 
  

* **Data Params**

  <_If making a post request, what should the body payload look like? URL Params rules apply here too._>

* **Success Response:**
  status: 200
{
    "message": "task success to delete"
}
 
* **Error Response:**

    status 500
{
    "message": "internal server error"
}

    OR
    
    status 401
{
    "message": "you aren't authorized to access this Task"
}


* **URL**

  https://robby-kanban.herokuapp.com/tasks/:id

* **Method:**

  `PATCH`
  
*  **URL Params**

    id:integer
   

   **Required:**
 
    category:string

   **Optional:**
 
  

* **Data Params**

  <_If making a post request, what should the body payload look like? URL Params rules apply here too._>

* **Success Response:**
  status: 200
{
    "id": 1,
    "title": "kanban-edit",
    "category": "Done",
    "desc": "add kanban",
    "UserId": 1,
    "createdAt": "2020-12-04T11:26:41.716Z",
    "updatedAt": "2020-12-04T13:46:38.835Z"
}
 
* **Error Response:**

    status 500
{
    "message": "internal server error"
}

    OR
    
    status 401
{
    "message": "you aren't authorized to access this Task"
}

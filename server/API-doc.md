# Kanban App

* **URL**
    /tasks
    
* **Method:**
    `POST`

*  **URL Params**

   **Required:**
    None

*  **HEADERS**
    {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtb3phcnRAbWFpbC5jb20iLCJpYXQiOjE2MDYyMDQ4MjJ9.uNDT6RdhmGOMf0jxd3NpQUjlzjPiMVUow81TCo9-rmc"
    }


* **Data Params**

    None

* **Success Response:**
    *   **Code:** 201 <br />
        **Content:** {
            "id": 7,
            "title": "memancing kemakmuran ",
            "category": "done",
            "UserId": "1",
            "updatedAt": "2020-11-23T12:21:44.420Z",
            "createdAt": "2020-11-23T12:21:44.420Z"
        }

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** {"message": "Internal Server Error"}

* **Sample Call:**
            



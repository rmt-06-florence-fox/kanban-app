# Category List

Used to show all Category Data.

**URL** : `/category/`

**Method** : `GET`

**Auth required** : YES

**Permission required** : NO

**Include**: All Task And User Related to Category

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    [
        {
            "id": 1,
            "name": "Backlog",
            "createdAt": "2020-12-01T17:50:36.591Z",
            "updatedAt": "2020-12-01T17:50:36.591Z",
            "Tasks": [
                {
                    "id": 52,
                    "title": "Cek account lain",
                    "description": "okei",
                    "createdAt": "2020-12-04T03:59:10.798Z",
                    "updatedAt": "2020-12-04T03:59:10.798Z",
                    "CategoryId": 1,
                    "UserId": 2,
                    "User": {
                        "id": 2,
                        "email": "maile@mail.com",
                    }
                }
            ]
        },
        {
            "id": 2,
            "name": "Todo",
            "createdAt": "2020-12-01T17:50:36.591Z",
            "updatedAt": "2020-12-01T17:50:36.591Z",
            "Tasks": [
                {
                    "id": 3,
                    "title": "ngedit bener nih",
                    "description": "ngedit pake put",
                    "createdAt": "2020-12-01T17:52:01.742Z",
                    "updatedAt": "2020-12-04T02:40:45.206Z",
                    "CategoryId": 2,
                    "UserId": 1,
                    "User": {
                        "id": 1,
                        "email": "mail@mail.com",
                    }
                }
            ]
        },
        {
            "id": 3,
            "name": "Doing",
            "createdAt": "2020-12-01T17:50:36.591Z",
            "updatedAt": "2020-12-01T17:50:36.591Z",
            "Tasks": [
                {
                    "id": 50,
                    "title": "adsdas",
                    "description": "dadsa",
                    "createdAt": "2020-12-04T01:59:46.892Z",
                    "updatedAt": "2020-12-04T01:59:46.892Z",
                    "CategoryId": 3,
                    "UserId": 1,
                    "User": {
                        "id": 1,
                        "email": "mail@mail.com",
                    }
                }
            ]
        },
        {
            "id": 4,
            "name": "Done",
            "createdAt": "2020-12-01T17:50:36.591Z",
            "updatedAt": "2020-12-01T17:50:36.591Z",
            "Tasks": [
                {
                    "id": 5,
                    "title": "borogododod",
                    "description": "Ngasih makan bangkong",
                    "createdAt": "2020-12-01T17:53:00.638Z",
                    "updatedAt": "2020-12-02T07:53:32.767Z",
                    "CategoryId": 4,
                    "UserId": 2,
                    "User": {
                        "id": 2,
                        "email": "maile@mail.com",
                    }
                }
            ]
        }
    ]
}
```

## Error Response

**Condition** : If there is an error request from server

**Code** : `500 Internal Server Error`

**Content** : 
```json
{
    "error": "Internal Server Error"
}
```
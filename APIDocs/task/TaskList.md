# Category List

Used to show all Task Data.

**URL** : `/task/`

**Method** : `GET`

**Auth required** : YES

**Permission required** : NO

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    [
        {
            "id": 1,
            "title": "Myaawe",
            "description": "Ngasih makan kucing",
            "createdAt": "2020-12-01T17:51:23.889Z",
            "updatedAt": "2020-12-01T17:51:23.889Z",
            "CategoryId": 1,
            "UserId": 1
        },
        {
            "id": 2,
            "title": "Wugwug",
            "description": "Ngasih makan anjing",
            "createdAt": "2020-12-01T17:51:38.129Z",
            "updatedAt": "2020-12-01T17:51:38.129Z",
            "CategoryId": 2,
            "UserId": 1
        },
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
# Edit Category Task

Used to Edit Category Task Data.

**URL** : `/task/:id`

**Method** : `PATCH`

**Auth required** : YES

**Permission required** : Users Belongs to Task

**Data constraints**

```json
{
    "CategoryId": "[Not Empty]"
}
```

**Data example**

```json
{
    "CategoryId": 2
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "id": 2,
    "title": "Edit Task",
    "description": "Edit Description",
    "createdAt": "2020-12-01T17:52:01.742Z",
    "updatedAt": "2020-12-04T07:08:53.786Z",
    "CategoryId": 2,
    "UserId": 1
}
```

## Error Response

**Condition** : If 'CategoryId' is empty

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    {
        "message": "CategoryId Required"
    }
}
```

**Condition** : If there is an error request from server

**Code** : `500 Internal Server Error`

**Content** : 
```json
{
    "error": "Internal Server Error"
}
```
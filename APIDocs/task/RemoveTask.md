# Remove Task

Used to add remove Task Data.

**URL** : `/task/:id`

**Method** : `DELETE`

**Auth required** : YES

**Permission required** : User Belongs To The Task

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "message": "Task Deleted"
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
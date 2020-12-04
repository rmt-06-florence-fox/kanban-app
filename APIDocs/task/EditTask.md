# Edit Task

Used to Edit Task Data.

**URL** : `/task/:id`

**Method** : `PUT`

**Auth required** : YES

**Permission required** : Users Belongs to Task

**Data constraints**

```json
{
    "title": "[Not Empty]",
    "description": "[Not Empty]"
}
```

**Data example**

```json
{
    "title": "Edit Task",
    "description": "Edit Description",
    "CategoryId": 1
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "id": 3,
    "title": "Edit Task",
    "description": "Edit Description",
    "createdAt": "2020-12-01T17:52:01.742Z",
    "updatedAt": "2020-12-04T07:08:53.786Z",
    "CategoryId": 1,
    "UserId": 1
}
```

## Error Response

**Condition** : If 'title' & 'description' is empty

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    [
        {
            "message": "Title Required",
            "type": "Validation error",
            "path": "title",
            "value": "lululu",
            "origin": "FUNCTION",
            "instance": {
                "id": null,
                "title": "lululu",
                "description": "cekcek",
                "updatedAt": "2020-12-04T07:18:08.324Z"
            },
            "validatorKey": "isNull",
            "validatorName": "isNull",
            "validatorArgs": [
                {
                    "msg": "Title Required",
                    "ignore_whitespace": false
                }
            ],
            "original": {
                "validatorName": "isNull",
                "validatorArgs": [
                    {
                        "msg": "Title Required",
                        "ignore_whitespace": false
                    }
                ]
            }
        },
        {
            "message": "description Required",
            "type": "Validation error",
            "path": "description",
            "value": "cekcek",
            "origin": "FUNCTION",
            "instance": {
                "id": null,
                "title": "lululu",
                "description": "cekcek",
                "updatedAt": "2020-12-04T07:18:08.324Z"
            },
            "validatorKey": "isNull",
            "validatorName": "isNull",
            "validatorArgs": [
                {
                    "msg": "description Required",
                    "ignore_whitespace": false
                }
            ],
            "original": {
                "validatorName": "isNull",
                "validatorArgs": [
                    {
                        "msg": "description Required",
                        "ignore_whitespace": false
                    }
                ]
            }
        }
    ]
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
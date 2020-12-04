# Add Category

Used to add new Category Data.

**URL** : `/category/`

**Method** : `POST`

**Auth required** : YES

**Permission required** : NO

**Data constraints**

```json
{
    "name": "[Not Empty]",
}
```

**Data example**

```json
{
    "name": "new Category"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "name": "new Category"
}
```

## Error Response

**Condition** : If 'name' is empty

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    [
        {
            "message": "Category Name Required",
            "type": "Validation error",
            "path": "name",
            "value": "",
            "origin": "FUNCTION",
            "instance": {
                "id": null,
                "name": "",
                "updatedAt": "2020-12-04T06:20:42.139Z",
                "createdAt": "2020-12-04T06:20:42.139Z"
            },
            "validatorKey": "notEmpty",
            "validatorName": "notEmpty",
            "validatorArgs": [
                {
                    "msg": "Category Name Required"
                }
            ],
            "original": {
                "validatorName": "notEmpty",
                "validatorArgs": [
                    {
                        "msg": "Category Name Required"
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
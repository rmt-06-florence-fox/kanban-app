# Register

Used to collect a create a new user account.

**URL** : `/user/register/`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "email": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "email": "mail@mail.com",
    "password": "iniPassword"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "id":1,
    "email": "mail@mail.com"
}
```

## Error Response

**Condition** : If 'email' and 'password' get error validation

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
    [
        {
            "message": "Email Required",
            "type": "Validation error",
            "path": "email",
            "value": "",
            "origin": "FUNCTION",
            "instance": {
                "id": null,
                "email": "",
                "password": "",
                "updatedAt": "2020-12-04T06:06:26.268Z",
                "createdAt": "2020-12-04T06:06:26.268Z"
            },
            "validatorKey": "notEmpty",
            "validatorName": "notEmpty",
            "validatorArgs": [
                {
                    "msg": "Email Required"
                }
            ],
            "original": {
                "validatorName": "notEmpty",
                "validatorArgs": [
                    {
                        "msg": "Email Required"
                    }
                ]
            }
        },
        {
            "message": "Email must be an Email",
            "type": "Validation error",
            "path": "email",
            "value": "",
            "origin": "FUNCTION",
            "instance": {
                "id": null,
                "email": "",
                "password": "",
                "updatedAt": "2020-12-04T06:06:26.268Z",
                "createdAt": "2020-12-04T06:06:26.268Z"
            },
            "validatorKey": "isEmail",
            "validatorName": "isEmail",
            "validatorArgs": [
                {
                    "msg": "Email must be an Email",
                    "allow_display_name": false,
                    "require_display_name": false,
                    "allow_utf8_local_part": true,
                    "require_tld": true
                }
            ],
            "original": {
                "validatorName": "isEmail",
                "validatorArgs": [
                    {
                        "msg": "Email must be an Email",
                        "allow_display_name": false,
                        "require_display_name": false,
                        "allow_utf8_local_part": true,
                        "require_tld": true
                    }
                ]
            }
        },
        {
            "message": "Password Required",
            "type": "Validation error",
            "path": "password",
            "value": "",
            "origin": "FUNCTION",
            "instance": {
                "id": null,
                "email": "",
                "password": "",
                "updatedAt": "2020-12-04T06:06:26.268Z",
                "createdAt": "2020-12-04T06:06:26.268Z"
            },
            "validatorKey": "notEmpty",
            "validatorName": "notEmpty",
            "validatorArgs": [
                {
                    "msg": "Password Required"
                }
            ],
            "original": {
                "validatorName": "notEmpty",
                "validatorArgs": [
                    {
                        "msg": "Password Required"
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
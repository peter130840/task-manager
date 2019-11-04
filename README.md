# task-manager

### Create user

#### Request
- Method: **POST**
- URL:  ```/users```
- Headers：```Content-Type=application/json```
- Body:
```
{
	"name":"PeterLiu",
	"email":"example@gmail.com",
	"password":"abcdefg"
}
```

#### Response
- Body
```
{
    "user": {
        "age": 0,
        "_id": "5dbd8bd3f9269a0017aa6321",
        "name": "PeterLiu",
        "email": "example@gmail.com",
        "createdAt": "2019-11-02T13:59:47.563Z",
        "updatedAt": "2019-11-02T13:59:47.872Z",
        "__v": 1
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGJkOGJkM2Y5MjY5YTAwMTdhYTYzMjEiLCJpYXQiOjE1NzI3MDMxODd9.nZKimQfMO9cDYn_-7ocDlMKcUwF9YUHR1S8xuBm5x4c"
}
```

### Login user

#### Request
- Method: **POST**
- URL:  ```/users/login```
- Headers：```Content-Type=application/json```
- Body:
```
{
	"email":"example@gmail.com",
	"password":"abcdefg"
}
```

#### Response
- Body
```
{
    "user": {
        "age": 0,
        "_id": "5dbd8bd3f9269a0017aa6321",
        "name": "PeterLiu",
        "email": "example@gmail.com",
        "createdAt": "2019-11-02T13:59:47.563Z",
        "updatedAt": "2019-11-02T14:01:46.470Z",
        "__v": 3
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGJkOGJkM2Y5MjY5YTAwMTdhYTYzMjEiLCJpYXQiOjE1NzI3MDMzMDZ9.vvQ083kbQnrFeKT88-hjqqwSgCKV8Nz2FM-pq_8KSrg"
}
```

### Logout user

#### Request
- Method: **POST**
- URL:  ```/users/logout```
- Headers：
```
Content-Type=application/json
Authorization=Bearer Token
```
- Body:
```
```

#### Response
- Body
```
```

### Logout all device

#### Request
- Method: **POST**
- URL:  ```/users/logoutAll```
- Headers：
```
Content-Type=application/json
Authorization=Bearer Token
```
- Body:
```
```

#### Response
- Body
```
```

### Create task

#### Request
- Method: **POST**
- URL:  ```/tasks```
- Headers：```Content-Type=application/json```
- Authorization : ```Bearer Token```
- Body:
```
{
	"description":"fourth",
	"completed":false
}
```

#### Response
- Body
```
{
    "completed": false,
    "_id": "5dbd8d44f9269a0017aa6324",
    "description": "fourth",
    "owner": "5dbd8bd3f9269a0017aa6321",
    "createdAt": "2019-11-02T14:05:56.385Z",
    "updatedAt": "2019-11-02T14:05:56.385Z",
    "__v": 0
}
```


### Read profile

#### Request
- Method: **GET**
- URL:  ```/users/me```
- Authorization : ```Bearer Token```
- Body:
```
```

#### Response
- Body
```
{
    "age": 0,
    "_id": "5dbd8bd3f9269a0017aa6321",
    "name": "PeterLiu",
    "email": example@gmail.com",
    "createdAt": "2019-11-02T13:59:47.563Z",
    "updatedAt": "2019-11-02T14:01:46.470Z",
    "__v": 3
}
```


### Read profile

#### Request
- Method: **GET**
- URL:  ```/users/me```
- Authorization : ```Bearer Token```
- Body:
```
```

#### Response
- Body
```
{
    "age": 0,
    "_id": "5dbd8bd3f9269a0017aa6321",
    "name": "PeterLiu",
    "email": example@gmail.com",
    "createdAt": "2019-11-02T13:59:47.563Z",
    "updatedAt": "2019-11-02T14:01:46.470Z",
    "__v": 3
}
```


### Update user

#### Request
- Method: **PATCH**
- URL:  ```/users/me```
- Headers：```Content-Type=application/json```
- Authorization : ```Bearer Token```
- Body:
```
{
	"name": "Andrewa",
	"password":"pass1234"
}
```

#### Response
- Body
```
{
    "age": 0,
    "_id": "5dbd8bd3f9269a0017aa6321",
    "name": "Andrewa",
    "email": "example@gmail.com",
    "createdAt": "2019-11-02T13:59:47.563Z",
    "updatedAt": "2019-11-04T10:13:23.095Z",
    "__v": 4
}
```

### Update task

#### Request
- Method: **PATCH**
- URL:  ```/tasks/:id```
- Headers：```Content-Type=application/json```
- Authorization : ```Bearer Token```
- Body:
```
{
	"description":"desc",
	"completed":false
}
```

#### Response
- Body
```
{
    "completed": false,
    "_id": "5dbffa0ea236ee00173054c6",
    "description": "desc",
    "owner": "5dbd8bd3f9269a0017aa6321",
    "createdAt": "2019-11-04T10:14:38.806Z",
    "updatedAt": "2019-11-04T10:14:48.567Z",
    "__v": 0
}
```


### Read tasks

#### Request
- Method: **GET**
- URL:  ```/tasks?completeds=true&rowPerPage=10&page=1&sortBy=createdAt:desc```
- Authorization : ```Bearer Token```
- Body:
```
```

#### Response
- Body
```
[
    {
        "completed": false,
        "_id": "5dbffa0ea236ee00173054c6",
        "description": "desc",
        "owner": "5dbd8bd3f9269a0017aa6321",
        "createdAt": "2019-11-04T10:14:38.806Z",
        "updatedAt": "2019-11-04T10:14:48.567Z",
        "__v": 0
    },
    {
        "completed": false,
        "_id": "5dbd8d44f9269a0017aa6324",
        "description": "fourth",
        "owner": "5dbd8bd3f9269a0017aa6321",
        "createdAt": "2019-11-02T14:05:56.385Z",
        "updatedAt": "2019-11-02T14:05:56.385Z",
        "__v": 0
    }
]
```


### Read task

#### Request
- Method: **GET**
- URL:  ```/tasks/:id```
- Authorization : ```Bearer Token```
- Body:
```
```

#### Response
- Body
```
{
    "completed": false,
    "_id": "5dbffa0ea236ee00173054c6",
    "description": "desc",
    "owner": "5dbd8bd3f9269a0017aa6321",
    "createdAt": "2019-11-04T10:14:38.806Z",
    "updatedAt": "2019-11-04T10:14:48.567Z",
    "__v": 0
}
```


### Delete user

#### Request
- Method: **DELETE**
- URL:  ```/users/me```
- Authorization : ```Bearer Token```
- Body:
```
```

#### Response
- Body
```
{
    "age": 0,
    "_id": "5dbd77dc49ccb31794f61fe4",
    "name": "PeterLiu",
    "email": "example@gmail.com",
    "createdAt": "2019-11-02T12:34:37.030Z",
    "updatedAt": "2019-11-02T12:34:37.128Z",
    "__v": 1
}
```


### Delete task

#### Request
- Method: **DELETE**
- URL:  ```/tasks/:id```
- Authorization : ```Bearer Token```
- Body:
```
```

#### Response
- Body
```
{
    "completed": false,
    "_id": "5dbffa0ea236ee00173054c6",
    "description": "desc",
    "owner": "5dbd8bd3f9269a0017aa6321",
    "createdAt": "2019-11-04T10:14:38.806Z",
    "updatedAt": "2019-11-04T10:14:48.567Z",
    "__v": 0
}
```

### Upload avatar

#### Request
- Method: **POST**
- URL:  ```/users/me/avatar```
- Authorization : ```Bearer Token```
- Body:
```
upload=profile-pic.jpg
```

#### Response
- Body
```
upload success!
```


### Delete avatar

#### Request
- Method: **DELETE**
- URL:  ```/users/me/avatar```
- Authorization : ```Bearer Token```
- Body:
```
```

#### Response
- Body
```
delete success
```

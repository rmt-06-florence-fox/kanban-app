# FANCY KANBAN
## REST API DOCUMENTATION

## Open Endpoints

Open endpoints require no Authentication.

* [Login](./APIDocs/user/login.md) : `POST /user/register/`
* [Register](./APIDocs/user/register.md) : `POST /user/login/`

## Closed Endpoints

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above. 

Every endpoints below require a valid Token to get an access:

Note: 
* ( * ) Sign: Could Be Accessible By Any User Logged In
* ( + ) Sign: Could Be Accessible If User Logged In Has Permission. 

## Category Related

* [*Show Category List](./APIDocs/category/CategoryList.md) : `GET /category/`  
* [*Add New Category](./APIDocs/category/AddCategory.md) : `POST /category/`
* [*Edit Category Name](./APIDocs/category/EditCategory.md): `PUT /category/:id/`

## Task Related

* [*Show Task List](./APIDocs/task/TaskList.md) : `GET /task/`
* [*Add New Task](./APIDocs/task/AddTask.md) : `POST /task/`
* [+Edit Task](./APIDocs/task/EditTask.md) : `PUT /task/:id/`
* [+Edit Category Task Only](./APIDocs/task/EditCategoryTask.md) : `PATCH /task/:id/`
* [+Remove Task](./APIDocs/task/RemoveTask.md) : `DELETE /task/:id/`
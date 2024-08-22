# Task Management Project Build with TypeORM

Dependency we have to run this project on our local machine
We should have installed `postgres`, `typescript` on our machine locally.

Clone this project from given git [repo](https://github.com/ashishpal07/Learn-react-step-by-step/tree/gokapture-assignment/task_management) where you want to clone go to that directory in your machine and run below command
`git clone https://github.com/ashishpal07/Learn-react-step-by-step/tree/gokapture-assignment/task_management`

## After cloning repository

You need to create task_management/.env file and you need to provide these keys values
```
PORT = PORT NUMBER (eg.4000)
JWT_SECRET_KEY = SECRET_KEY for JWT authentication (eg."gokapture")
DB_USERNAME = User name of you postgresql
DB_PASSWORD = password of your postgresql
```

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

# API END POINTS DOCS  (I have considerd only single role can given to each user for simplicity but yes in real life we have list of roles have per user)
USER API END POINTS
1.Register user API
```
http://localhost:<your_port_number>/api/register => POST

I have uses zod library for input validation so here you neet to insert in body eg.
{
  "userName": "gokapture@gmail.com",
  "password": "gokapture",
  "role": "User" or "Admin"
}

this will give you response "User registered successfully!"
```

2.Login user API
```
http://localhost:<your_port_number>/api/login => POST

I have uses zod library for input validation so here you neet to insert in body eg.
{
  "userName": "gokapture@gmail.com",
  "password": "gokapture"
}

this will give you response "JWT TOKEN"
```

TASK API END POINTS
1. Create Task API (Only authenticated user can create task for himself)
```
http://localhost:<your_port_number>/api/tasks/  => POST
I have uses zod library for input validation so here you neet to insert in body eg.
{
  "title": <value>,
  "description": <value>,
  "priority": "High" or "Medium" or "Low",
  "status": "Todo" or "In Progress" or "Done" (By default),
  "dueDate": "dd/mm/yyyy",
}

this will give you response "Task created successfully"
```

2. Get all tasks with pagination (Auuthenticatu user can get his all task)
```
http://localhost:<your_port_number>/api/tasks?lmit=<limit>&page=<page>  => GET
```

3. Get single task by id (Only admin can get this single task by id)
```
http://localhost:<your_port_number>/api/tasks/{id} => GET

you will get respose details of task with provided {id}
```

4. Update task by id (Only authenticate user can update his task)
```
http://localhost:<your_port_number>/api/tasks/{id} => PUT

put what coloum you want to update
{
  "title": <value>
}

you will get respose details of updated task with provided {id}
```

5. Delete task by id (Only authenticated user can delete his task)
```
http://localhost:<your_port_number>/api/tasks/{id} => DELETE

you will get respose "Your task deleted successfully"
```

6. Filter task on the basis of status | priority | dueDate (only admini can access this routes)
```
http://localhost:<your_port_number>/api/tasks?status=<status_val>&priority=<priority_val>&dueDate='dd/mm/yyyy' => GET
values should be
status_val = "Done" | "Todo" | "In Progress"
priority_val = "Low" | "Medium" | "High"

you will get respose give all filtered task
```

7. Search task on the basis of query present in description | title (Only Admin can access this routes)
```
http://localhost:<your_port_number>/api/tasks?query=<string_value> => GET

you will get respose give all searched task based on <string_value>
```
Approach : 
I have implemented the user APIs & have given role based access and assing only one role per user that can be either (User | Admin)
I have assume that searching, filter & getting single task API can be access via admins only & every user can (CRUD) task for himself if they are authenticated users.

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

# API END POINTS DOCS
USER API END POINTS
1. http://localhost:<your_portnumber>/api/register

# Petrol pump management system

This project includes management system for petrol pump, it includes employee, salary and expenditure management in the following project.

## Development

We have separated the development into front-end and back-end

- Backend
- Frontend

### Backend

#### Install Dependencies

``` bash
npm install
```

#### Setup the PostgreSQL database

- Install the PostgreSQL database according to your operating system

- Create a database with name **pbms**.

- Add the Database url to the .env file

- Initialize Prisma an ORM to interact with the database

```bash
npx prisma generate
```

- Run the following command when you change anything in Schema.prisma file

```bash
npx prisma migrate dev
```

#### Start the backend server

```bash
npm start
```

### Frontend

#### Install Dependencies

```bash
npm install
```

#### Start the frontend server

```bash
npm run dev
```

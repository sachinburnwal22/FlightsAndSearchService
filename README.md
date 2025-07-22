#Welcome to Flights Service

## Project Setup

-clone the project on your local
-Execute `npm install` on the same path as your root directory of the download project
-Create a `.env` file in the root directory and add the following env variable - `PORT=3000`
-Inside the `src\config` folder create a new file `config.json` and then add the following piece of code

```
{
  "development": {
    "username": <LOGIN_NAME>,
    "password": <LOGIN_PASSWORD>,
    "database": "Flights_search_DB_DEV",
    "host": "127.0.0.1",
    "port": "3306",
    "dialect": "mysql"
  }
}
```

- Once you have added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
  and then execute `npx sequelize db:migrate`
  ##DB Design
  #Airplane Table
  -Id
  -model_number
  -capacity
  -created_at
  -updated_at

#Flights
-id
-src_airport_id
-dest_airport_id
-departure_date
-arrival_date
-departure_time
-arrival_time

#Airport
-id
-name
-city_id
-address

#City
-id
-name

# Tarea 1 - Pruebas de Software

## Description

This project is an API that allows flexible generation and management of automobile data. Users can generate a specific number of cars with random data. Additionally, the API offers filtering capabilities that allow users to search for cars by type, color, and price.


## Install the dependencies
```sh
npm install
```

## Run project
```sh
npm run dev
```
The server will run at `http://localhost:3000` by default.

# Endpoints

### Generate Automobiles
- Description: This endpoint generates a determined number of automobiles with random features.
- HTTP Method: POST
- Route: /automobiles
```shell
http://localhost:3000/api/automobiles
```
- Request Body (JSON): <br>
    - numberOfAutomobiles: number of cars to be generated
```json
{
    "numberOfAutomobiles": 5
}
```
- Successful Response (Status Code 200):
```json
{
    "message": "5 cars generated and saved.",
    "automobiles": [...]
}
```

## Get All Automobiles

- Description: Gets all stored automobiles.
- HTTP Method: GET
- Route: /automobiles
```shell
http://localhost:3000/api/automobiles
```
- Successful Response (Status Code 200):
```json
[...]
```


## Filter and Get Automobiles

- Description: Filters and retrieves automobiles based on specific criteria.
- HTTP Method: GET
- Route: /automobiles/filter
```shell
http://localhost:3000/api/automobiles/filter
```
- Request Body (JSON):
```json
{
    "filters": {
        "maxPrice": 20000000,
        "type": "SUV",
        "color": "Red"
    }
}
```
- Successful Response (Status Code 200):
```json
[...]
```

## Filter Automobiles for Agents
- Description: Filters automobiles based on specific criteria.
- HTTP Method: GET
- Route: /automobiles/filter/agent
```shell
http://localhost:3000/api/automobiles/filter/agent
```
- Request Body (JSON):

```json
{
    "filters": {
        "maxPrice": 20000000,
        "type": "SUV",
        "color": "Red"
    },
    "isAgent": true
}
```
- Successful Response (Status Code 200):
```json
[...]
```

## Consult Automobile
- Description: Queries a car by its ID and increases its popularity.
- HTTP Method: GET
- Route: /automobiles/consult
```shell
http://localhost:3000/api/automobiles/consult
```
- Request Body (JSON):
```json
{
    "id": "1234567890"
}
```
- Successful Response (Status Code 200):
```json
{...}
```

## Author
Esteban Llanos
e.llanos01@ufromail.cl

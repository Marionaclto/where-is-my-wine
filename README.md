# where-is-my-wine
Where is my wine is a search tool to find a restaurant that have the wine you fancy.

## Database migration
Create a database in MySQL : ``` create database where_is_my_wine ```
Add a ``` .env ``` file to the main folder of this repository containing the MySQL authentication information for MySQL user.
Run ``` yarn migrate ```


## Installation
run ``` yarn ``` in the project directory 
cd client and run ``` yarn ```

## Development
Run ``` yarn start ``` in the project directory

## User Flow

![User Flow](/client/public/img/USER_FLOW.png)

## Database schema

![DB schema](/client/public/img/db_schema.png)

## API routes plan

### wines

##### 1. Get all the wines (GET)

**URL** : /api/wines

**Response Object** : 
    {
    id: integer
    name: string
    Classification: string
    Description: string
    Variety: string
    image: string
    }

##### 2. Get wine by id (GET)

**URL** : /api/wines/:id

**Response Object** : 
    {
    id: integer
    name: string
    Classification: string
    Description: string
    Variety: string
    image: string
    }

##### 3. Insert wine into wines (POST)

**URL** : /api/wines

**Request object** : 
    {
    name: string
    Classification: string
    Description: string
    Variety: string
    Image: string
    }

##### 4. Delete wine by id (DELETE)

**URL** : /api/wines/:id

**Response Object** : 
    []

##### 5. Change wine information (PATCH)

**URL** : /api/wines/:id

**Request object** : 
    {
    data: you want to change
    }

**Response Object** : 
    []

### restaurants

##### 1. Get all the restaurants (GET)

**URL** : /api/restaurants

**Response Object** : 
    {
    id: integer
    name: string
    City: string
    Latitude: double
    Longitude: double
    Phone: integer
    }


##### 2. Get restaurant by id (GET)

**URL** : /api/restaurants/:id

**Response Object** : 
    {
    id: integer
    name: string
    City: string
    Latitude: double
    Longitude: double
    Phone: integer
    }

##### 3. Insert restaurant into restaurants (POST)

**URL** : /api/restaurants

**Request object** : 
    {
    name: string
    City: string
    Latitude: double
    Longitude: double
    Phone: integer
    }


##### 4. Delete restaurant by id (DELETE)

**URL** : /api/restaurants/:id

**Response Object** : 
    []

##### 5. Change restaurant information (PATCH)

**URL** : /api/restaurants/:id

**Request object** : 
    {
    data: you want to change
    }

**Response Object** : 
    []

### Relation table

##### 1. Get restaurants by wineId (GET)

**URL** : /api/restaurantsByWineId/:wineId

**Response Object** : 
    {
    id: integer,
    name: string,
    city: string,
    latitude: double,
    longitude: double,
    phone: integer,
    wineId: integer,
    restaurantId: integer
    }

### Full stack app architecture

![Architecture app](/client/public/img/architecture_app.jpg)

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
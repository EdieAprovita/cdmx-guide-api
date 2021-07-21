BACKEND CITY GUIDE

APP PARA CONOCER LUGARES PARA COMPRAR Y COMER PRODUCTOS VEGANOS

PARA RESTAURANTES,NEGOCIOS DE COMIDA,MERCADOS,RECETAS DE COCINA, PROFESIONES Y DOCTORES

USERS ROUTES:

| URL HTTP verb               | Request | body    | Action                 |
| --------------------------- | ------- | ------- | ---------------------- |
| /api/users                  | GET     | (empty) | Returns all Users      |
| /api/users/profile          | GET     | (empty) | Get User Profile       |
| /api/users/:id              | GET     | (empty) | Get User Profile By Id |
| /api/users/signup           | POST    | JSON    | Register new User      |
| /api/users/login            | POST    | JSON    | Login User             |
| /api/users/profile/updateMe | PUT     | JSON    | Update User Profile    |
| /api/users/update/:id       | PUT     | JSON    | Update User Admin      |
| /api/users/:id              | DELETE  | (empty) | Delete User            |

BUSINESS ROUTES:

| URL HTTP verb                | Request | body    | Action                 |
| ---------------------------- | ------- | ------- | ---------------------- |
| /api/businessses             | GET     | (empty) | Returns all Business   |
| /api/businessses/:id         | GET     | (empty) | Get Single Business    |
| /api/businessses/top         | GET     | (empty) | Get Top Business       |
| /api/businessses/create      | POST    | JSON    | Create a Business      |
| /api/businessses/:id/reviews | POST    | JSON    | Create Business Review |
| /api/businessses/edit/:id    | PUT     | JSON    | Update Business        |
| /api/businessses/delete/:id  | DELETE  | (empty) | Delete Business        |

DOCTOR ROUTES:

| URL HTTP verb            | Request | body    | Action               |
| ------------------------ | ------- | ------- | -------------------- |
| /api/doctors             | GET     | (empty) | Returns all Doctor   |
| /api/doctors/:id         | GET     | (empty) | Get Single Doctor    |
| /api/doctors/top         | GET     | (empty) | Get Top Doctor       |
| /api/doctors/create      | POST    | JSON    | Create a Doctor      |
| /api/doctors/:id/reviews | POST    | JSON    | Create Doctor Review |
| /api/doctors/edit/:id    | PUT     | JSON    | Update Doctor        |
| /api/doctors/delete/:id  | DELETE  | (empty) | Delete Doctor        |

MARKET ROUTES:

| URL HTTP verb            | Request | body    | Action               |
| ------------------------ | ------- | ------- | -------------------- |
| /api/markets             | GET     | (empty) | Returns all Market   |
| /api/markets/:id         | GET     | (empty) | Get Single Market    |
| /api/markets/top         | GET     | (empty) | Get Top Market       |
| /api/markets/create      | POST    | JSON    | Create a Market      |
| /api/markets/:id/reviews | POST    | JSON    | Create Market Review |
| /api/markets/edit/:id    | PUT     | JSON    | Update Market        |
| /api/markets/delete/:id  | DELETE  | (empty) | Delete Market        |

PROFESSION ROUTES:

| URL HTTP verb                | Request | body    | Action                   |
| ---------------------------- | ------- | ------- | ------------------------ |
| /api/professions             | GET     | (empty) | Returns all Profession   |
| /api/professions/:id         | GET     | (empty) | Get Single Profession    |
| /api/professions/top         | GET     | (empty) | Get Top Profession       |
| /api/professions/create      | POST    | JSON    | Create a Profession      |
| /api/professions/:id/reviews | POST    | JSON    | Create Profession Review |
| /api/professions/edit/:id    | PUT     | JSON    | Update Profession        |
| /api/professions/delete/:id  | DELETE  | (empty) | Delete Profession        |

RECIPE ROUTES:

| URL HTTP verb            | Request | body    | Action               |
| ------------------------ | ------- | ------- | -------------------- |
| /api/recipes             | GET     | (empty) | Returns all Recipe   |
| /api/recipes/:id         | GET     | (empty) | Get Single Recipe    |
| /api/recipes/top         | GET     | (empty) | Get Top Recipe       |
| /api/recipes/create      | POST    | JSON    | Create a Recipe      |
| /api/recipes/:id/reviews | POST    | JSON    | Create Recipe Review |
| /api/recipes/edit/:id    | PUT     | JSON    | Update Recipe        |
| /api/recipes/delete/:id  | DELETE  | (empty) | Delete Recipe        |

RESTAURANT ROUTES:

| URL HTTP verb               | Request | body    | Action                   |
| --------------------------- | ------- | ------- | ------------------------ |
| /api/restaurant             | GET     | (empty) | Returns all Restaurant   |
| /api/restaurant/:id         | GET     | (empty) | Get Single Restaurant    |
| /api/restaurant/top         | GET     | (empty) | Get Top Restaurant       |
| /api/restaurant/create      | POST    | JSON    | Create a Restaurant      |
| /api/restaurant/:id/reviews | POST    | JSON    | Create Restaurant Review |
| /api/restaurant/edit/:id    | PUT     | JSON    | Update Restaurant        |
| /api/restaurant/delete/:id  | DELETE  | (empty) | Delete Restaurant        |

# Graphql Apollo Server Typescript Starter

A starting point for graphql projects.

## Installation

Use the package manager npm or yarn to install .

```bash
git clone https://github.com/shivamangina/Boilerplate-Node-Typescript-Apollo-server-Express-GraphQL-PostgreSQL
cd Boilerplate-Node-Typescript-Apollo-server-Express-GraphQL-PostgreSQL
npm install 
npm run watch
```

## Usage
###  Database
Change **URI** in *db.ts* to connect to database. This project uses PostgresSQL as database and Sequelize as ORM.



###  Sample queries and mutations

```javascript

# Write your query or mutation here
mutation Create {
  addQuote(phrase: "You know nothing, Jon Snow.",quotee: "Ygrett") {
    id
    phrase
  }
}

query Read {
  quotes {
   id
    phrase
    quotee
  }
}

mutation Update($id: ID!) {
  editQuote(id: $id,phrase: " Ssw.", quotee: "Wassh") {
    id
    phrase
    quotee
 
  }
}

mutation Delete($id: ID!) {
  deleteQuote(id: $id) {
    ok
  }
}

```
## Deployment
### To build

`npm run build`

## Build With
* [GraphQL](https://www.npmjs.com/package/graphql) 
* [Apollo Server](https://www.npmjs.com/package/@apollo/server) 
* [Sequelize](https://www.npmjs.com/package/sequelize) 
* [TypeScript](https://www.npmjs.com/package/typescript) 

## Contributing

Pull requests are welcome. For changes and Ideas, please open an issue to discuss what you would like to change.

### Leave a star if you like it⭐

## License
[MIT](https://choosealicense.com/licenses/mit/)
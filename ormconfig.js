const config={
    "type": "mysql",
    "host": "94.191.121.109",
    "port": 3306,
    "username": "root",
    "password": "pluto1114",
    "database": "final-api",
    "synchronize": false,
    "logging": true,
    "entities": [
       "src/entity/**/*.ts"
    ],
    "entityPrefix":"fa_",
    "migrations": [
       "src/migration/**/*.ts"
    ],
    "subscribers": [
       "src/subscriber/**/*.ts"
    ],
    "cli": {
       "entitiesDir": "src/entity",
       "migrationsDir": "src/migration",
       "subscribersDir": "src/subscriber"
    }
 }

 module.exports=config
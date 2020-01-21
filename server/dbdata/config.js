"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const development = process.env.NODE_ENV === 'development';
exports.default = {
    mysql: {
        host: development ? 'mysql-moka' : 'localhost',
        user: 'root',
        password: 'mysqlroot',
        port: '3306',
        database: 'moka',
        multipleStatements: true,
        connectionLimit: 10,
    },
    redis: {
        host: development ? 'redis-moka' : 'localhost',
        port: 6379,
    },
    mongodb: [
        development ? 'mongodb://mongo-moka/admin' : 'mongodb://localhost/admin',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    ],
};

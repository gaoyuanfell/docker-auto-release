"use strict";
/**
 * 连接 mysql
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const config_1 = __importDefault(require("./config"));
const mysql = mysql_1.default.createPool(config_1.default.mysql);
mysql.on('acquire', connection => {
    console.info('Connection %d acquired', connection.threadId);
});
mysql.on('connection', connection => {
    connection.query('SET SESSION auto_increment_increment=1');
});
mysql.on('enqueue', () => {
    console.log('Waiting for available connection slot');
});
mysql.on('release', connection => {
    console.log('Connection %d released', connection.threadId);
});
exports.default = mysql;

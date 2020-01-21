"use strict";
/**
 * 连接 mongodb
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = __importDefault(require("mongodb"));
const mongodb = mongodb_1.default.MongoClient;
const config_1 = __importDefault(require("./config"));
mongodb.connect(config_1.default.mongodb[0], config_1.default.mongodb[1], (err, db) => {
    if (err)
        throw err;
    console.log('------------mongodb初始化成功------------');
});
module.exports = mongodb;

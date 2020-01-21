"use strict";
/**
 * 连接 mongodb
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodbClient = __importStar(require("mongodb"));
const mongodb = mongodbClient.MongoClient;
const config_1 = __importDefault(require("./config"));
mongodb.connect(config_1.default.mongodb[0], config_1.default.mongodb[1], (err, db) => {
    if (err)
        throw err;
    console.log('------------mongodb初始化成功------------');
});
module.exports = mongodb;

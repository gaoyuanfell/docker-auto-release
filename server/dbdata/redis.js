"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 连接 redis
 */
const redis_1 = __importDefault(require("redis"));
const config_1 = __importDefault(require("./config"));
const redis = redis_1.default.createClient(config_1.default.redis);
redis
    .on('ready', () => {
    console.log('------------redis初始化成功------------');
})
    .on('error', () => {
    console.log('------------redis初始化失败------------');
});
exports.default = redis;

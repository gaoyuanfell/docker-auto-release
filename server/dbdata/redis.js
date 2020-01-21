"use strict";
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
/**
 * 连接 redis
 */
const redisClient = __importStar(require("redis"));
const config_1 = __importDefault(require("./config"));
const redis = redisClient.createClient(config_1.default.redis);
redis
    .on('ready', () => {
    console.log('------------redis初始化成功------------');
})
    .on('error', () => {
    console.log('------------redis初始化失败------------');
});
exports.default = redis;

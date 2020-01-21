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
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const express = __importStar(require("express"));
const router = express.Router();
const mysql_1 = __importDefault(require("../../dbdata/mysql"));
const queryStr = fs.readFileSync(path.join(__dirname, 'insert.sql'));
router.get('/', (req, res, next) => {
    mysql_1.default.getConnection((err, connection) => {
        connection.query(queryStr.toString(), (err, rows) => {
            res.json(rows);
        });
        connection.release();
    });
});
exports.default = router;

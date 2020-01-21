"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("../../dbdata/mysql"));
const router = express_1.default.Router();
const queryStr = fs_1.default.readFileSync(path_1.default.join(__dirname, 'insert.sql'));
router.get('/', (req, res, next) => {
    mysql_1.default.getConnection((err, connection) => {
        connection.query(queryStr.toString(), (err, rows) => {
            res.json(rows);
        });
        connection.release();
    });
});
exports.default = router;

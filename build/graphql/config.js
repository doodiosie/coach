"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var DATABASE_DATA = exports.DATABASE_DATA = process.env.NODE_ENV === "production" ? {
    port: 3306,
    database: "revision",
    username: "root",
    password: "root",
    host: "localhost"
} : {
    port: 8889,
    database: "revision",
    username: "root",
    password: "root",
    host: "localhost"
};
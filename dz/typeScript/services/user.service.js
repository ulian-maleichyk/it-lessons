"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
var axios_1 = require("axios");
exports.userService = {
    getAll: function () { return (0, axios_1.default)('https://jsonplaceholder.typicode.com/users'); },
    getById: function (id) { return (0, axios_1.default)('https://jsonplaceholder.typicode.com/users/' + id); }
};

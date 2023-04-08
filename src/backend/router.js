"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get('/foo', function (req, res) {
    res.send('Hello, world!');
});
exports.default = router;

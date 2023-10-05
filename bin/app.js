"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// imports
const express_1 = __importDefault(require("express"));
// variables
const app = (0, express_1.default)();
let port = 3000;
// use
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// set
app.set("view engine", "ejs");
app.set("views", __dirname + "/../pages/ejs");
// listen
app.listen(port, 'localhost', () => {
    console.log('server is listening on port: ' + port);
});
// get
// post
// put
// delete
// 404
app.use((req, res) => {
    res.status(404).render("404", { title: "Page Not Found" });
});

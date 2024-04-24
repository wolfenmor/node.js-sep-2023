"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_router_1 = require("./routers/user.router");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 5100;
app.use("/users", user_router_1.userRouter);
app.listen(PORT, () => {
    console.log(`"server has started" on ${PORT}`);
});

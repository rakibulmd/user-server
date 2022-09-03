const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const userRouter = require("./routes/v1/user.routes.js");

app.use("/user", userRouter);

app.listen(port, () => {
    console.log("server is running at port: ", port);
});

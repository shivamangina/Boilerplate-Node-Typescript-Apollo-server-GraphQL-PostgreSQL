import express from "express";

// Create Express server
const app = express();

app.get("/", function (req: any, res: any) {
    res.send("Hello World");
});

app.listen(3000,() => {
    console.log("server is running");
}
);

export default app;
